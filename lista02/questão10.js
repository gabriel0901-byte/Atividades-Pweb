const escolhasDoUsuario = [1, 1, 2, 9, 2, 0];
const valoresParaSomar = [15, 25]; 

let total = 0;
let opcao;
let i = 0; 
let j = 0; 

do {
    opcao = escolhasDoUsuario[i];
    i++;

    console.log("--- MENU ---");
    console.log("1 - Somar um valor ao total");
    console.log("2 - Mostrar o total");
    console.log("0 - Sair");
    console.log(`> Opção escolhida: ${opcao}`);

    switch (opcao) {
        case 1:
            let valor = valoresParaSomar[j];
            j++;
            total += valor;
            console.log(`Valor ${valor} adicionado ao total.`);
            break;

        case 2:
            console.log(`Total acumulado: ${total}`);
            break;

        case 0:
            console.log("Saindo do programa...");
            break;

        default:
            console.log("Opção inválida!");
            break;
    }

} while (opcao !== 0);