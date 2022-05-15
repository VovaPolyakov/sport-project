

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

    let slides = document.querySelectorAll('.mySlides');
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.lengt
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}