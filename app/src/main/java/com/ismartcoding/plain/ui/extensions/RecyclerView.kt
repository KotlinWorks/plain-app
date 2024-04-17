package com.ismartcoding.plain.ui.extensions

import android.provider.CallLog
import android.provider.Telephony
import androidx.recyclerview.widget.RecyclerView
import com.ismartcoding.lib.brv.utils.bindingAdapter
import com.ismartcoding.lib.brv.utils.linear
import com.ismartcoding.lib.brv.utils.models
import com.ismartcoding.lib.brv.utils.setup
import com.ismartcoding.lib.channel.sendEvent
import com.ismartcoding.lib.extensions.onItemClick
import com.ismartcoding.lib.helpers.CoroutinesHelper.withIO
import com.ismartcoding.plain.MainApp
import com.ismartcoding.plain.R
import com.ismartcoding.plain.db.DTag
import com.ismartcoding.plain.features.file.FileSystemHelper
import com.ismartcoding.plain.features.locale.LocaleHelper.getString
import com.ismartcoding.plain.ui.file.FilesType
import com.ismartcoding.plain.ui.file.FilesViewModel
import com.ismartcoding.plain.ui.helpers.DialogHelper
import com.ismartcoding.plain.ui.models.DMediaFolders
import com.ismartcoding.plain.ui.models.DType
import com.ismartcoding.plain.ui.models.DrawerMenuGroup
import com.ismartcoding.plain.ui.models.DrawerMenuGroupType
import com.ismartcoding.plain.ui.models.DrawerMenuItemClickedEvent
import com.ismartcoding.plain.ui.models.FilteredItemsViewModel
import com.ismartcoding.plain.ui.models.IDataModel
import com.ismartcoding.plain.ui.models.MenuItemModel
import com.ismartcoding.plain.ui.tag.TagUIHelper

fun RecyclerView.ensureSelect(callback: (items: List<IDataModel>) -> Unit) {
    val items = bindingAdapter.getCheckedModels<IDataModel>()
    if (items.isEmpty()) {
        DialogHelper.showMessage(R.string.select_first)
        return
    }

    callback(items)
}

fun RecyclerView.initDrawerMenu() {
    linear().setup {
        addType<DrawerMenuGroup>(R.layout.item_title)
        addType<MenuItemModel>(R.layout.item_menu)

        onBind {
            if (itemViewType == R.layout.item_menu) {
                val m = getModel<MenuItemModel>()
                itemView.isSelected = m.isChecked
                fixCheckedPosition(bindingAdapterPosition, m.isChecked)
            }
        }

        R.id.container.onClick {
            setChecked(bindingAdapterPosition, true)
            val m = getModel<MenuItemModel>()
            sendEvent(DrawerMenuItemClickedEvent(m))
        }

        R.id.container.onPopupMenu { holder ->
            val m = holder.getModel<MenuItemModel>()
            if (m.data is DTag) {
                val tag = m.data
                inflate(R.menu.tag)
                menu.findItem(R.id.title).setTitle(context, tag.name)
                onItemClick {
                    TagUIHelper.itemLongClick(itemId, tag)
                }
            }
        }

        onChecked { position, isChecked, _ ->
            val m = getModel<MenuItemModel>(position)
            m.isChecked = isChecked
            notifyItemChanged(position)
        }
    }.toggle()
    bindingAdapter.singleMode = true
}

