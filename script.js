const title = document.getElementsByTagName('title')[0];
      text = `AllGeorgia_💙_`,
      interval = 500,
      position = 0,
      count = 0,
      animInterval = setInterval(animateTitle, interval);

function animateTitle() {
  let substring = text.substring(position) + ' ' + text.substring(0, position);
  title.innerHTML = substring;
  position = (position + 1) % text.length;
  if (substring[substring.length - 1] === " ") { 
    count++; 
    if (count > 3) { 
      clearInterval(animInterval);
      setTimeout(() => {
        position = 0;
        count = 0;
        animInterval = setInterval(animateTitle, interval); 
      }, 3000); 
    }
  }
} // * Browser txt animation
  // check if the previous character is space " " and stop 3 times letter and start again


const menu = document.querySelector('.menu'),
      spans = menu.children,
      nav = document.querySelector('nav');

function burgerMenu() {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
    spans[1].style.backgroundColor = '#C3C9C3';
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


const bodyWrapper = document.querySelector('.body-wrapper')
const loaderBox = document.querySelector('.loader-box')

var timeoutValue = 5400; 
let animationDuration = '5s'; 
if (localStorage.getItem('animationDuration')) {
  animationDuration = '2s'; 
  animationDuration = localStorage.getItem('animationDuration');
  var timeoutValue = 2900; 
}

setTimeout(() => { 
  loaderBox.style.display = 'none';
  bodyWrapper.style.display = 'block';
}, timeoutValue);

document.querySelector('.loader-txt').style.setProperty('--animation-duration', animationDuration);

localStorage.setItem('animationDuration', '2.5s');     // * set timeout when users have localStorage and or not



const logo = document.querySelector('.logo');
const scrollDownAngle = document.querySelector('.down-angle');
const startOpacity = 1;
const endOpacity = 0.15;
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
      upScrollAngle.style.display = "none"
  }
}); // * up scroll angle 