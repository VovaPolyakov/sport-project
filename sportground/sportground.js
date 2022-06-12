

let prev = document.querySelector('.prev');
let next = document.querySelector('.next')


let slideIndex = 1;
showSlides(slideIndex);
prev.addEventListener('click',function(event){
    plusSlides(-1)
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
})
next.addEventListener('click',function(event){
    plusSlides(+1)
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
})
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}



let login = document.querySelector('.header__sign');
let popup = document.querySelector('.popup')
login.addEventListener('click',function(event){
    if(popupe.classList.contains('open-popupe')){
        popupe.classList.remove('open-popupe')
    }
    if(ppopup.classList.contains('open-ppopup')){
        ppopup.classList.remove('open-ppopup')
    }
    popup.classList.add('open-popup')
})


let choose = document.querySelector('.choose__btn');
let ppopup = document.querySelector('.ppopup')

choose.addEventListener('click',function(event){
    if(popup.classList.contains('open-popup')){
        popup.classList.remove('open-popup')
    }
    if(popupe.classList.contains('open-popupe')){
        popupe.classList.remove('open-popupe')
    }
    ppopup.classList.add('open-ppopup');
})



let register = document.querySelector('.header__login');
let popupe = document.querySelector('.popupe');
register.addEventListener('click',function(event){
    if(popup.classList.contains('open-popup')){
        popup.classList.remove('open-popup')
    }
    if(ppopup.classList.contains('open-ppopup')){
        ppopup.classList.remove('open-ppopup')
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
window.addEventListener('click',function(event){
    if(event.target == ppopup){
        ppopup.classList.remove('open-ppopup')
    }
})


let popupeClose = document.querySelector('.popupe-close');
let popupClose = document.querySelector('.popup-close');
let ppopupClose = document.querySelector('.ppopup-close')


popupeClose.addEventListener('click',function(event){
    popupe.classList.remove('open-popupe')
})

popupClose.addEventListener('click',function(event){
    popup.classList.remove('open-popup')
})

ppopupClose.addEventListener('click',function(event){
    ppopup.classList.remove('open-ppopup')
})



let items =document.querySelectorAll('.rating__item')

let ratingItemsArray = Array.prototype.slice.call(items)


ratingItemsArray.forEach(item => {
    item.addEventListener('click',() => {
        item.parentNode.dataset.totalValue =item.dataset.itemValue
    })

});


let chatClose = document.querySelector('.chat-close');

let button = document.querySelector('.chat__btn')

let chat = document.querySelector('.chat')

button.addEventListener('click',function(event){
    console.log(chat.classList)
    if(chat.classList.contains('active')){
        chat.classList.remove('active')
    }
    chat.classList.add('active')
})

chatClose.addEventListener('click',function(event){
    chat.classList.remove('active')
})
