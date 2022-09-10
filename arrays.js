
//.map = recebe callback, percorre o array e retorna NOVO array MODIFICADO
// let numeros = [2, 4, 6, 8];
// let dobroNumeros = numeros.map (function(num){
//     return num*2;
// });
// console.log(dobroNumeros)



//.find = recebe callback (que precisa retornar true ou false) e busca elemento dentro do array
let frutas = ["uva", "maçã", "cereja", "morango", "abacaxi"];
let moraNoMar = frutas.find(function(fruta){
    return fruta == "morango";
});
console.log(moraNoMar)



//.filter = recebe callback, filtra os elementos do array de acordo com a condição
let idades = [22, 8, 17, 14, 30, 18];
let maiores = idades.filter(function(idade){
    return idade >= 18;
})
// console.log(maiores)



//.reduce = o callback será executado em cada elemento do array. Recebe 2 parâmetros (acumulador, elemento corrente)
let numeros = [5, 7, 16];
let soma = numeros.reduce(function(acumulador, proximo){
    return acumulador + proximo;
});
console.log(soma)
