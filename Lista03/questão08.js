let valor = 2820; 

if (valor <= 0 || valor % 10 !== 0) {
    console.log("Valor inválido! O valor deve positivo e múltiplo de 10.");
} else {
    console.log(`Valor do saque: ${valor}\n`);

    let valorRestante = valor;

    if (valorRestante >= 100) {
        let qtd100 = (valorRestante / 100) | 0; 
        valorRestante = valorRestante % 100;
        console.log(`${qtd100} nota(s) de R$ 100`);
    }

    if (valorRestante >= 50) {
        let qtd50 = (valorRestante / 50) | 0;
        valorRestante = valorRestante % 50;
        console.log(`${qtd50} nota(s) de R$ 50`);
    }

    if (valorRestante >= 20) {
        let qtd20 = (valorRestante / 20) | 0;
        valorRestante = valorRestante % 20;
        console.log(`${qtd20} nota(s) de R$ 20`);
    }

    if (valorRestante >= 10) {
        let qtd10 = (valorRestante / 10) | 0;
        valorRestante = valorRestante % 10;
        console.log(`${qtd10} nota(s) de R$ 10`);
    }
}