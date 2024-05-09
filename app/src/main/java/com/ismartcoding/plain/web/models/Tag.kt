package com.ismartcoding.plain.web.models

import com.ismartcoding.plain.db.DTag
import kotlinx.serialization.Serializable

@Serializable
data class Tag(
    var id: ID,
    var name: String,
    var count: Int,
)

fun DTag.toModel(): Tag {
    return Tag(ID(id), name, count)
}
