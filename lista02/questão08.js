let quantidadeMultiplos = 0;
let somaMultiplos = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 3 !== 0) {
        continue;
    }

    console.log(i);
    quantidadeMultiplos++;
    somaMultiplos += i;
}

console.log(`Quantidade de múltiplos: ${quantidadeMultiplos}`);
console.log(`Soma de todos eles: ${somaMultiplos}`);