suspend fun RecyclerView.updateDrawerMenuAsync(
    viewModel: FilteredItemsViewModel,
    vararg types: DrawerMenuGroupType,
) {
    val groups = mutableListOf<Any>()
    types.forEach { type ->
        when (type) {
            DrawerMenuGroupType.CALL_TYPES -> {
                arrayOf(
                    DType(CallLog.Calls.INCOMING_TYPE.toString(), R.string.call_incoming, R.drawable.ic_call_received),
                    DType(CallLog.Calls.OUTGOING_TYPE.toString(), R.string.call_outgoing, R.drawable.ic_call_made),
                    DType(CallLog.Calls.MISSED_TYPE.toString(), R.string.call_missed, R.drawable.ic_call_missed),
                ).forEach { t ->
                    groups.add(
                        MenuItemModel(t).apply {
                            isChecked = (viewModel.data as? DType)?.id == t.id
                            title = getString(t.titleId)
                            iconId = t.iconId
                        },
                    )
                }
            }

            DrawerMenuGroupType.SMS_TYPES -> {
                arrayOf(
                    DType(Telephony.Sms.MESSAGE_TYPE_INBOX.toString(), R.string.inbox, R.drawable.ic_inbox),
                    DType(Telephony.Sms.MESSAGE_TYPE_SENT.toString(), R.string.sent, R.drawable.ic_outbox),
                    DType(Telephony.Sms.MESSAGE_TYPE_DRAFT.toString(), R.string.drafts, R.drawable.ic_drafts),
                ).forEach { t ->
                    groups.add(
                        MenuItemModel(t).apply {
                            isChecked = (viewModel.data as? DType)?.id == t.id
                            title = getString(t.titleId)
                            iconId = t.iconId
                        },
                    )
                }
            }

            DrawerMenuGroupType.ALL -> {
                groups.add(
                    MenuItemModel().apply {
                        isChecked = viewModel.data == null && viewModel.trash.value == false
                        title = getString(R.string.all)
                        iconId = R.drawable.ic_format_list_bulleted
                    },
                )
            }

            DrawerMenuGroupType.FOLDERS -> {
                groups.add(
                    MenuItemModel(DMediaFolders()).apply {
                        isChecked = viewModel.data is DMediaFolders
                        title = getString(R.string.folders)
                        iconId = R.drawable.ic_folder
                    },
                )
            }

            DrawerMenuGroupType.TRASH -> {
                groups.add(
                    MenuItemModel().apply {
                        isChecked = viewModel.trash.value == true
                        title = getString(R.string.trash)
                        iconId = R.drawable.ic_trash
                    },
                )
            }

            DrawerMenuGroupType.TAGS -> {
                groups.add(
                    withIO {
                        TagUIHelper.createMenuGroupAsync(viewModel)
                    },
                )
            }
        }
    }
    models = groups
}

suspend fun RecyclerView.updateDrawerMenuAsync(viewModel: FilesViewModel) {
    val groups = mutableListOf<MenuItemModel>()
    groups.add(
        MenuItemModel("").apply {
            isChecked = viewModel.type == FilesType.RECENTS
            title = getString(R.string.recents)
            iconId = R.drawable.ic_history
        },
    )
    val context = MainApp.instance
    groups.add(
        MenuItemModel(FileSystemHelper.getInternalStoragePath()).apply {
            isChecked = viewModel.type == FilesType.INTERNAL_STORAGE
            title = FileSystemHelper.getInternalStorageName(context)
            iconId = R.drawable.ic_storage
        },
    )
    val sdCardPath = withIO { FileSystemHelper.getSDCardPath(context)  }
    if (sdCardPath.isNotEmpty()) {
        groups.add(
            MenuItemModel(sdCardPath).apply {
                isChecked = viewModel.type == FilesType.SDCARD
                title = getString(R.string.sdcard)
                iconId = R.drawable.ic_sd_card
            },
        )
    }
    val usbPaths = FileSystemHelper.getUsbDiskPaths()
    if (usbPaths.isNotEmpty()) {
        usbPaths.forEachIndexed { index, path ->
            groups.add(
                MenuItemModel(path).apply {
                    isChecked = viewModel.root == path
                    title = getString(R.string.usb_storage) + " ${index + 1}"
                    iconId = R.drawable.ic_usb
                },
            )
        }
    }
    groups.add(
        MenuItemModel(FileSystemHelper.getExternalFilesDirPath(context)).apply {
            isChecked = viewModel.type == FilesType.APP
            title = getString(R.string.file_transfer_assistant)
            iconId = R.drawable.ic_app_icon
        },
    )
    models = groups
}
