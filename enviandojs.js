var numero1 = 10
var numero2 = 15

var soma = numero1 + numero2;
var subtracao = numero1 - numero2

document.getElementById("variavel1").innerHTML = numero1;
document.getElementById("variavel2").innerHTML = numero2;
document.getElementById("soma").innerHTML = soma;
document.getElementById("subtracao").innerHTML = subtracao;


var numero = 5;

if(numero%2==0){
    resultado_verificacao = "numero é par";
}else{
    resultado_verificacao = "numero é impar";
}

varifica_mes = "Janeiro";


document.getElementById("resultado_verificacao").innerHTML = resultado_verificacao;
document.getElementById("verifica_mes").innerHTML = verifica_mes;



var nome = "Soulcode";
quantidade_caractere = nome.length;
document.getElementById("verifica_mes").innerHTML = quantidade_caractere;