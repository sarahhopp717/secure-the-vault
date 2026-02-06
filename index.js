let code1 = 7 + 3;
let code2 = (100 - 20) / 2;
let code3 = 100 - 61;

let message = "This vault has been secured. The combination is:";

let codeA = code1 + "-" + code2 + "-" + code3;
let codeB = `${code1}-${code2}-${code3}`;

console.log(message);
console.log(codeA);
console.log(codeB);
