function FindProxyForURL(url, host) {
    var PROXY = 'PROXY hx.gy:1080';

    if (dnsDomainIs(host, '.android.com')) return PROXY;
    if (shExpMatch(url, "http://golang.org/*")) return PROXY;

    return 'DIRECT';
}