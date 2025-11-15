const casas = document.querySelectorAll('.casa'); // pega todas as casas
let resultado = document.getElementById('resultado');
 
let jogador = "x";
let tabuleiro = ["", "", "", "", "", "", "", "", ""];

let jogoAtivo = true;

// passa casa por casa, igual o i no for
casas.forEach((casa, c) => { // o "c" é o número de cada casa 
    casa.addEventListener("click", () => { // toda vez que clicar nessa casa, roda a função

        if (!jogoAtivo) return; // se o jogo ñ estiver ativo ngm joga

        if (casa.innerText !== "") return; // ñ deixa clicar em uma casa q ja esteja ocupada
        
        casa.innerText = jogador; // vai escrever x ou o dentro da div
        tabuleiro[c] = jogador; // salva no tabuleiro
            
        checarVitória();

        if (jogoAtivo) mudarJogador(); // se o jogo estiver ativo troca o jogador
        
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
   let linhasVitoria = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

    for (let [a, b, c] of linhasVitoria) {
        if (tabuleiro[a] !== "" && tabuleiro[a] === tabuleiro[b] && tabuleiro[b] === tabuleiro[c]) {
            resultado.innerHTML = `Vitória do jogador ${tabuleiro[a]}!`.toUpperCase();
            jogoAtivo = false;
            return;
        }
    } // EMPATE
    if (!tabuleiro.includes("")) {
        resultado.innerHTML = 'Deu velha'.toUpperCase();
        jogoAtivo = false;
    }
}

function reset() {
    casas.forEach(casa => casa.innerText = ""); // limpa tds as casas
    tabuleiro = ["", "", "", "", "", "", "", "", ""]; // zera o tabuleiro
    jogoAtivo = true; // ativa o jogo
    resultado.innerHTML = ""; // limpa oo  resultado
}