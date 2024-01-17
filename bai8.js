function printDuplicateElements(arr) {
    const elementCount = {};
    arr.forEach(element => {
        elementCount[element] = (elementCount[element] || 0) + 1;
    });
    console.log("Các phần tử xuất hiện từ hai lần trở lên trong mảng:");
    for (const element in elementCount) {
        if (elementCount[element] >= 2) {
            console.log(`${element}: ${elementCount[element]} lần`);
        }
    }
}
const n = prompt("nhập phần tử của mảng");
const myArray = [];
for (let i = 0; i < n; i++) {
    const element = parseInt(prompt(`Nhập phần tử thứ ${i + 1}: `));
    myArray.push(element);
}
console.log("Mảng đã nhập", myArray);
printDuplicateElements(myArray);
