let Nome = document.getElementById('nick')
let Dificuldade = document.getElementById('dificuldade')
let Ola = document.getElementById('Ola')
let Numero = document.getElementById('numero')
let Tentativas = document.getElementById('tentativas')
let Tentativas2 = document.getElementById('tentativas2')
let Recarregar = document.getElementById('Recarregar')
let Botao1 = document.getElementById('botao1')
let Botao2 = document.getElementById('botao2')
let Botao3 = document.getElementById('botao3')

let Valor = 0;
let Vidas = 3;



const Mensagem = () =>{
    Ola.innerHTML ='Olá <b>'+Nome.value+'</b>, vamos jogar!De acordo com a opção de intervalo que você escolheu, descubra o número.'

}
const Jogar = () =>{
    if (Numero.value == Valor) {
        alert (Tentativas.innerHTML = ('Parabéns, você conseguiu adivinhar!'));
        window.location.reload()
    }
    else if(Numero.value > Valor){
        Tentativas.innerHTML = ('O numero é menor')
    }
    else{
        Tentativas.innerHTML = ('O número é maior')
    }
    console.log(Numero.value);
    console.log(Valor);
    Vidas--
    Tentativas.innerHTML
    Tentativas2.innerHTML = '<br>'+ 'Você ainda tem ' +Vidas+ ' tentativas!'
}
const dificuldade = ()=>{
    if(Dificuldade.value == 'um'){
        Valor = Math.floor(Math.random()*10)
    }
    else if( Dificuldade.value == 'dois'){
        Valor = Math.floor(Math.random()*50)
    }
    else if (Dificuldade.value == 'tres' ){
        Valor = Math.floor(Math.random()*100)
    }

    console.log(Valor);

}
const perder = () =>{

    if (Vidas == 1){
        Resultado.innerHTML = '<button id="botao3" onclick="window.location.reload()"> Recarregar </button>'; 
        
    }
    
}

Botao1.addEventListener('click', dificuldade)
Botao1.addEventListener('click', Mensagem)
Botao2.addEventListener('click', perder)
Botao2.addEventListener('click', () => {

    if (Numero.value.length <= 3) {
        Jogar(Numero.value)
    }
})
