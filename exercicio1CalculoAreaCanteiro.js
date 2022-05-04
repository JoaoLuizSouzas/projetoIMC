let A, C, R, arame;
R = 6;
A = 3.14 * (R**2);
C = (2*3.14) * R;

arame = A / 20;

console.log("A Area do canteiro é igual a " + A.toFixed(2) + "m.");
console.log("O Comprimento do canteiro é igual a " + C.toFixed(2) + "m.");
console.log("Serão necessários " + arame.toFixed() + " rolos de arame para cercar o canteiro.");
