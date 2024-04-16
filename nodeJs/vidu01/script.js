const express = require("express");
const app = express();
const port = 8000;
// Cú pháp: app.listen(port, [hostname], [backlog], [callback])
// port: Là số cổng mà máy chủ sẽ lắng nghe.Nếu không được chỉ định, Express sẽ sử dụng cổng mặc định là 3000.
// hostname: Là tên máy chủ hoặc địa chỉ IP mà máy chủ sẽ lắng nghe.Mặc định là localhost.
// backlog: Số lượng kết nối được chờ đợi trong hàng đợi.Mặc định là 511.
// callback: Một hàm callback được gọi khi máy chủ bắt đầu lắng nghe yêu cầu.Thông thường không cần thiết.

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
app.listen(port,)