const num= 29998;
if (num > 0) {
    console.log("Seu número é positivo");
}
else if(num < 0) {
    console.log("Seu número é impar");
}
else {
    console.log("Seu número é zero");
}
switch(num % 2) {
    case 0:
        console.log("e é par");
        break;
    default: 
    console.log("e é impar")
}