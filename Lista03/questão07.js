const nota = 5.9;
let estado =""
if (nota <= 4.9) {
estado = "F";
}
else if (nota >= 5 && nota <= 6.9) {
    estado = "R";
}
else if (nota > 10 || nota < 0) {
    estado = "Error"
}
else {
    estado = "A";
}
switch (estado) {
    case "F":
        console.log("Reprovado");
        break;
    case "R":
        console.log("Recuperação");
        break;
    case "A":
        console.log("Aprovado");
        break;
    default:
        console.log("Nota inválida.");
}
