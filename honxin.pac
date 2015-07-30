function FindProxyForURL(url, host) {
    var PROXY = 'PROXY hx.gy:1080';

    if (host == 'android.com') return PROXY;

    return 'DIRECT';
}
