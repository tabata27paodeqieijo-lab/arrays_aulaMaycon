let produtos = [];


for (let i = 0; i < 5; i++) {
    while (true) {
        let valor = Number(prompt("Digite o número [" + (i + 1) + "]:"));

        if (isNaN(valor)) {
            alert("Número inválido!");
        } else {
            numeros[i] = valor;
            break;
        }
    }
}

let mensagem = "=== NÚMEROS DIGITADOS ===\n\n";

let maisCaro = produtos[0];
let maisBarato = produtos[0];

for (let i = 1; i < produtos.length; i++) {

    if (produtos[i].precoProduto > maisCaro.precoProduto) {
        maisCaro = produtos[i];
    }

    if (produtos[i].precoProduto < maisBarato.precoProduto) {
        maisBarato = produtos[i];
    }
}

alert(mensagem);