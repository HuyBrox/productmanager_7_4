// npm init rồi enter đến hết
// npm i express
//require là câu lệnh để import
const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World! 123 <h1>hello</h1>')
    console.log("hello oke?")
    res.send("")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
//để chạy thì gõ node tênfile.js
// sau đó hiện lên file đang chạy ở cổng 3000
//vào http://localhost:3000/
//==========Cài nodemon==========
//npm install nodemon --save-dev
//npx nodemon index.js
//để thuật tiện thì thêm dòng này vào json:     "start": "npx nodemon --inspect index.js",
