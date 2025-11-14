const casas = document.querySelectorAll('.casa'); // pega todas as casas
const res = document.getElementById('res');
let resultado = document.getElementById('resultado');

let jogador = "x";
let tabuleiro = ["", "", "", "", "", "", "", "", ""];

// passa casa por casa, igual o i no for
casas.forEach((casa, c) => { // o "c" é o número de cada casa 
    casa.addEventListener("click", () => { // toda vez que clicar nessa casa, roda a função

        if (casa.innerText !== "") {
            alert("Clique em uma casa vazia");
            return;
        } else {
            casa.innerText = jogador; // vai escrever x ou o dentro da div
            tabuleiro[c] = jogador; // salva no tabuleiro
            
            mudarJogador(); // troca o jogador
            checarVitória();
        }
    })
});

function mudarJogador() {
    // se jogador é "x" vira "o", se ñ volta pro "x"
    jogador = jogador === "x" ? "o" : "x";
    
}

function checarVitória() {

    /*
        [0,1,2], [3,4,5], [6,7,8], // linhas
        [0,3,6], [1,4,7], [2,5,8], // colunas
        [0,4,8], [2,4,6]           // diagonais

    */

    if (tabuleiro[0] !== "" && tabuleiro[0] === tabuleiro[1] && tabuleiro[1] === tabuleiro[2]) {
        alert('Vitoria')
        resultado.innerHTML = `Vitória`
    }
}

function reset() {
    casas.innerText = "";
    tabuleiro = "";
}