let numeros = [];
for (let i = 0; i < 5; i++) {
    let numero = prompt("Digite um número:\n");
    numeros[i] = Number(numero);
}
alert("os números escolhidos são:\n");

for (let i = 0; i < 5; i++) {

    alert(numeros[i]);
}