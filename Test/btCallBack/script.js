var consoleLog = (x) =>{
    console.log(x);
}
var forEachTest = (array, callBack) => {
    array.forEach(element => {
        callBack(element);
    });
}
forEachTest( [1, 2, 3, 4, 5], consoleLog );
//bài tiếp
console.log(null)
function forEachPair(arr, callBack){
    let arrMap = arr.map((item, index) =>{
        if (index < arr.length - 1) {
            return item + arr[index + 1];
        }
    }).filter(pair => pair !== undefined);
    //hàm này rất hay, sẽ ứng dụng => hãy học nó
    forEachTest(arrMap, consoleLog);
}
forEachPair([1, 2, 3, 4, 5],forEachTest)