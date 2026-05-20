let personagens = {};

for (let i = 0; i < 3; i++) {
    let nome;

    while (true) {
        nome = prompt("coloque o nome do personagem [" + (i + 1) + "]:");
            if (nome.trim() == "") {
            alert("nome inválido!");
        } else {
            break;
        }
    }
}