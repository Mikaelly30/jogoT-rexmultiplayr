class Player{
    constructor(){
        this.nome = null
        this.index = null
        this.y = null
    
    
    }


     contagemDeJogadores(){
        bancoDeDados.ref('contagemJogadores').on('value', (data)=>{
            contagemJogadores = data.val()
        })
     }

     atualizarContagemJogadores(contagemDeJogadores){
         bancoDeDados.ref('/').update({contagemJogadores : contagemDeJogadores})
     }

     atualizarInfo(){
        var playerIndex = "players/player" + this.index
        bancoDeDados.ref(playerIndex).set({
            name : this.nome,
            y : this.y
        })

     }

     static playersInfo(){
         bancoDeDados.ref("players").on('value',(data)=>{
             infoplayers = data.val();
         })
     }







}