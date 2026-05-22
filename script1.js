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

let acimaDe15 = [];

for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].precoProduto > 15) {
        acimaDe15.push(produtos[i]);
    }
}

let mensagem = "mais caro: " + maisCaro.nomeProduto + " - R$ " + maisCaro.precoProduto + "\n";
mensagem += "mais barato: " + maisBarato.nomeProduto + " - R$ " + maisBarato.precoProduto + "\n\n";

mensagem += "=== PRODUTOS ACIMA DE R$15 ===\n";

if (acimaDe15.length == 0) {
    mensagem += "nenhum produto acima de R$15.";
} else {
    for (let i = 0; i < acimaDe15.length; i++) {
        mensagem += acimaDe15[i].nomeProduto + " - R$ " + acimaDe15[i].precoProduto + "\n";
    }
}

alert(mensagem);
console.log(mensagem);