// Declarações de Variáveis

// var nome = "Pedro";
// console.log(nome);

// let idade = 17;
// console.log(idade);

// const sobreNome = "Faleiros";
// console.log(sobreNome);

// let aula;
// console.log(aula);

// let valor = null;
// console.log(valor);

// let exemplo0 = false;

// let exemplo1 = {};

// let exemplo2 = [];

// Tipos de Variávies

// let exemplo3 = 10;
// console.log(typeof exemplo3);

// let exemplo4 = "Aula";
// console.log(typeof exemplo4);

// let exemplo5 = true;
// console.log(typeof exemplo5);

// let exemplo6 = ["huguinho", "zezinho", "luizinho"];
// console.log(typeof exemplo6);

// let exemplo7 = null;
// console.log(typeof exemplo7);

// Conversões

// float => inteiro
// let numFloat = 123.456;
// console.log(parseInt(numFloat));

// string => float
// let numString = "547.281";
// console.log(parseFloat(numString));

// float => string
// let numFloat2 = 314.424;
// console.log(numFloat2.toString());
// console.log(String(numFloat2));

// let numInt = 100;
// console.log(numInt.toString());

// Métodos - Parte 1

// length - Verifica o tamanho da String
// let frase = "O mundo da tecnologia";
// console.log(frase.length);

// indexOf - Retorna um trecho de um texto
// let texto = "Programação Sustentável";
// console.log(texto.indexOf("g"));

// slice - Retorna parte de um texto apontando o início e o final
// let info = "Processamento de ponta";
// console.log(info.slice(1, 5));

// Operadores Aritméticos

// const num1 = 10;
// const num2 = 20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);

// Operadores Lógicos

// const num3 = 30;
// const num4 = 40;

// console.log(num3 < num4);
// console.log(num3 < num4 && num4 > 50);
// console.log(num3 < num4 || num4 > 50);
// console.log(num3 == num4 || num4 <= num3);

// Operadores de Comparação

// const num5 = "35";
// const num6 = 35;

// console.log(num5 == num6); // Compara
// console.log(num5 === num6); // Compara e verifica o tipo da variável
// console.log(num5 != num6); // Diferente
// console.log(num5 !== num6); // Diferente e tipo

// Estrutura Condicional

// let valor = 100;

// if (valor == 100) {
//   console.log("É verdadeiro.");
// }

// if e else

// let valor1 = 100;

// if (valor1 == 100) {
//   console.log("Valor correto.");
// } else {
//   console.log("Valor incorreto.");
// }

// if e else - Encadeado ou Aninhado

// let idade = 13;

// if (idade < 14) {
//   console.log("Não pode entrar na balada.");
// } else if (idade >= 14 && idade < 18) {
//   console.log("Pode entrar.");
// } else {
//   console.log("Você não tem idade para isso.");
// }

// Condição Ternária

let valor2 = 300;

let resultado = valor2 == 300 ? "Certo" : "Errado";

console.log(resultado);
