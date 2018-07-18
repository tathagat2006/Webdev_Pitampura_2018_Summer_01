const https = require('https')
const fs = require('fs')

https.get(
  'https://codingblocks.com/assets/images/cb/cblogo.png',
  (res) => {

    res.on('data', (chunk) => {
      fs.writeFile(
        __dirname + '/logo.png',
        chunk,
        {flag: 'a'},
        (err) => console.error(err)
      )
    })
  }
)