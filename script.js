function smoothScroll(target, duration) {
  var target = document.querySelector(".footer");
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset || window.scrollY;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function loop(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(loop);
  }
  
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t +b;
    t--;
    return -c / 2 * (t * (t -2) - 1) + b;
  }
  requestAnimationFrame(loop);
}

document.querySelector(".header").addEventListener("click", function(e) {
  e.preventDefault();
  smoothScroll(e.target, 1500);
});


document.querySelector(".footer").addEventListener("click", function(e) {
  e.preventDefault();
  smoothScroll(e.target, 500);
});
/**/
var navbar = document.querySelector('.menu');

navbar.addEventListener('click',function(){
    navbar.classList.toggle('toggle');
    //alert('error');
});
