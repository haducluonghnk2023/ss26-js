function findCommonElements(arr1, arr2, arr3) {
    let commonElements = [];
    let i = 0, j = 0, k = 0;
    while (i < arr1.length && j < arr2.length && k < arr3.length) {
        if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
            commonElements.push(arr1[i]);
            i++;
            j++;
            k++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr2[j] < arr3[k]) {
            j++;
        } else {
            k++;
        }
    }
    return commonElements;
}
const arr1 = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12];
const arr2 = [2, 3, 5, 7, 8, 9, 10, 11, 12];
const arr3 = [3, 5, 6, 9, 10, 11, 12];
const result = findCommonElements(arr1, arr2, arr3);
if (result.length > 0) {
    console.log("Các phần tử chung của ba mảng là:", result);
} else {
    console.log("Không có phần tử chung nào trong ba mảng.");
}
