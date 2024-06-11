// drama, fantasia, animação

// A vida é bela, LIVRE, drama, guerra
// Ponyo - Uma amizade que veio do mar, LIVRE, animação, aventura

// O castelo animado, 10, fantasia, aventura
//

// Maze ruuner, 12, ficção científica, ação, drama
// Aurora - A rua que queria ser um rio, 12, animação, drama
// A espera de um milagre, 14, drama, policial


let campoIdade;
let campoAnimacao;
let campoDrama;

function setup() {
  createCanvas(800, 400);
  createElement("h1", "Recomendador de filmes")
  createSpan("Sua idade;")
  campoIdade = createInput ("5");
  campoAnimacao = createCheckbox("gosta de Animacao?");
  campoDrama = createCheckbox("gosta de Drama?");
}

function draw() {
    background ("rgb(221, 233, 251)")
    let idade = campoIdade.value();
    let gostaDeAnimacao = campoAnimacao. checked();
    let gostaDeDrama = campoDrama. checked();
  
    let recomendacao = geraRecomendacao(idade, gostaDeAnimacao, gostaDeDrama);
    
    fill(color(0, 0, 0));
    textAlign(CENTER, CENTER)
    textSize (26);
    text(recomendacao, width/2, height/2);
}

function geraRecomendacao(idade, gostaDeAnimacao, gostaDeDrama) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "A espera de um milagre";
    } else {
      if (idade >= 12) {
        if(gostaDeAnimacao || gostaDeDrama) {
          return "Aurora - A rua que queria ser um rio";   
        } else{
         return "Maze runner";
        }
      } else {
        if (gostaDeAnimacao) {
          return "O castelo animado";
        } else {
          return "As aventuras de Pediggaton";
        }
      }
    }
  } else {
    if (gostaDeAnimacao) {
     return "Ponyo - Uma amizade que veio do mar";
    } else {
      return "A vida e bela";
    }
  }
} 

