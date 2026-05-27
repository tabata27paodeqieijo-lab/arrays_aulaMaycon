let produtos = [];


for (let i = 0; i < 5; i++) {
    let nome;
    let preco;

       while (true) {
        nome = prompt(`Digite o nome do produto [${i + 1}]:`);

        if (!nome || nome.trim() === "") {
            alert("nome inválido!");
        } else {
            break;
        }
    }

    while (true) {
        preco = Number(prompt(`Digite o preço do produto [${i + 1}]:`));

        if (isNaN(preco) || preco <= 0) {
            alert("Preço inválido!");
        } else {
            break;
        }
    }

    produtos.push({
        nomeProduto: nome,
        precoProduto: preco
    });
}


let maisCaro = produtos[0];
let maisBarato = produtos[0];

// Percorre o vetor para comparar os preços
for (let i = 1; i < produtos.length; i++) {

    if (produtos[i].precoProduto > maisCaro.precoProduto) {
        maisCaro = produtos[i];
    }

    if (produtos[i].precoProduto < maisBarato.precoProduto) {
        maisBarato = produtos[i];
    }
}
let mensagem = "=== RESULTADO ===\n\n";

mensagem += "produto mais caro:\n";
mensagem += `${maisCaro.nomeProduto} - R$ ${maisCaro.precoProduto.toFixed(2)}\n\n`;

mensagem += "produto mais barato:\n";
mensagem += `${maisBarato.nomeProduto} - R$ ${maisBarato.precoProduto.toFixed(2)}`;

alert(mensagem);

