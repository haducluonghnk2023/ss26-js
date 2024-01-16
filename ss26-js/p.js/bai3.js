function soLanXuatHien(mang, soXuatHien) {
    let dem = 0;
    for (let i = 0; i < mang.length; i++) {
        if (mang[i] === soXuatHien) {
            dem++;
        }
    }
    if (dem > 0) {
        console.log(`${soXuatHien} đã xuất hiện ${dem} lần trong mảng.`);
    } else {
        console.log(`${soXuatHien} không xuất hiện trong mảng.`);
    }
    return dem > 0;
}
let mangCoSan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 3, 5, 7, 11, 14, 15];
let soXuatHien = parseInt(prompt("Nhập 1 số bất kỳ:"));
soLanXuatHien(mangCoSan, soXuatHien);
