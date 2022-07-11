class Jogo{
 constructor(){



 }

 obterEstado(){
var estadoJogoRef = bancoDeDados.ref('estadoDeJogo');
estadoJogoRef.on('value', function(data){
    estadoJogo = data.val();
})
 }
 atualizarEstado(estado){
bancoDeDados.ref('/').update({
    estadoDeJogo : estado
})
}

async inicio(){
    if(estadoJogo === 0 ){
        
        player = new Player();

        var contagemDeJogadoresRef = await bancoDeDados.ref('contagemJogadores').once('value');
        if(contagemDeJogadoresRef.exists()){
            contagemJogadores = contagemDeJogadoresRef.val();
            player.contagemDeJogadores();
        }
        form = new Formulario();
        form.display();
    
    }
    chao1 = createSprite(windowWidth/2,windowHeight/2, windowWidth,10);
    chao1.shapeColor = "cyan";
    chao2 = createSprite(windowWidth/2,windowHeight-10, windowWidth,10);
    chao2.shapeColor = "cyan";
    jogador1 = createSprite(100,windowHeight/2 -45,10,10);
    jogador1.addImage(peixe);
    jogador1.scale = 0.2;
    jogador2 = createSprite(100,windowHeight -55,10,10);
    jogador2.addImage(peixe2);
    jogador2.scale = 0.2;

    jogadores = [jogador1,jogador2];


}

jogar(){
   
    form.esconder();
    Player.playersInfo();

    var indice = 0;
    var y = 0;

    for(var i in infoplayers){
        indice+=1;
        y = jogadores[indice-1].y;
        infoplayers[i].y = y;
        jogadores[indice-1].y = y;
        if(indice === player.index){
            text(infoplayers[i].nome,100,y-100);
        
            if(keyIsDown(32) && player.index !== null){
             jogadores[indice-1].velocityY = -12;
            
            }

            jogadores[indice-1].velocityY = jogadores[indice-1].velocityY +0.5;
        }
        
        
    }


    jogador1.collide(chao1);
    jogador2.collide(chao2);

    gerarObstaculos();
    background(fundo1);
    drawSprites();



}

fim(){
    
}

}