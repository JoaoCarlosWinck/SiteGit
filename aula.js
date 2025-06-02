let numero = 10;
console.log(numero)

const pi = 3.14
console.log(pi)

let numero_a = prompt("Digite um Número") // 9
console.log(typeof(numero_a))
let numero_b = Number(prompt("Digite um Número")) // 1
console.log(typeof(numero_b))
let resultado_soma = numero_a + numero_b; // resultado vai dar 91
console.log("O resultado da soma é de "+ resultado_soma)

let numero_c = Number(prompt("Digite um Número")) // 9
console.log(typeof(numero_a))
let numero_d = Number(prompt("Digite um Número")) // 1
console.log(typeof(numero_b))
let resultado_soma_a = numero_c + numero_d; // resultado vai dar 10
console.log("O resultlado da soma é "+ resultado_soma)
if (resultado_soma === 10) {
    alert("A soma dos dois números é igual a 10")            // = atribuição
}                                                            // == atribuição que ignora tipos
else {                                                       // === atribuição que restringe a tipos iguais
    alert("A soma dos dois números não é igual a 10")        
}

let vetor_numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(vetor_numeros[0]) // vai imprimir o primeiro numero (1)
for(let i=0; i<10; i++){
    console.log(vetor_numeros[i])
}