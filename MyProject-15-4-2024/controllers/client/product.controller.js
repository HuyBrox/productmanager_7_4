//tách controller, index là tên hàm (ở đây là trang chủ (của product) nên đặt index);
module.exports.index = (req, res) => {
    res.render("client/pages/product/index", {
        pagesTitle: "Trang sản phẩm"
    })
}
