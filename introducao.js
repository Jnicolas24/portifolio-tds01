//a função console.log() serve para enviar mensagens por meio de
//console, está é útil para debugar o código
// console.log("Sou uma mensagem de console");

//a função alert ela serve para exibir uma mensagem de alerta
// ao usuário
// alert("Sou uma mensagem de alerta");

//a função prompt recebe uma informação do usuário e armazena
// uma variável se necessário
// prompt("Qual o seu nome?");


// //a declaração de variável LET cria uma variável de escopo local
// let nome = "João";

// //a declaração de variável VAR cria uma variável de escopo global
// var idade = 18;

// //a declaração de variavel CONST cria uma variável de escopo local,
// // porém o valor não pode ser alterado
// const cpf = "999.888.777-66";

let nome = prompt ("Qual o seu nome?");

alert("O seu nome é " + nome);

let idade = prompt("Olá, " + nome + ". Qual a sua idade?");

let aniversario = prompt("Você já fez aniversário em 2025?");

if (aniversario == "sim"){
    let nascimento = 2025 - idade;
    alert("Você nasceu em " + nascimento);
} else if(aniversario == "não") {
    let nascimento = 2024 - idade;
    alert("Você nasceu em " + nascimento);
} else {
    alert("Resposta inválida, tente de novo.");
}

