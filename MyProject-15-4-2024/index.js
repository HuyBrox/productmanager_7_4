const express = require('express');
const route = require('./routes/client/index.route');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
//cấu hình pug:
app.set('views', './views');
app.set('view engine', 'pug');
//route
route(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});