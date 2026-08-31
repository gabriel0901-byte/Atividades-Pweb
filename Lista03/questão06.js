const num = 10;
let soma = 0;
let quantia = 0;
for (i = 0; i <= num; i++) {
    if (i % 2 === 0) {
        console.log(i);
        quantia++;
        soma = soma + i;
    }
} console.log(quantia);
console.log(soma)