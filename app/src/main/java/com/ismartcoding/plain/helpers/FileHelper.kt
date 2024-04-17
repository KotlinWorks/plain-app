package com.ismartcoding.plain.helpers

import android.Manifest
import android.content.Context
import android.net.Uri
import android.os.Environment
import android.util.Base64
import com.ismartcoding.lib.extensions.getFileName
import com.ismartcoding.lib.extensions.getFilenameFromPath
import com.ismartcoding.lib.extensions.hasPermission
import com.ismartcoding.lib.extensions.newFile
import com.ismartcoding.lib.extensions.scanFileByConnection
import com.ismartcoding.lib.helpers.CryptoHelper
import com.ismartcoding.lib.isRPlus
import com.ismartcoding.lib.logcat.LogCat
import com.ismartcoding.plain.MainApp
import com.ismartcoding.plain.TempData
import okhttp3.OkHttpClient
import okhttp3.Request
import java.io.BufferedInputStream
import java.io.BufferedOutputStream
import java.io.File
import java.io.FileOutputStream
import java.io.FileWriter
import java.io.IOException

object FileHelper {
    fun fileFromAsset(
        context: Context,
        name: String,
    ): File {
        return File("${context.cacheDir}/$name").apply {
            writeBytes(context.assets.open(name).readBytes())
        }
    }

    fun writeFile(
        context: Context,
        filename: String,
        content: String,
    ) {
        FileWriter(File(context.filesDir, filename)).use {
            it.write(content)
        }
    }

    fun hasStoragePermission(context: Context): Boolean {
        return if (isRPlus()) {
            Environment.isExternalStorageManager()
        } else {
            context.hasPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE)
        }
    }

    fun getFileId(path: String): String {
        if (path.isEmpty()) {
            return ""
        }
        if (path.startsWith("https://", true) || path.startsWith("http://", true)) {
            return path
        }
        return Base64.encodeToString(CryptoHelper.aesEncrypt(TempData.urlToken, path), Base64.NO_WRAP)
    }

    fun rename(
        filePath: String,
        newName: String,
    ): File? {
        return rename(File(filePath), newName)
    }

    fun rename(
        file: File,
        newName: String,
    ): File? {
        if (!file.exists()) return null
        if (newName.isBlank()) return null
        if (newName == file.name) return file
        val newFile = File((file.parent?.plus(File.separator) ?: "") + newName)
        if (!newFile.exists()) {
            file.renameTo(newFile)
            return newFile
        }
        return null
    }

    fun copyFile(
        context: Context,
        pathFrom: Uri,
        pathTo: String,
    ) {
        context.contentResolver.openInputStream(pathFrom).use { input ->
            var bis: BufferedInputStream? = null
            var bos: BufferedOutputStream? = null

            try {
                bis = BufferedInputStream(input)
                bos = BufferedOutputStream(FileOutputStream(pathTo, false))
                val buf = ByteArray(1024)
                bis.read(buf)
                do {
                    bos.write(buf)
                } while (bis.read(buf) != -1)
            } catch (e: IOException) {
                e.printStackTrace()
            } finally {
                try {
                    bis?.close()
                    bos?.close()
                } catch (e: IOException) {
                    e.printStackTrace()
                }
            }
        }
    }

    fun copyFileToDownloads(path: String): String {
        try {
            val fileName = path.getFilenameFromPath()
            val file = createDownloadFile(fileName)
            File(path).copyTo(file)
            MainApp.instance.scanFileByConnection(file, null)
            return file.absolutePath
        } catch (ex: Exception) {
            ex.printStackTrace()
            LogCat.e(ex.toString())
        }
        return ""
    }

    fun copyFileToDownloads(context: Context, uri: Uri): String {
        try {
            val fileName = uri.getFileName(context)
            val file = createDownloadFile(fileName)
            val outputStream = FileOutputStream(file)
            if (uri.scheme == "content") {
                val inputStream = context.contentResolver.openInputStream(uri)
                inputStream?.copyTo(outputStream)
                inputStream?.close()
                outputStream.close()
            } else {
                val client = OkHttpClient()
                val request = Request.Builder()
                    .url(uri.toString())
                    .build()
                val response = client.newCall(request).execute()
                if (response.isSuccessful) {
                    val inputStream = response.body?.byteStream()
                    inputStream?.copyTo(outputStream)
                    inputStream?.close()
                    outputStream.close()
                }
            }
            MainApp.instance.scanFileByConnection(file, null)
            return file.absolutePath
        } catch (ex: Exception) {
            ex.printStackTrace()
            LogCat.e(ex.toString())
        }
        return ""
    }

    private fun createDownloadFile(fileName: String): File {
        val downloadsDirectory = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS)
        val plainAppDirectory = File(downloadsDirectory, "PlainApp")
        if (!plainAppDirectory.exists()) {
            plainAppDirectory.mkdirs()
        }

        var file = File(plainAppDirectory, fileName)
        if (file.exists()) {
            file = file.newFile()
        }

        return file
    }
}
