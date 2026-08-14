let numPares = 0;
let numImpares = 0;

for (let i = 1; i <= 20; i++) {
    let resto = i % 2;

    switch (resto) {
        case 0:
            console.log(`${i} é par`);
            numPares++;
            break;
        case 1:
            console.log(`${i} é ímpar`);
            numImpares++;
            break;
    }
}

console.log(`Total de pares: ${numPares}`);
console.log(`Total de ímpares: ${numImpares}`);