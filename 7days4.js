var number = 7;
var kick = " ";
var chances = 3;
while (chances !== 0 && number != kick) {
    var kick = prompt (`digite um numero de 0 a 9, você tem ${chances} chances`);
    var chances = chances -1;
}
if (number == kick){
    alert ("ACERTOU!!!");
}
if (number != kick) {
    alert (`Quem sabe na próxima, o numero era ${number}`);
}
