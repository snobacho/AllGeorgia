const cardHeadPara = document.querySelector('.tours-heading-txt')
window.addEventListener('scroll', function() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPosition >= 1300) {
        document.querySelector('.tours-head').style.display = 'block';
        cardHeadPara.style.animationName = "appear";
        cardHeadPara.style.animationPlayState = "running";  
    }
});   // * card header appears when the card section is visible and an animation is starting
  

const menu = document.querySelector('.menu');
const spans = menu.children;
menu.addEventListener('click', function() {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
    spans[1].style.backgroundColor = 'white';
  } else {
    menu.classList.add('open');
    spans[1].style.backgroundColor = 'black';
  }
}); // * burger menu