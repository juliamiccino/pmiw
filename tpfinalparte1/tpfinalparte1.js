let pantallaActual = 0;
let pantallas = [];
let archivos = [
  "Pantalla_0.jpeg", "Pantalla_1.png","Pantalla_2.png","Pantalla_3.png","Pantalla_4.png","Pantalla_5.png", 
  "Pantalla_6.png","Pantalla_7.png","Pantalla_8.png","Pantalla_9.png","Pantalla_10.png","Pantalla_11.png",
  "Pantalla_12.png","Pantalla_13_FinalOriginal.png", "Pantalla_14_FinalBueno.png","Pantalla_15_FinalMalo.jpeg",
  "Pantalla_16.jpeg"               
];

let textos = [
/* portada */"Bienvenido a la historia de Braling y Smith, para avanzar en la historia clickea la pantalla",
  "Braling y Smith caminan de noche. Braling, después de muchos años, ha salido por primera vez. Smith no entiende por qué quiere volver tan temprano. Hablan de sus matrimonios: ambos se sienten atrapados, aunque de maneras distintas.",
  "Smith recuerda cómo la esposa de Braling lo obligó a casarse hace diez años, justo cuando él planeaba irse a Río. Braling admite resignado que cedió por presión familiar, pero que ahora todo va a cambiar: muestra un pasaje para Río.",
  "Smith pregunta cómo hará para ausentarse sin que su esposa lo note. Braling señala la ventana de su casa: aparece un “segundo Braling”. Smith queda impactado al ver un doble de su amigo.",
  "El “doble” baja a saludarlos. Smith lo examina y descubre que en su pecho suena un “tic-tic” mecánico: es una marioneta perfectamente realista. Braling le explica que es de Marionetas S.A., una empresa secreta que fabrica humanoides a medida.",
  "Braling explica cómo usó la marioneta para “quedarse en casa” mientras él sale. La guarda en el sótano y así su esposa no sospecha nada. Esta noche, mientras Braling Dos acompaña a la mujer, él planea por fin realizar su viaje soñado a Río.",
  "DECISIÓN 2: Escuchar el plan completo o alejarse pensativo",
  "En el ómnibus de vuelta a casa, Smith lee los detalles en la tarjeta: moldes del cuerpo, plazos de entrega de dos meses, uso aún ilegal de los robots… pero no le importa. Fantasea con tener su doble para poder escapar de su vida agobiante.",
  "Al llegar a su casa, Smith observa a su esposa dormida. Se debate entre la culpa y el deseo de libertad. Recuerda lo mucho que ella lo ama… pero también el dolor físico de sus “mimos” excesivos. Va al escritorio a buscar su chequera.",
  "DECISIÓN 3: Buscar la chequera o ir directamente a la empresa",
  "Mientras Smith vive su revelación, Braling regresa a casa con su doble. Le anuncia que pronto lo guardará en el cajón. Pero Braling Dos se rebela: no le gusta el sótano, ni estar encerrado. Dice que tiene sentimientos y quiere “andar”.",
  "Braling Dos admite que aprecia mucho a la esposa de Braling… y que está enamorado de ella. También confiesa que desea ir a Río, algo que nunca podrá hacer. Su tono se vuelve amenazante.",
  "DECISIÓN 4: Huir y llamar a la empresa o enfrentar al doble",
  "Final : La esposa de Braling se despierta al sentir un beso. Sorprendida, comenta que él no hacía eso desde hace años. La voz que responde no es la de su marido… es la de Braling Dos.",
  "Final : Braling logra escapar y llamar a Marionetas S.A. para que desactiven a Braling Dos antes de que actúe. Decide no viajar, enfrenta a su esposa, y juntos descubren cómo su relación llegó a ese punto. Empiezan un cambio real",
  "Final : Smith, animado por el ejemplo, va a la empresa… y semanas después, su propio doble lo reemplaza. Nettie, también marioneta, se queda con el nuevo “Smith”, mientras el original es eliminado.",
  "Gracias por jugar. Presiona reiniciar para volver al inicio. Julia Miccino - Matias Arias - Comision 1. Una obra de Ray Bradbury"
];

let decisiones = [
  [{ texto: "Comenzar", destino: 1 }],               
  [], [],                                           
  [{ texto: "Seguir a Braling", destino: 4 },        
   { texto: "Irse a casa", destino: 7 }],
  [], [],                                            
  [{ texto: "Escuchar el plan completo", destino: 7 }, 
   { texto: "Alejarse pensativo", destino: 7 }],
  [], [],                                             
  [{ texto: "Buscar la chequera", destino: 10 },     
   { texto: "Ir directamente a la empresa", destino: 15 }], 
  [], [],                                             
  [{ texto: "Huir y llamar a la empresa", destino: 14 },  
   { texto: "Enfrentarlo", destino: 13 }],             
  [], [],                                            
  [{ texto: "Siguiente", destino: 16 }],            
  [{ texto: "Reiniciar", destino: 0 }]               
];

function preload() {
  click = loadSound("data/click.mp3");
  for (let i = 0; i < archivos.length; i++) {
    pantallas[i] = loadImage("data/" + archivos[i]);
  }
}

function setup() {
  createCanvas(640, 480);
  textFont("Arial");
}

function draw() {
  background(0);
  image(pantallas[pantallaActual], 0, 0, width, height);

  // fondo texto
  fill(0, 150);
  rect(20, height - 120, width - 40, 100, 10);
  fill(255);
  textSize(16);
  textAlign(LEFT, TOP);
  text(textos[pantallaActual], 30, height - 110, width - 60, 90);

  // botones
  let op = decisiones[pantallaActual];
  if (op && op.length > 0) {
    let total = op.length;
    let anchoBoton = 180;
    let espaciado = 40;
    let anchoTotal = total * anchoBoton + (total - 1) * espaciado;
    let startX = (width - anchoTotal) / 2;
    let y = height - 50;

    for (let i = 0; i < total; i++) {
      let x = startX + i * (anchoBoton + espaciado);
      fill(200);
      rect(x, y, anchoBoton, 35, 8);
      fill(0);
      textAlign(CENTER, CENTER);
      text(op[i].texto, x + anchoBoton / 2, y + 17);
    }
  }
}

function mousePressed() {
  let op = decisiones[pantallaActual];
  if (op && op.length > 0) {
    let total = op.length;
    let anchoBoton = 180;
    let espaciado = 40;
    let anchoTotal = total * anchoBoton + (total - 1) * espaciado;
    let startX = (width - anchoTotal) / 2;
    let y = height - 50;

    for (let i = 0; i < total; i++) {
      let x = startX + i * (anchoBoton + espaciado);
      if (
        mouseX > x && mouseX < x + anchoBoton && mouseY > y && mouseY < y + 35
      ) {
        pantallaActual = op[i].destino;
      }
    }
  } else {
    pantallaActual++;
  }
   if (mouseButton === LEFT && click) {
    click.play();
}}

