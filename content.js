//An array of unwanted to visit URLs 
var blockedUrl = [
    'www.facebook.com',
    'web.facebook.com',
    'web.twitter.com',
    'twitter.com',
    'mobile.twitter.com',
    'm.facebook.com',
    'www.linkedin.com',
    'touch.facebook.com',
];
//An array of wanted to visit URLs 
var goodUrl = ['https://www.github.com',
    'https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA',
    'https://www.geeksforgeeks.org/',
    'https://hackernoon.com/',
    'https://github.com/Metnew/uxss-db#intro'
];


var url = window.location.host;

for (let i = 0; i < blockedUrl.length; i++) {
    if (url === blockedUrl[i]) {
        randomNum = Math.floor(Math.random() * goodUrl.length)
        var randomUrl = goodUrl[randomNum];
        location = randomUrl;
    }

}
