class Formulario{
    constructor(){

        this.input = createInput("Nome");
        this.button = createButton("JOGAR");
        
        this.titulo = createElement("h2");
        this.saudacao = createElement("h2");

    }

    display(){
        this.titulo.style("font-size", "70px");
        this.titulo.style("font-color", "white");
        this.titulo.html("T-Fish Multiplayer");
        this.titulo.position(400,50);
        this.input.style("height", "25px");
        this.input.style("width", "200px");
        this.input.position(550,300);
        this.button.position(600,350);
        this.button.style("height", "25px");
        this.button.style("width", "100px");

        this.button.mousePressed(()=>{

            this.input.hide();
            this.button.hide();
            player.nome = this.input.value();
            contagemJogadores +=1;
            player.index = contagemJogadores;
            player.atualizarContagemJogadores(contagemJogadores); 
            player.atualizarInfo();
            this.saudacao.style("font-size", "60px");
            this.saudacao.html("Olá "+player.nome);
            this.saudacao.position(550,200);


        })

        

    }



    esconder(){
        this.titulo.hide();
        this.saudacao.hide();
    }

}
