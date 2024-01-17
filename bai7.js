let array = [1, 2, 3, 3, 2, 3, 6, 5, 3, 8, 4, 3, 2, 5, 7, 1];
let nhapSoBatKi = parseInt(prompt("Nhập 1 số bất kì"));
let found = false;
for (let i = 0; i < array.length; i++) {
    let sum = array[i];
    let subArray = [array[i]];
    for (let j = i + 1; j < array.length; j++) {
        sum += array[j];
        subArray.push(array[j]);
        if (sum === nhapSoBatKi) {
            found = true;
            console.log("Mảng con thỏa mãn:", [subArray]);
            break;
        } else if (sum > nhapSoBatKi) {
            break;
        }
    }
    if (found) {
        break;
    }
}
if (!found) {
    console.log("Không có mảng con thỏa mãn.");
}