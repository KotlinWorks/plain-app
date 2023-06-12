package com.ismartcoding.plain.services

import android.app.Notification
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.os.Binder
import android.os.IBinder
import android.os.Parcelable
import android.widget.RemoteViews
import androidx.core.app.NotificationCompat
import androidx.core.content.getSystemService
import androidx.lifecycle.LifecycleService
import com.ismartcoding.lib.Weak
import com.ismartcoding.lib.channel.receiveEvent
import com.ismartcoding.lib.helpers.CoroutinesHelper.coIO
import com.ismartcoding.plain.Constants
import com.ismartcoding.plain.LocalStorage
import com.ismartcoding.plain.R
import com.ismartcoding.plain.features.AudioActionEvent
import com.ismartcoding.plain.features.audio.*
import com.ismartcoding.plain.helpers.NotificationHelper
import com.ismartcoding.plain.ui.helpers.DialogHelper

// https://developer.android.com/guide/topics/media/media3
class AudioPlayerService : LifecycleService() {
    private lateinit var smallRemoteView: RemoteViews
    private lateinit var largeRemoteView: RemoteViews
    private lateinit var intentPREVIOUS: PendingIntent
    private lateinit var intentPlay: PendingIntent
    private lateinit var intentNext: PendingIntent
    private lateinit var intentCancel: PendingIntent

    private val receiver = object : BroadcastReceiver() {
        override fun onReceive(p0: Context?, intent: Intent?) {
            when (intent?.action) {
                NOTIFICATION_PREVIOUS -> AudioPlayer.instance.skipToPrevious()
                NOTIFICATION_PLAY -> {
                    if (AudioPlayer.instance.isPlaying()) {
                        AudioPlayer.instance.pause()
                    } else {
                        AudioPlayer.instance.play()
                    }
                }
                NOTIFICATION_NEXT -> AudioPlayer.instance.skipToNext()
                NOTIFICATION_CANCEL -> {
                    AudioPlayer.instance.pause()
                    stopForeground(STOP_FOREGROUND_REMOVE)
                    stopSelf()
                }
            }
        }
    }

    inner class LocalBinder : Binder() {
        val service by Weak {
            this@AudioPlayerService
        }
    }

    private var binder: LocalBinder? = null

    override fun onCreate() {
        super.onCreate()

        NotificationHelper.ensureDefaultChannel()
        initRemoteView()

        registerReceiver()

        receiveEvent<AudioActionEvent> { event ->
            when (event.action) {
                AudioAction.COMPLETE -> {
                    if (AudioPlayer.instance.pendingQuit) {
                        AudioPlayer.instance.pendingQuit = false
                        quit()
                        return@receiveEvent
                    }
                    AudioPlayer.instance.setPlayerProgress(0)
                    when (LocalStorage.audioPlayMode) {
                        MediaPlayMode.REPEAT_ONE -> {
                            AudioPlayer.instance.play()
                        }
                        MediaPlayMode.REPEAT -> {
                            AudioPlayer.instance.skipToNext()
                        }
                        MediaPlayMode.SHUFFLE -> {
                            LocalStorage.audioPlaying = LocalStorage.audioPlaylist.random()
                            AudioPlayer.instance.play()
                        }
                    }
                }
                AudioAction.PLAY, AudioAction.PAUSE, AudioAction.NOTIFICATION -> {
                    startForeground(2, createNotification())
                }
                AudioAction.STOP -> {
                }
                AudioAction.NOT_FOUND -> {
                    DialogHelper.showMessage("No audio found")
                }
                else -> {}
            }
        }

        binder = LocalBinder()
    }

    override fun onBind(intent: Intent): IBinder? {
        super.onBind(intent)
        return binder
    }

    fun quit() {
        AudioPlayer.instance.pause()
        stopForeground(STOP_FOREGROUND_REMOVE)
        getSystemService<NotificationManager>()?.cancel(2)
        stopSelf()
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        super.onStartCommand(intent, flags, startId)
        when (intent?.action) {
            AudioServiceAction.PLAY.name -> {
                intent.getParcelableExtra<DPlaylistAudio>("audio")?.let {
                    coIO { playAudio(it) }
                }
            }
            AudioServiceAction.PAUSE.name -> {
                AudioPlayer.instance.pause()
            }
            AudioServiceAction.SKIP_NEXT.name -> {
                AudioPlayer.instance.skipToNext()
            }
            AudioServiceAction.SKIP_PREVIOUS.name -> {
                AudioPlayer.instance.skipToPrevious()
            }
            AudioServiceAction.SEEK.name -> {
                AudioPlayer.instance.seekTo(intent.getIntExtra("progress", 0))
            }
            AudioServiceAction.QUIT.name -> {
                quit()
            }
            AudioServiceAction.PENDING_QUIT.name -> {
                AudioPlayer.instance.pendingQuit = true
            }
        }

        return START_NOT_STICKY
    }

    override fun onTaskRemoved(rootIntent: Intent) {
        super.onTaskRemoved(rootIntent)
        stopSelf()
    }

    override fun onDestroy() {
        binder = null

        unregisterReceiver(receiver)

        AudioPlayer.instance.stop()
        super.onDestroy()
    }

