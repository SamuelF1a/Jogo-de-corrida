function setup() {
  createCanvas(400, 400);
}
let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;
let xJogador4 = 0;
function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
    xJogador3 += random(1);
      xJogador4 += random(1);
  function ativaJogo() {
    if (focused == true) {
      background("darkblue");
    } else {
      background("pink");
    }
  }
  function desenhaJogadores() {
    textSize(40);
    text("🌞", xJogador1, 250);
    text("🌜", xJogador2, 150);
    text("🌎", xJogador3, 50);
     text("☄️", xJogador4, 350);
  }
  function desenhaLinhaDeChegada() {
    rect(350, 0, 10, 400);
  }
  function verificaVencedor() {
    if (xJogador1 > 350) {
      fill("yellow");
      text("Jogador 1 venceu!", 10, 200);
      noLoop();
    }
    if (xJogador2 > 350) {
      fill("rgb(243,166,243)");
      text("Jogador 2 venceu!", 10, 200);
      noLoop();
          }
    if (xJogador3 > 350) {
      fill("rgb(128,199,243)");
      text("Jogador 3 venceu!", 10, 200);
      noLoop();
          }
    if (xJogador4 > 350) {
      fill("rgb(243,166,243)");
      text("Jogador 4 venceu!", 10, 200);
      noLoop();
    }
  }
}

function keyReleased() {
  if (key === "s") {
    xJogador1 += random(20);
  }
  if (key == "l") {
    xJogador2 += random(20);
  }

}
