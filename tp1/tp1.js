
let referencia;
let colorFondo;
let colorFiguraR;
let colorFiguraG;
let colorFiguraB;

function preload() {
  // Cargar imagen antes de iniciar
  referencia = loadImage("assets/ImagenReferencia.png");
}

function setup() {
  createCanvas(800, 400);
  colorFondo = color(0);
  colorFiguraR = 0;
  colorFiguraG = 0;
  colorFiguraB = 0;
}

function draw() {
  background(255);
  dibujarFondo(13, 40);
  let centroX = 600;
  let centroY = height / 2;

  for (let tam = 400; tam > 0; tam -= 10) {
    let opacidad = map(tam, 0, 400, 255, 0);
    fill(colorFiguraR, colorFiguraG, colorFiguraB, opacidad);
    noStroke();
    ellipse(centroX, centroY, tam, tam / 1.5);
  }
  image(referencia, 0, 0, 400, 400);
}

function dibujarFondo(columnas, filas) {
  for (let fila = 0; fila < filas; fila++) {
    let desplazarX = calcuDespla(fila);
    for (let col = 0; col < columnas; col++) {
      let x = 410 + col * 32 + desplazarX;
      let y = fila * 10;
      fill(colorFondo);
      noStroke();
      ellipse(x, y, 16, 10);
    }
  }
}

function calcuDespla(fila) {
  if (fila % 2 === 0) {
    return 0;
  } else {
    return 16;
  }
}

function mousePressed() {
  if (mouseButton === LEFT) {
    colorFiguraR = random(255);
    colorFiguraG = random(255);
    colorFiguraB = random(255);
  }
  if (mouseButton === RIGHT) {
    colorFondo = color(random(255), random(255), random(255));
  }
}
function keyPressed() {
  if (keyCode === ENTER) {
    colorFondo = color(0);
    colorFiguraR = 0;
    colorFiguraG = 0;
    colorFiguraB = 0;
}
}
