// ==UserScript==
// @name         QQ拦截页自动跳转
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://c.pc.qq.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict'
    const url = new URL(location.href)
    let target = ""
    if (url.pathname === "/middlem.html") {
        target = url.searchParams.get("pfurl")
    } else if (url.pathname === "/ios.html") {
        target = url.searchParams.get("url")
    }
    if (target) {
        location.href = target
    }
})()