let personagens = [];

for (let i = 0; i < 3; i++) {
    let nome;

    while (true) {
        nome = prompt("coloque o nome do personagem [" + (i + 1) + "]:");

        if (!nome || nome.trim() == "") {
            alert("NOME INVÁLIDO");
        } else {
            break;
        }
    }

    let obra;

    while (true) {
        obra = prompt("coloque o nome da obra (filme/série/jogo) [" + (i + 1) + "]:");

        if (!obra || obra.trim() == "") {
            alert("OBRA INVÁLIDA");
        } else {
            break;
        }
    }

    let tipo;

    while (true) {
        tipo = prompt("coloque o tipo (filme, série ou jogo) [" + (i + 1) + "]:");

        if (!tipo || tipo.trim() == "") {
            alert("TIPO INVÁLIDO");
        } else {
            break;
        }
    }

    personagens[i] = {
        nomePersonagem: nome,
        obraPersonagem: obra,
        tipoPersonagem: tipo
    };
}

let mensagem = "=== PERSONAGENS ===\n\n";

for (let i = 0; i < personagens.length; i++) {
    mensagem += "Personagem: " + personagens[i].nomePersonagem + "\n";
    mensagem += "Obra: " + personagens[i].obraPersonagem + "\n";
    mensagem += "Tipo: " + personagens[i].tipoPersonagem + "\n";
    mensagem += "-------------------\n";
}

alert(mensagem);

