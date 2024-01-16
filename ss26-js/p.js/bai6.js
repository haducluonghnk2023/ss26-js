let mangSoNguyen = [1,2,3,4,5,6,7,8,9,10,-1,-2,-3,-4,-5,-6,-7,-8,-9];
for (let i = 0; i < mangSoNguyen.length; i++) {
    if (mangSoNguyen[i] < 0) {
        mangSoNguyen.unshift(mangSoNguyen.splice(i, 1)[0]);
    }
}
console.log(mangSoNguyen);
