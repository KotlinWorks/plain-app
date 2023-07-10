package com.ismartcoding.lib.extensions

import android.content.Intent
import android.os.Parcelable
import com.ismartcoding.lib.isTPlus

inline fun <reified T : Parcelable> Intent.parcelable(key: String): T? = when {
    isTPlus() -> getParcelableExtra(key, T::class.java)
    else -> @Suppress("DEPRECATION") getParcelableExtra(key) as? T
}