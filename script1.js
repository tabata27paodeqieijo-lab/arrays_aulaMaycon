let produtos = [];
let soma = 0;


for (let i = 0; i < 5; i++) {
    let nome;


    while (true) {
        nome = prompt("coloque o nome do produto [" + (i + 1) + "]:");


        if (!nome || nome.trim() == "") {
            alert("NOME INVÁLIDO");
        } else {
            break;
        }
    }


    let preco;


    while (true) {
        preco = Number(prompt("coloque o preço do produto [" + (i + 1) + "]:"));


        if (isNaN(preco) || preco <= 0) {
            alert("PREÇO INVÁLIDO");
        } else {
            break;
        }
    }


    produtos[i] = {
        nomeProduto: nome,
        precoProduto: preco
    };


    soma += preco;
}


let mensagem = "=== PRODUTOS ===\n\n";


for (let i = 0; i < produtos.length; i++) {
    mensagem += "Produto: " + produtos[i].nomeProduto + "\n";
    mensagem += "Preço: R$ " + produtos[i].precoProduto.toFixed(2) + "\n";
    mensagem += "-------------------\n";
}


mensagem += "\nTOTAL: R$ " + soma.toFixed(2);


alert(mensagem);
