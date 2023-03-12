window.addEventListener('scroll', function() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPosition >= 1000) {
        document.querySelector('.tours-head').style.display = 'block';
    }
});
  