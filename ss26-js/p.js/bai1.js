function inSoNguyen(numberList) {
    let soNguyenTonTai = false;
    for (let i = 0; i < numberList.length; i++) {
        if (Number.isInteger(numberList[i])) {
            console.log(numberList[i]);
            soNguyenTonTai = true;
        }
    }
    if (!soNguyenTonTai) {
        console.log("Trong mảng không tồn tại số nguyên");
    }
}
let numberList = [
    "abcd",
    "efgh",
    123,
    456,
    789,
    1,
];
inSoNguyen(numberList);