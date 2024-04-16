const tong = (...args) => {
    let tong = 0 ;
    args.forEach(num =>{
         tong +=num;
    });
    return tong;
};
const hieu = (...args) => {
    let hieu = 0 ;
    args.forEach(num =>{
         hieu -=num;
    });
    return hieu;
};
const tich = (...args) => {
    let tich = 1 ;
    args.forEach(num =>{
         tich *=num;
    });
    return tich;
};
const thuong = (...args) => {
    let thuong = 1 ;
    args.forEach(num =>{
        thuong /=num;
    });
    return thuong;
};
export { tong, hieu, tich, thuong};