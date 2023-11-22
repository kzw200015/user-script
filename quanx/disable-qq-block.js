const url = new URL($request.url)
let target = ""
if (url.pathname === "/middlem.html") {
    target = url.searchParams.get("pfurl")
} else if (url.pathname === "/ios.html") {
    target = url.searchParams.get("url")
}
$done({
    status: "HTTP/1.1 302 Found",
    headers: { "Location": target }
})