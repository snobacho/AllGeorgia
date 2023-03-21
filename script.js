const logo = document.querySelector('.logo');
const scrollDownAngle = document.querySelector('.down-angle');
const startOpacity = 1;
const endOpacity = 0.1;
const factor = 0.1; 

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const viewportHeight = window.innerHeight;
  const maxScroll = document.body.scrollHeight - viewportHeight;
  const scrollPercent = scrollTop / maxScroll;

  let opacity;
  if (scrollTop > (viewportHeight * 0.5)) {
    scrollDownAngle.style.animation = 'none'; 
    opacity = endOpacity;
  } else {
    opacity = startOpacity - ((scrollPercent ** factor) * (startOpacity - endOpacity));
    if (scrollTop === 0) {
      scrollDownAngle.style.animation = 'arrow-anime 4s linear infinite'; // start the animation
    }
  }
  logo.style.opacity = opacity;
  scrollDownAngle.style.opacity = opacity;
});  
// * As you scroll opacity decreases and increases on the home page


const upScrollAngle = document.querySelector(".up-angle");

window.addEventListener("scroll", () => {
  if (window.scrollY > document.querySelector('.about-section').offsetTop - 20) {
      upScrollAngle.style.display = 'block'
      upScrollAngle.style.position = "fixed";
  } else {
      upScrollAngle.style.position = "static";
  }
}); // * up scroll angle 

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
const nav = document.querySelector('nav');

function burgerMenu() {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
    spans[1].style.backgroundColor = '#CAD1CA';
  } else {
    menu.classList.add('open');
    spans[1].style.backgroundColor = 'black';
  }
}
menu.addEventListener('click', function() {
  burgerMenu()
}); 

function toggleNav() {
  nav.classList.toggle('open-menu');
}
function closeNav() { 
  nav.classList.remove('open-menu');
  burgerMenu()
}
// *  menu  end
