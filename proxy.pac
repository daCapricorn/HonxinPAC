function FindProxyForURL(url, host) {
    var PROXY = 'PROXY hx.gy:1080';

    if (checkHost(host, 'android.com')) return PROXY;
    if (checkHost(host, 's3.amazonaws.com')) return PROXY;
    if (checkHost(host, 'bitbucket.org')) return PROXY;
    if (checkHost(host, 'bintray.com')) return PROXY;
    if (checkHost(host, 'chromium.org')) return PROXY;
    if (checkHost(host, 'clojars.org')) return PROXY;
    if (checkHost(host, 'registry.cordova.io')) return PROXY;
    if (checkHost(host, 'dartlang.org')) return PROXY;
    if (checkHost(host, 'download.eclipse.org')) return PROXY;
    if (checkHost(host, 'marketplace.eclipse.org')) return PROXY;
    if (checkHost(host, 'github.com')) return PROXY;
    if (checkHost(host, 'githubusercontent.com')) return PROXY;
    if (checkHost(host, 'golang.org')) return PROXY;
    if (checkHost(host, 'googlesource.com')) return PROXY;
    if (checkHost(host, 'storage.googleapis.com')) return PROXY;
    if (checkHost(host, 'code.google.com')) return PROXY;
    if (checkHost(host, 'googlecode.com')) return PROXY;
    if (checkHost(host, 'dl.google.com')) return PROXY;
    if (checkHost(host, 'dl-ssl.google.com')) return PROXY;
    if (checkHost(host, 'getcomposer.org')) return PROXY;
    if (checkHost(host, 'gradle.org')) return PROXY;
    if (checkHost(host, 'elpa.gnu.org')) return PROXY;
    if (checkHost(host, 'gopkg.in')) return PROXY;
    if (checkHost(host, 'ionicframework.com')) return PROXY;
    if (checkHost(host, 'cordova.iriscouch.com')) return PROXY;
    if (checkHost(host, 'plugins.jetbrains.com')) return PROXY;
    if (checkHost(host, 'macports.org')) return PROXY;
    if (checkHost(host, 'maven.org')) return PROXY;
    if (checkHost(host, 'melpa.org')) return PROXY;
    if (checkHost(host, 'packages.meteor.com')) return PROXY;
    if (checkHost(host, 'mendeley.com')) return PROXY;
    if (checkHost(host, 'nbd.name')) return PROXY;
    if (checkHost(host, 'www.nuget.org')) return PROXY;
    if (checkHost(host, 'npmjs.com')) return PROXY;
    if (checkHost(host, 'npmjs.org')) return PROXY;
    if (checkHost(host, 'pypi.python.org')) return PROXY;
    if (checkHost(host, 'packagist.org')) return PROXY;
    if (checkHost(host, 'packagecontrol.io')) return PROXY;
    if (checkHost(host, 'rubygems.org')) return PROXY;
    if (checkHost(host, 'repo.typesafe.com')) return PROXY;
    if (checkHost(host, 'tromey.com')) return PROXY;
    if (checkHost(host, '9fans.net')) return PROXY;

    return 'DIRECT';
}

function checkHost(host, domain) {
    if (shExpMatch(host, "(*." + domain + "|" + domain + ")") ||
    	dnsDomainIs(host, domain) ||
        dnsDomainIs(host, "." + domain))
        return true;

    return false;
}

