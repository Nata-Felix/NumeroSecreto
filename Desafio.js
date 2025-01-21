// Desafios
// Crie uma lista vazia, com o nome listaGenerica.
listaGenerica = [];

// Crie uma lista de linguagens de programação chamada linguagensDeProgramacao
// com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
linguagensDeProgramacao = ["JavaScript", "C", "C++", "Kotlin", "Python"];

// Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
linguagensDeProgramacao.push("Java", "Ruby", "GoLang");

// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
listaNome = ["João", "Maria", "José"];
console.log(listaNome[0]);
// Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
listaNome2 = ["João", "Maria", "José"];
console.log(listaNome[1]);
// Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
listaNome3 = ["João", "Maria", "José"];
console.log(listaNome[listaNome.length - 1]);
//ou de forma simplificada para novas versões
listaNome4 = ["João", "Maria", "José"];
console.log(listaNome.at(-1));
