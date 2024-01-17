function findSmallestMissingPositive(arr) {
    arr.sort((a, b) => a - b); 
    let smallestMissingPositive = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            continue;
        }
        if (arr[i] === smallestMissingPositive) {
            smallestMissingPositive++;
        } else {
            break;
        }
    }
    return smallestMissingPositive;
}
const userInput = prompt("Nhập mảng số nguyên, cách nhau bằng dấu phẩy :");
const userArray = userInput.split(",").map(Number);
const result = findSmallestMissingPositive(userArray);
console.log("Phần tử lớn hơn 0 nhỏ nhất chưa xuất hiện trong mảng là:", result);
