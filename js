
const elementoNome = document.getElementById('nome'); 
const elementoSituacao = document.querySelector('#Situação'); 
const elementoImg = document.querySelector('#imagem') 
let elementoBtn = document.querySelector('#alterar') 

elementoBtn.addEventListener('click', () =>{

    if(elementoBtn.value == 'primeiro'){
        elementoImg.src = 'moicano.jpeg' 
        elementoNome.innerText = 'Neymar' 
        elementoSituacao.innerText = 'Situação: moicano' 
        elementoBtn.value = 'segundo'
    } else if(elementoBtn.value == 'segundo') { 
        elementoImg.src = 'Ney.jpg'
        elementoNome.innerText = 'Neymar' 
        elementoSituacao.innerText = 'Situação: Neymar top' 
        elementoBtn.value = 'terceiro'
    } else { 
        elementoImg.src = "neymar.jpg"
        elementoNome.innerText = 'Neymar' 
        elementoSituacao.innerText = 'Situação: neymar simples' 
        elementoBtn.value = 'primeiro' 
    }
})
