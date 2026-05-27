let personagem = {};

while (true) {
    personagem.nome = prompt("Digite o nome do personagem:");

    if (!personagem.nome || personagem.nome.trim() === "") {
        alert("Nome inválido!");
    } else {
        break;
    }
}

while (true) {
    personagem.obra = prompt("Digite o nome da obra:");

    if (!personagem.obra || personagem.obra.trim() === "") {
        alert("Obra inválida!");
    } else {
        break;
    }
}

while (true) {
    personagem.tipo = prompt("Digite o tipo (filme, série ou jogo):");

    if (!personagem.tipo || personagem.tipo.trim() === "") {
        alert("Tipo inválido!");
    } else {
        break;
    }
}

let mensagem = "=== PERSONAGEM ===\n\n";

mensagem += "Nome: " + personagem.nome + "\n";
mensagem += "Obra: " + personagem.obra + "\n";
mensagem += "Tipo: " + personagem.tipo + "\n\n";

mensagem += personagem.nome + " é um personagem da " +
personagem.tipo + " \"" + personagem.obra + "\".";

alert(mensagem);