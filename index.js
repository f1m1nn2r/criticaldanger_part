
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
    cursor.style.transform = `translate3d(${posX}vw, ${posY}vh, 0) translateY(-50%)`;
});

// 섹션04
var section04 = document.querySelector('.section04');
var section04_intro_txt = document.querySelectorAll('.section04-inner .txt-box h1');
var tigerBg = document.querySelector('.tiger-bg');
window.addEventListener('scroll', function(){
    //var this_scrollY = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var RLScroll_value = (window.scrollY / document.querySelector('.section04-inner').offsetHeight * 2) - 8;
    for(var i=0; i<section04_intro_txt.length; i++){
        if(window.scrollY >= section04.offsetTop / 1.5){
            if(i % 2 == 0){
                section04_intro_txt[i].style.transform = `translate3d(${-RLScroll_value}vw, 0, 0)`;
            }else if(i % 2 == 1){
                section04_intro_txt[i].style.transform = `translate3d(${RLScroll_value}vw, 0, 0)`;
            }
            tigerBg.style.transform = `translate3d(0, ${RLScroll_value * 2}vw, 0)`;
        }else{
            section04_intro_txt[i].style.transform = `translate3d(0, 0, 0)`;
            tigerBg.style.transform = `translate3d(0, 0, 0)`;
        }
    }

    // 섹션05
    var section05 = document.querySelector('.section05');
    var section05_img = document.querySelectorAll('.sc05_imgView-bg .img-box');
    for(var i=0; i<section05_img.length; i++){
        if(window.scrollY >= section05.offsetTop / 2){
            section05_img[i].style.transform = 'translate3d(0, ' + -(window.scrollY / section05_img[i].offsetHeight) + 'vw, 0)'
        }else{
            section05_img[i].style.transform = 'translate3d(0, 0, 0)'
        }
    }

    // 섹션06
    
    var section06 = document.querySelector('.section06');
    var backFixText = document.querySelector('.RL-scroll-section .fix-txt');
    var cardContainer = document.querySelector('.card-container');
    var sc06_scrollValue = window.scrollY * 2  / backFixText.offsetHeight;
    if(window.scrollY >= section06.getBoundingClientRect().top + window.pageYOffset){
        backFixText.style.transform = 'translate3d(' + -(sc06_scrollValue * 2) + 'vw, 0, 0)';
        cardContainer.style.transform = 'translate3d(' + -(sc06_scrollValue * 4) + 'vw, 0, 0)';
    }else{
        backFixText.style.transform = 'translate3d(0, 0, 0)';
        cardContainer.style.transform = 'translate3d(0, 0, 0)';
    }
    

    // 섹션07
    var section07 = document.querySelector('.section07');
    var section07_intro_txt = document.querySelectorAll('.section07 .intro-txt-box h1');
    var sc07_RLScroll_value = (window.scrollY / document.querySelector('.section03').offsetHeight) * 1.5 - 25;
    for(var i=0; i<section07_intro_txt.length; i++){
        if(window.scrollY >= section07.offsetTop){
            if(i % 2 == 0){
                section07_intro_txt[i].style.transform = 'translate3d(' + -(sc07_RLScroll_value) + 'vw, 0, 0)'
            }else if(i % 2 == 1){
                section07_intro_txt[i].style.transform = 'translate3d(' + sc07_RLScroll_value + 'vw, 0, 0)'
            }
        }else{
            section07_intro_txt[i].style.transform = 'translate3d(0vw, 0, 0)'
        }
    }
});
