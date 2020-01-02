# timer-saver
A chrome extension to redirect you from social media sites to useful resource URLs. 

## Add or Remove URLs 
To block a certian array of URLs please modify the code: 

```
//An array of unwanted to visit URLs 
var blockedUrl = ['www.facebook.com',
    'web.twitter.com',
    'twitter.com',
    'mobile.twitter.com',
    'm.facebook.com',
    'www.linkedin.com',
    'touch.facebook.com',
];
```

To redirect URLs modify the code: 
```
//An array of wanted to visit URLs 
var goodUrl = ['https://www.github.com',
    'https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA',
    'https://www.geeksforgeeks.org/',
    'https://hackernoon.com/',
    'https://github.com/Metnew/uxss-db#intro'
];
```

## Setup 
1. Download the repo as ZIP. 
2. Edit the `content.js` file as above. 
3. Open `chrome://extensions/` 
4. Drag and drop the ZIP file into the `chrome://extensions/` tab. 
