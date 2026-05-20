let produtos = [];

for (let i = 0; i < 5; i++) {
    let nome = prompt("digite o nome do produto:");

    let preco = Number(prompt("digite o preço do produto:"));

    produtos[i] = {
        nomeProduto: nome,
        precoProduto: preco
    };
}

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

// SAÍDA
let mensagem = "MAIS CARO: " + maisCaro.nomeProduto + " - R$ " + maisCaro.precoProduto + "\n";
mensagem += "MAIS BARATO: " + maisBarato.nomeProduto + " - R$ " + maisBarato.precoProduto;

alert(mensagem);
console.log(mensagem);

