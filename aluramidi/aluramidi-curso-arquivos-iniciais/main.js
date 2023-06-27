function tocaSom(seletorElemento) {
    const elemento = document.querySelector(seletorElemento);  
    
    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor invalido');
    }
}



const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {

        console.log(evento.code);
        
        if(evento.code === 'Enter' || evento.code === 'Space'){
            tecla.classList.add('ativa');
            
        }
    }

    tecla.onkeydown = function() {
        tecla.classList.remove('ativa');
    }
}
