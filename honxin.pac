function FindProxyForURL(url, host) {
    var PROXY = 'PROXY hx.gy:1080';

    if (dnsDomainIs(host, '.android.com')) {
        return PROXY;
    }

    return 'DIRECT';
}
