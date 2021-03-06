let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

//funcao para fim de jogo
let gameOver = () => {
  alert(
    `Pontuação: ${score}!\nVocê perdeu!\nClique em OK para iniciar um novo jogo`
  );
  order = [];
  clickedOrder = [];

  playGame();
};

//Gera uma nova cor
const newCollor = () => {
  order.push(Math.floor(Math.random() * 4));
  clickedOrder = [];
  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};

//Controla o tempo de exibição
const lightColor = (element, number) => {
  number = number * 500 - 250;
  setTimeout(() => {
    element.classList.add("selected");
  }, number);

  setTimeout(() => {
    element.classList.remove("selected");
  }, number + 200);
};

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
    nextLevel();
  }
};

//Confere o click
const click = (color) => {
  clickedOrder.push(color);
  createColorElement(color).classList.add("selected");
  setTimeout(() => {
    createColorElement(color).classList.remove("selected");
    checkOrder();
  }, 250);
};

//Funcao que retorna o objeto html da cor
let createColorElement = (color) => {
  if (color == 0) {
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return yellow;
  } else if (color == 3) {
    return blue;
  }
};

//Funcao para proximo nivel do jogo
let nextLevel = () => {
  score++;
  newCollor();
};

//Captura dos eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//Funcao de inicio do jogo
let playGame = () => {
  alert("Bem vindo ao Gênesis! Iniciando novo jogo!");
  score = 0;

  nextLevel();
};

//Starta o game
playGame();
