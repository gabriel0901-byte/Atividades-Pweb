const senhaCorreta = "789";
let tentativa1 = "000";
let tentativa2 = "007";
let tentativa3 = "789";
let contador = 1;
let acessoConcedido = false;

while (contador <= 3 && !acessoConcedido) {
    let tentativaAtual;
    if (contador === 1) {
        tentativaAtual = tentativa1;
    } else if (contador === 2) {
        tentativaAtual = tentativa2;
    } else {
        tentativaAtual = tentativa3;
    }
    console.log(`Digite a senha: ${tentativaAtual}`);

    if (tentativaAtual === senhaCorreta) {
        console.log("Acesso permitido!");
        acessoConcedido = true;
    } else {
        console.log("Senha incorreta!");
        let tentativasRestantes = 3 - contador;

        if (tentativasRestantes > 0) {
            console.log(`Tentativas restantes: ${tentativasRestantes}`);
        }
    }
    contador++;
}
if (!acessoConcedido) {
    console.log("Conta bloqueada!");
}