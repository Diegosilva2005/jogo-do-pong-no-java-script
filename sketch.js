//variaveis da bolimha
let xbolinha = 300;
let ybolinha = 200;
let diametro = 15;
//velocidade da bolinha
let velocidadexbolinha = 6;
let velocidadeybolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let raio = diametro / 2;
// variaveis da raquete
let xraquete = 5;
let yraquete = 150;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostrabolinha();
  //movimentaBolinha();
  vereficaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
}

function mostrabolinha() {
  circle(xbolinha, ybolinha, diametro);
}

function movimentaBolinha() {
  xbolinha += velocidadexbolinha;
  ybolinha += velocidadeybolinha;
}

function vereficaColisaoBorda() {
  if (xbolinha + raio > width || xbolinha - raio < 0) {
    velocidadexbolinha *= -1;
  }
  if (ybolinha + raio > height || ybolinha - raio < 0) {
    velocidadeybolinha *= -1;
  }
}

function mostraRaquete() {
  rect(xraquete, yraquete, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if (keyisDown(UP_Arrow))
    yraquete -= 10;
}

if (keyisDown(DOWN_Arrow)) {
  yraquete += 10;
}