    private fun initRemoteView() {
        smallRemoteView = RemoteViews(packageName, R.layout.view_audio_notification_small)
        largeRemoteView = RemoteViews(packageName, R.layout.view_audio_notification_large)

        intentPREVIOUS = PendingIntent.getBroadcast(
            this, BROADCAST_ID_AUDIO,
            Intent(NOTIFICATION_PREVIOUS).setPackage(packageName),
            PendingIntent.FLAG_CANCEL_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )

        intentPlay = PendingIntent.getBroadcast(
            this, BROADCAST_ID_AUDIO,
            Intent(NOTIFICATION_PLAY).setPackage(packageName),
            PendingIntent.FLAG_CANCEL_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )

        intentNext = PendingIntent.getBroadcast(
            this, BROADCAST_ID_AUDIO,
            Intent(NOTIFICATION_NEXT).setPackage(packageName),
            PendingIntent.FLAG_CANCEL_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )

        intentCancel = PendingIntent.getBroadcast(
            this, BROADCAST_ID_AUDIO,
            Intent(NOTIFICATION_CANCEL).setPackage(packageName),
            PendingIntent.FLAG_CANCEL_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )
    }

    private fun registerReceiver() {
        val intentFilter = IntentFilter()
        intentFilter.addAction(NOTIFICATION_PREVIOUS)
        intentFilter.addAction(NOTIFICATION_PLAY)
        intentFilter.addAction(NOTIFICATION_NEXT)
        intentFilter.addAction(NOTIFICATION_CANCEL)
        registerReceiver(receiver, intentFilter)
    }

    private fun createNotification(): Notification {
        smallRemoteView.setTextViewText(R.id.tv_name, LocalStorage.audioPlaying?.title)
        smallRemoteView.setImageViewResource(
            R.id.img_play,
            if (AudioPlayer.instance.isPlaying()) R.drawable.ic_pause else R.drawable.ic_play
        )
        smallRemoteView.setOnClickPendingIntent(R.id.img_previous, intentPREVIOUS)
        smallRemoteView.setOnClickPendingIntent(R.id.img_play, intentPlay)
        smallRemoteView.setOnClickPendingIntent(R.id.img_next, intentNext)

        largeRemoteView.setTextViewText(R.id.tv_name, LocalStorage.audioPlaying?.title)
        largeRemoteView.setImageViewResource(
            R.id.img_play,
            if (AudioPlayer.instance.isPlaying()) R.drawable.ic_pause else R.drawable.ic_play
        )
        largeRemoteView.setOnClickPendingIntent(R.id.img_previous, intentPREVIOUS)
        largeRemoteView.setOnClickPendingIntent(R.id.img_play, intentPlay)
        largeRemoteView.setOnClickPendingIntent(R.id.img_next, intentNext)
        largeRemoteView.setOnClickPendingIntent(R.id.img_cancel, intentCancel)

        return NotificationCompat.Builder(this, Constants.NOTIFICATION_CHANNEL_ID)
            .setSmallIcon(R.drawable.ic_notification)
            .setContentTitle(LocalStorage.audioPlaying?.title)
            .setContentText(LocalStorage.audioPlaying?.artist)
            .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
            .setOnlyAlertOnce(true)
            .setSilent(true)
            .setContentIntent(NotificationHelper.createContentIntent(this))
            .setStyle(NotificationCompat.DecoratedCustomViewStyle())
            .setCustomContentView(smallRemoteView)
            .setCustomBigContentView(largeRemoteView).build()
    }

    private fun playAudio(playlistAudio: DPlaylistAudio) {
        if (LocalStorage.audioPlaying?.path != playlistAudio.path) {
            LocalStorage.audioPlaying = playlistAudio
            AudioPlayer.instance.setPlayerProgress(0)
            AudioPlayer.instance.play()
        } else {
            if (!AudioPlayer.instance.isPlaying()) {
                AudioPlayer.instance.play()
            }
        }

        if (!LocalStorage.audioPlaylist.any { it.path == playlistAudio.path }) {
            LocalStorage.addPlaylistAudio(playlistAudio)
        }
    }

    companion object {
        const val BROADCAST_ID_AUDIO = 201
        const val NOTIFICATION_PREVIOUS = "notification.PREVIOUS"
        const val NOTIFICATION_PLAY = "notification.PLAY"
        const val NOTIFICATION_NEXT = "notification.NEXT"
        const val NOTIFICATION_CANCEL = "notification.CANCEL"

        private fun doAction(context: Context, action: AudioServiceAction, block: Intent.() -> Unit) {
            context.startService(Intent(context, AudioPlayerService::class.java).apply {
                this.action = action.name
                block()
            })
        }

        fun play(context: Context, playlistAudio: DPlaylistAudio? = null) {
            doAction(context, AudioServiceAction.PLAY) {
                val audio: Parcelable? = playlistAudio ?: LocalStorage.audioPlaying
                putExtra("audio", audio)
            }
        }

        fun pause(context: Context) {
            doAction(context, AudioServiceAction.PAUSE) {}
        }

        fun skipNext(context: Context) {
            doAction(context, AudioServiceAction.SKIP_NEXT) {}
        }

        fun skipPrevious(context: Context) {
            doAction(context, AudioServiceAction.SKIP_PREVIOUS) {}
        }

        fun seek(context: Context, process: Int) {
            doAction(context, AudioServiceAction.SEEK) {
                putExtra("progress", process)
            }
        }
    }
}