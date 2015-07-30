function FindProxyForURL(url, host) {
    var PROXY = 'PROXY hx.gy:1080';

    if (shExpMatch(host, '*.android.com*')) return PROXY;
    if (shExpMatch(host, "*golang.org*")) return PROXY;

    return 'DIRECT';
}