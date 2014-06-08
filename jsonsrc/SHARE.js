// use a local image from inside the www folder:
window.plugins.socialsharing.share(null, null, 'www/image.gif', null); // success/error callback params may be added as 5th and 6th param
// .. or a local image from anywhere else (if permitted):
// local-iOS:
window.plugins.socialsharing.share(null, null, '/Users/username/Library/Application Support/iPhone/6.1/Applications/25A1E7CF-079F-438D-823B-55C6F8CD2DC0/Documents/.nl.x-services.appname/pics/img.jpg');
// local-iOS-alt:
window.plugins.socialsharing.share(null, null, 'file:///Users/username/Library/Application Support/iPhone/6.1/Applications/25A1E7CF-079F-438D-823B-55C6F8CD2DC0/Documents/.nl.x-services.appname/pics/img.jpg');
// local-Android:
window.plugins.socialsharing.share(null, null, 'file:///storage/emulated/0/nl.xservices.testapp/5359/Photos/16832/Thumb.jpg');
// .. or an image from the internet:
window.plugins.socialsharing.share(null, null, 'http://domain.com/image.jpg');

window.plugins.socialsharing.available(function (isAvailable) {
    // the boolean is only false on iOS < 6
    if (isAvailable) {
        // now use any of the share() functions
    }
});