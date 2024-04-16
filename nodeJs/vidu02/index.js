const express = require("express");
const app = express();
const port = 3000;

//trang chủ
app.get("/", (req, res) => {
    res.send("<h1>Trang chủ</h1>");
})
app.get("/blog", (req, res) => {
    res.send("<h1>Trang blog</h1>");
})
app.get("/content", (req, res) => {
    res.send("<h1>Trang content</h1>");
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})