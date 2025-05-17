/*
Instruções:
Crie um HTML básico e inclua o link externo para o arquivo script.js

No JavaScript:
Crie uma variável com um número inteiro e use o operador módulo ( % ) para verificar se ele é par ou ímpar.

Mostre no console.log() uma mensagem assim:
console.log("O número é par?", numPar);

Use:
let
console.log()
*/

let num = 10;

result = num % 2 ===0;

if (result){
    console.log("O número é par "+result);

} else {
        console.log("O número é impar "+result);
    }
    