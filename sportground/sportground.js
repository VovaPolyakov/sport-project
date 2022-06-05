

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

let button = document.querySelector('.chat__btn')


button.addEventListener('click',function(event){
    
})





