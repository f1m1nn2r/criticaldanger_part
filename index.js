
// 스크롤 라이브러리
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


// 섹션01
var section01 = document.querySelector('.section01');
var cursor = document.querySelector('.sc01_cursor');
window.addEventListener('mousemove', function(e){
    var posX = e.clientX * 1.2 / section01.clientWidth;
    var posY = e.clientY * 1.2 / section01.clientHeight;
    cursor.style.transform = `translate3d(${posX}vw, ${posY}vh, 0) translateY(-50%)`
});

// 섹션04
var section04 = document.querySelector('.section04');
var section04_intro_txt = document.querySelectorAll('.section04-inner .txt-box h1');
var tigerBg = document.querySelector('.tiger-bg');
window.addEventListener('scroll', function(){
    var RLScroll_value = window.scrollY / document.querySelector('.section04-inner').offsetHeight * 2;
    for(var i=0; i<section04_intro_txt.length; i++){
        if(window.scrollY >= section04.offsetTop / 2){
            if(i % 2 == 0){
                section04_intro_txt[i].style.transform = `translate3d(${-RLScroll_value}vw, 0, 0)`
            }else if(i % 2 == 1){
                section04_intro_txt[i].style.transform = `translate3d(${RLScroll_value}vw, 0, 0)`
            }
            tigerBg.style.transform = `translate3d(0, ${RLScroll_value * 2}vw, 0)`
        }else{
            section04_intro_txt[i].style.transform = `translate3d(0, 0, 0)`
            tigerBg.style.transform = `translate3d(0, 0, 0)`
        }
    }

    
});
