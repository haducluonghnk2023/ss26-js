function timKiemPhanTu(mang, giaTri) {
    const viTri = mang.indexOf(giaTri);

    if (viTri !== -1) {
        console.log(`Phần tử ${giaTri} được tìm thấy tại vị trí ${viTri}`);
    } else {
        console.log(`Phần tử ${giaTri} không tồn tại trong mảng`);
    }
}
let mangSanCo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let giaTriCanTim = parseInt(prompt("nhập vào giá trị cần tìm"));
timKiemPhanTu(mangSanCo, giaTriCanTim);