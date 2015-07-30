function FindProxyForURL(url, host) {
	var PROXY = 'PROXY hx.gy:1080';

	if (host == 'android.com') return PROXY;
    if (shExpMatch(host,'s3.amazonaws.com')) return PROXY;
    if (shExpMatch(host,'bitbucket.org')) return PROXY;
    if (shExpMatch(host,'bintray.com')) return PROXY;
    if (shExpMatch(host,'chromium.org')) return PROXY;
    if (shExpMatch(host,'clojars.org')) return PROXY;
    if (shExpMatch(host,'registry.cordova.io')) return PROXY;
    if (shExpMatch(host,'dartlang.org')) return PROXY;
    if (shExpMatch(host,'download.eclipse.org')) return PROXY;
    if (shExpMatch(host,'github.com')) return PROXY;
    if (shExpMatch(host,'githubusercontent.com')) return PROXY;
    if (shExpMatch(host,'golang.org')) return PROXY;
    if (shExpMatch(host,'googlesource.com')) return PROXY;
    if (shExpMatch(host,'storage.googleapis.com')) return PROXY;
    if (shExpMatch(host,'code.google.com')) return PROXY;
    if (shExpMatch(host,'googlecode.com')) return PROXY;
    if (shExpMatch(host,'dl.google.com')) return PROXY;
    if (shExpMatch(host,'dl-ssl.google.com')) return PROXY;
    if (shExpMatch(host,'getcomposer.org')) return PROXY;
    if (shExpMatch(host,'gradle.org')) return PROXY;
    if (shExpMatch(host,'elpa.gnu.org')) return PROXY;
    if (shExpMatch(host,'gopkg.in')) return PROXY;
    if (shExpMatch(host,'ionicframework.com')) return PROXY;
    if (shExpMatch(host,'cordova.iriscouch.com')) return PROXY;
    if (shExpMatch(host,'plugins.jetbrains.com')) return PROXY;
    if (shExpMatch(host,'macports.org')) return PROXY;
    if (shExpMatch(host,'maven.org')) return PROXY;
    if (shExpMatch(host,'melpa.org')) return PROXY;
    if (shExpMatch(host,'packages.meteor.com')) return PROXY;
    if (shExpMatch(host,'mendeley.com')) return PROXY;
    if (shExpMatch(host,'nbd.name')) return PROXY;
    if (shExpMatch(host,'www.nuget.org')) return PROXY;
    if (shExpMatch(host,'npmjs.com')) return PROXY;
    if (shExpMatch(host,'npmjs.org')) return PROXY;
    if (shExpMatch(host,'pypi.python.org')) return PROXY;
    if (shExpMatch(host,'packagist.org')) return PROXY;
    if (shExpMatch(host,'packagecontrol.io')) return PROXY;
    if (shExpMatch(host,'rubygems.org')) return PROXY;
    if (shExpMatch(host,'repo.typesafe.com')) return PROXY;
    if (shExpMatch(host,'tromey.com')) return PROXY;
    if (shExpMatch(host,'9fans.net')) return PROXY;

	return 'DIRECT';
}
