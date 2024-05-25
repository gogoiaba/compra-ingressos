function comprar() {
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let qtd = parseInt(document.getElementById("qtd").value);

    if (tipoIngresso === "pista") {
        let qtdPistaElement = document.getElementById("qtd-pista");
        let qtdPista = parseInt(qtdPistaElement.textContent);
        if (checarDisponiveis(qtdPista, qtd)) {
            qtdPistaElement.textContent = qtdPista - qtd;
        }
    }

    if (tipoIngresso === "inferior") {
        let qtdInferiorElement = document.getElementById("qtd-inferior");
        let qtdInferior = parseInt(qtdInferiorElement.textContent);
        if (checarDisponiveis(qtdInferior, qtd)) {
            qtdInferiorElement.textContent = qtdInferior - qtd;
        }
    }

    if (tipoIngresso === "superior") {
        let qtdSuperiorElement = document.getElementById("qtd-superior");
        let qtdSuperior = parseInt(qtdSuperiorElement.textContent);
        if (checarDisponiveis(qtdSuperior, qtd)) {
            qtdSuperiorElement.textContent = qtdSuperior - qtd;
        }
    }

    if (qtd < 0) {
        alert("Não há mais ingressos disponíveis nessa seção");
        return;
    }
}

function checarDisponiveis(tag, qtd) {
    if (tag - qtd < 0) {
        alert("Não há esta quatidade de ingressos disponíveis nessa seção.");
        return false;
    }
    return true;
}