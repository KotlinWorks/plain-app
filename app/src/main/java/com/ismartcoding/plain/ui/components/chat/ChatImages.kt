package com.ismartcoding.plain.ui.components.chat

import android.content.Context
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.ExperimentalLayoutApi
import androidx.compose.foundation.layout.FlowRow
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import com.bumptech.glide.integration.compose.ExperimentalGlideComposeApi
import com.ismartcoding.lib.extensions.getFinalPath
import com.ismartcoding.lib.extensions.pathToUri
import com.ismartcoding.plain.db.DMessageImages
import com.ismartcoding.plain.helpers.FormatHelper
import com.ismartcoding.plain.ui.base.PGlideImage
import com.ismartcoding.plain.ui.models.VChat
import com.ismartcoding.plain.ui.preview.PreviewDialog
import com.ismartcoding.plain.ui.preview.PreviewItem

@OptIn(ExperimentalLayoutApi::class, ExperimentalGlideComposeApi::class)
@Composable
fun ChatImages(
    context: Context,
    navController: NavHostController,
    m: VChat,
    imageWidthDp: Dp,
    imageWidthPx: Int,
) {
    FlowRow(
        modifier =
        Modifier
            .fillMaxWidth()
            .padding(16.dp),
        maxItemsInEachRow = 3,
        horizontalArrangement = Arrangement.spacedBy(4.dp, Alignment.Start),
        verticalArrangement = Arrangement.spacedBy(4.dp, Alignment.Top),
        content = {
            val imageItems = (m.value as DMessageImages).items
            imageItems.forEachIndexed { index, item ->
                val path = item.uri.getFinalPath(context)
                Box(
                    modifier =
                    Modifier.clickable {
                        val items = imageItems.mapIndexed { i, s ->
                            val p = s.uri.getFinalPath(context)
                            PreviewItem(m.id + "|" + i, p.pathToUri(), p)
                        }
                        PreviewDialog().show(
                            items = items,
                            initKey = m.id + "|" + index,
                        )
                    },
                ) {
                    PGlideImage(
                        model = path,
                        modifier = Modifier
                            .size(imageWidthDp)
                            .clip(RoundedCornerShape(6.dp)),
                        contentDescription = path,
                        contentScale = ContentScale.Crop,
                    )
                    Box(
                        modifier =
                        Modifier
                            .align(Alignment.BottomEnd)
                            .clip(RoundedCornerShape(bottomEnd = 6.dp))
                            .background(Color.Black.copy(alpha = 0.4f)),
                    ) {
                        Text(
                            modifier =
                            Modifier
                                .padding(horizontal = 4.dp, vertical = 2.dp),
                            text =
                            if (item.duration > 0) {
                                FormatHelper.formatDuration(
                                    item.duration,
                                )
                            } else {
                                FormatHelper.formatBytes(item.size)
                            },
                            color = Color.White,
                            style = MaterialTheme.typography.labelMedium.copy(fontWeight = FontWeight.Normal),
                        )
                    }
                }
            }
        },
    )
}
