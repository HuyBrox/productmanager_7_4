var fruits = ['apple', 'banana', 'orange'];
//đẩy lên
var jsonFruits = JSON.stringify(fruits);
localStorage.setItem("fruits", jsonFruits);
//lưu xuống
var savedFruits = localStorage.getItem('fruits');
console.log(savedFruits);
 var fruits2 = JSON.parse(savedFruits);
 console.log(fruits2);