var bancoDeDados;
var estadoJogo = 0
var contagemJogadores = 0;
var jogo;
var chao1, chao2;
var obstaculo1, obstaculo2, obstaculo3, obstaculo4, obstaculo5, obstaculo6;
var grupoObstaculos;
var form;
var player;
var backgroundInicioImg;
var backgroundInicioImg2;
var jogador1, jogador2;
var infoplayers;
var jogadores;
var fundo1;


function preload(){

    obstaculo1 = loadImage("obstaculo5.png");
  obstaculo2 = loadImage("obstaculo6.png");
  obstaculo3 = loadImage("obstaculo7.png");
  obstaculo4 = loadImage("obstaculo8.png");
  obstaculo5 = loadImage("obstaculo9.png");
  obstaculo6 = loadImage("obstaculo10.png");
  peixe = loadImage("sprite_0.png");
  peixe2 = loadImage("jogador2.png");
  backgroundInicioImg = loadImage("backgroundForm.png");
  backgroundInicioImg2 = loadImage("backgroundInicioImg2.png");
  fundo1 = loadImage("fundo4.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bancoDeDados = firebase.database();

  jogo = new Jogo();
  jogo.obterEstado();
  jogo.inicio();



  grupoObstaculos = new Group();


}

function draw() {
  background(backgroundInicioImg2);  
  
  
  
  if(contagemJogadores === 2){
    jogo.atualizarEstado(1);
  }
  
  if(estadoJogo === 1){
    jogo.jogar();
  }

  console.log(estadoJogo);

  

}

function gerarObstaculos(){
  if(frameCount % 60 == 0){
  

    var obstacle1 = createSprite(windowWidth + 50, windowHeight/2 - 45, 10,10);
    obstacle1.velocityX = -5; 
    obstacle1.scale = 0.2;
    obstacle1.lifetime = 450;


    var obstacle2 = createSprite(windowWidth + 50, windowHeight -55, 10,10);
    obstacle2.velocityX = -5;
    obstacle2.scale = 0.2;
    obstacle2.lifetime = 450;

    var rand = Math.round(random(1,6) );
    switch(rand){
      
      case 1 : 
        obstacle2.addImage(obstaculo1);
        obstacle1.addImage(obstaculo1);
      break

      case 2 : 
      obstacle2.addImage(obstaculo2);
      obstacle1.addImage(obstaculo2);
      break

      case 3 : 
      obstacle2.addImage(obstaculo3);
      obstacle1.addImage(obstaculo3);
      break

      case 4 : 
      obstacle2.addImage(obstaculo4);
      obstacle1.addImage(obstaculo4);
      break

      case 5 : 
      obstacle2.addImage(obstaculo5);
      obstacle1.addImage(obstaculo5);
      break

      case 6 : 
      obstacle2.addImage(obstaculo6);
      obstacle1.addImage(obstaculo6);
      break

    }

    grupoObstaculos.add(obstacle1);

    grupoObstaculos.add(obstacle2);


  }
}
