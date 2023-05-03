

$("html").easeScroll();
$("html").easeScroll({
  frameRate: 60,
  animationTime: 6000,
  stepSize: 120,
  pulseAlgorithm: !0,
  pulseScale: 8,
  pulseNormalize: 1,
  accelerationDelta: 20,
  accelerationMax: 1,
  keyboardSupport: !0,
  arrowScroll: 10
});
/*
/////// criticaldanger.com ///////
// expand-section
var expandSection_bg = document.querySelector('.expand-section .img-wrap');
var expandSection_txtWrap = document.querySelector('.expand-section .txt-wrap');

window.addEventListener('scroll', function(){
    var scrollY = window.scrollY;
    var scrollValue = window.pageYOffset / expandSection_txtWrap.clientHeight;
    //console.log(scrollValue)
    
    expandSection_bg.style.transform = `translate3d(0, ${scrollValue}%, 0)`;
    
});


/////// cylndr.co.kr ///////
// circle-section
var circleInner = document.querySelector('.circle-section');
var circle = document.querySelector('.circle-section .circle');
window.addEventListener('scroll', function(){
    var posX = window.scrollY * 2 / circleInner.clientHeight + 1;

    if(window.scrollY >= window.pageYOffset + circleInner.getBoundingClientRect().top){
        circle.style.width = window.scrollY / circleInner.clientHeight + "vmax"
        circle.style.height = window.scrollY / circleInner.clientHeight + "vmax"
        //circleInner.style.height = 100 + posX + 'vh';
        //circleInner.style.transform = 'translate(0, ' + window.pageYOffset / circleInner.clientHeight * 2 + '% )'
    }else{
        circle.style.width = 90 + "px";
        circle.style.height = 90 + "px";
    }
});
*/