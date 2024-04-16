const express = require("express");
const mongoose = require('mongoose');
const app = express();
const port = 3100;

mongoose.connect('mongodb://localhost:27017/TestDataBase');
const Product = mongoose.model('Product', { //
    title: String,
    description: String,
    price: Number
});

app.get('/Product', async (req, res) => {
    try {
        const products = await Product.find({}); // Lấy tất cả sản phẩm từ MongoDB
        res.render('product.pug', {
            title: 'Trang product',
            productData: products
        });
        //Sau khi res.render được gửi đi thì không thực hiện bất kì công việc nào tiếp theo
        // res.send("<h1>Trang danh sách sản phẩm</h1>");
        console.log(products);
    } catch (error) {
        console.error(error);
        res.status(500).send("Đã xảy ra lỗi khi lấy danh sách sản phẩm");
    }
});

// Đặt thư mục public
app.use(express.static('public'))

app.set("views", "./views");
app.set("view engine", "pug");

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
