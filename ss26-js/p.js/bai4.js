let a = parseInt(prompt("nhập a(a>0)"));
let b = parseInt(prompt("nhập b(b>0)"));
let soChiaHetChoA = [];
let soChiaHetChoB = [];
for (let i = 1; i < a; i++) {
    if (i % b === 0) {
        soChiaHetChoA.push(i);
        console.log(i);
    }
}
for (let i = 1; i < b; i++) {
    if (i % a === 0) {
        soChiaHetChoB.push(i);
        console.log(i);
    }
}
