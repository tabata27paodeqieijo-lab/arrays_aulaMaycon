let numeros = [];

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

for (let i = 0; i < numeros.length; i++) {
    mensagem += "Posição " + i + ": " + numeros[i] + "\n";
}

alert(mensagem);