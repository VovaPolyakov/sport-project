let login = document.querySelector('.header__sign');
let popup = document.querySelector('.popup')
login.addEventListener('click',function(event){
    if(popupe.classList.contains('open-popupe')){
        popupe.classList.remove('open-popupe')
    }
    popup.classList.add('open-popup')
})


let register = document.querySelector('.header__login');
let popupe = document.querySelector('.popupe')
register.addEventListener('click',function(event){
    if(popup.classList.contains('open-popup')){
        popup.classList.remove('open-popup')
    }
    popupe.classList.add('open-popupe')

})
window.addEventListener('click',function(event){
    if(event.target == popup){
        popup.classList.remove('open-popup')
    }
})

window.addEventListener('click',function(event){
    if(event.target == popupe){
        popupe.classList.remove('open-popupe')
    }
})


let popupeClose = document.querySelector('.popupe-close');
let popupClose = document.querySelector('.popup-close')


popupeClose.addEventListener('click',function(event){
    popupe.classList.remove('open-popupe')
})

popupClose.addEventListener('click',function(event){
    popup.classList.remove('open-popup')
})

let items =document.querySelectorAll('.rating__item')

let ratingItemsArray = Array.prototype.slice.call(items)


ratingItemsArray.forEach(item => {
    item.addEventListener('click',() => {
        item.parentNode.dataset.totalValue =item.dataset.itemValue
    })

});









