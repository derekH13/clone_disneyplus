document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]')


    // altura
    const hero = document.querySelector('.hero')
    const alturaHero = hero.clientHeight;    //para saber a altura do elemento

    window.addEventListener('scroll', function() {
        
        const posicaoAtual = window.scrollY

        if(posicaoAtual < alturaHero) {
            ocultaHeader()

        }else {
            exibeHeader()
        }
        
    })

    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            
            // pegando o valor do data-tab-button
            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas()

            aba.classList.add('shows__list--is-active')
            removeButtonActive()
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }

    for (let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreouFecha)
    }
})

function ocultaHeader( ){
    const header = document.querySelector('header')

    header.classList.add('header--is-hidden')
}


function  exibeHeader(){
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden')
}


// acordion
function abreouFecha(elemento){
    const classe = 'faq__questions__item--is-open'
    const elPai =  elemento.target.parentNode

    elPai.classList.toggle(classe)
}



function removeButtonActive(){
    const buttons= document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}


function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}