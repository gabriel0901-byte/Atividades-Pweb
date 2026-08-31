let passo = 1; 
let opcao;

do {
    console.log("===== SISTEMA =====");
    console.log("1 - Cadastrar usuário");
    console.log("2 - Listar usuários");
    console.log("3 - Buscar usuário");
    console.log("4 - Excluir usuário");
    console.log("0 - Sair");

    if (passo === 1) {
        opcao = 1;
    } else if (passo === 2) {
        opcao = 2;
    } else if (passo === 3) {
        opcao = 3;
    } else if (passo === 4) {
        opcao = 4;
    } else if (passo === 5) {
        opcao = 0; 
    }

    console.log(`\nOpção escolhida: ${opcao}\n`);

    switch (opcao) {
        case 1:
            console.log("Usuário cadastrado com sucesso!\n");
            break;
        case 2:
            console.log("Lista de usuários:");
            console.log("...\n");
            break;
        case 3:
            console.log("Digite o nome do usuário:");
            console.log("Usuário encontrado!\n");
            break;
        case 4:
            console.log("Usuário excluído com sucesso!\n");
            break;
        case 0:
            console.log("Encerrando o sistema...\n");
            break;
        default:
            console.log("Opção inválida!\n");
            break;
    }

    passo++; 
} while (opcao !== 0);