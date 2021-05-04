const btnMenu_open = document.querySelector('.btnMenu_open')
const btnMenu_close = document.querySelector('.btnMenu_close')

const menu = document.querySelector('.menu')
btnMenu_open.addEventListener('click', function(){
    menu.classList.add('menu_open')

})

btnMenu_close.addEventListener('click', function(){
    menu.classList.remove('menu_open')

})

