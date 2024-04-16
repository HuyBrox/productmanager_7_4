const dataJSON = `{
     "name": "Lê Văn A",
     "age": 20,
     "email": "levana@gmail.com",
     "address": {
     "street": "Số 123, đường ABC",
     "city": "Hà Nội",
     "country": "Việt Nam"
        }
     }`;
     //hàm dùng chung
    var toJs = (x) =>{
        return JSON.parse(x);
    }
    var x = toJs(dataJSON);
    const output = () =>{
        console.log(x.name);
        console.log(x.email);
        console.log(x.address.city);
    };
    output();
    //==================Bài 2========================
    const dataJSON2 = `
    [
        {
        "name": "Lê Văn A",
        "age": 30,
        "skills": ["JavaScript", "HTML", "CSS"]
        },
        {
        "name": "Nguyễn Thị B",
        "age": 25,
        "skills": ["Python", "Java", "C++"]
        },
        {
        "name": "Đỗ Văn C",
        "age": 35,
        "skills": ["Ruby", "PHP", "SQL"]
        }
    ]
     `;
     var x2 = toJs(dataJSON2);

     var removeAgeSkill = x2.map(item => {
        return item.name;
     });
    console.log(x2);
    console.log(removeAgeSkill);
     //=========================bài 3(bài khó)==============================
     console.log("bài 3")
     const ordersJSON = `
     [
         {
         "id": 1,
         "items": [
            {
            "productId": 1,
            "quantity": 2
            },
            {
            "productId": 2,
            "quantity": 1
            }
         ]
         },
            {
        "id": 2,
        "items": [
            {
            "productId": 3,
            "quantity": 3
            }
        ]
         }
     ]
     `;
     const productsJSON = `
     [
        {
            "id": 1,
            "name": "iPhone 12",
            "price": 1200
         },
         {
            "id": 2,
            "name": "Samsung Galaxy S21",
            "price": 1000
         },
         {
            "id": 3,
            "name": "Google Pixel 5",
            "price": 900
         }
     ]
     `;

     var order = toJs(ordersJSON);
     var product = toJs(productsJSON);
     var calculateOrderTotal = (id) => {
        var temp;
        order.forEach(item => {
            if(item.id == id){
                temp = item;
                return;
            }
        });
        try {
            var priceSum = 0;
            temp.items.forEach(i => {
                product.forEach(productItem =>{
                    if(i.productId == productItem.id){
                        priceSum += productItem.price * i.quantity;
                    }
                    });
            });
            console.log(priceSum);
        } catch (error) {
            console.log("Không tìm tháy đơn hàng!");
        }

     };
        calculateOrderTotal(1);
        calculateOrderTotal(2);
        calculateOrderTotal(3);
        //==================Bài 4========================
        console.log("bài 4")
        let productsJSON2 = `
         [
            {
                "id": 1,
                "name": "iPhone 12",
                "price": 1200
                },
                {
                "id": 2,
                "name": "Samsung Galaxy S21",
                "price": 1000
                },
                {
                "id": 3,
                "name": "Google Pixel 5",
                "price": 900
            }
         ]
         `;
    var productList = toJs(productsJSON2);

    var deleteProduct = (id) => {
        productList = productList.filter(item => id!= item.id);
    };

    deleteProduct(2);
    console.log(productList);