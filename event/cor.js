window.onscroll = function() {
    ScrollIndicator()
  };
  
  function ScrollIndicator() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("headerBar").style.width = scrolled + "%";
    console.log(Math.round(scrolled * 100) / 100);
  }
//   <!-- bar end -->

// // active navbar
// let nav = document.querySelector(".navigation-wrap");
// window.onscroll = function () {
//     if(document.documentElement.scrollTop  > 20){
//         nav.classList.add("scroll-on");
//     }else{
//         nav.classList.remove("scroll-on");
//     }
// }

// // nav hide 
// let navBar = document.querySelectorAll('.nav-link');
// let navCollapse = document.querySelector('.navbar-collapse.collapse');
// navBar.forEach(function(a){
//     a.addEventListener("click", function(){
//         navCollapse.classList.remove("show");
//     })
// })
// image slider
var slide = document.getElementById("slider");
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');


btn1.onclick = function () {
    slide.style.transform = "translateX(0px)";
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
    btn5.classList.remove('active');
    btn6.classList.remove('active');
};
btn2.onclick = function () {
    slide.style.transform = "translateX(-100%)";
    btn1.classList.remove('active');
    btn2.classList.add('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
    btn5.classList.remove('active');
    btn6.classList.remove('active');
};
btn3.onclick = function () {
    slide.style.transform = "translateX(-200%)";
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.add('active');
    btn4.classList.remove('active');
    btn5.classList.remove('active');
    btn6.classList.remove('active');

};
btn4.onclick = function () {
    slide.style.transform = "translateX(-300%)";
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.add('active');
    btn5.classList.remove('active');
    btn6.classList.remove('active');
};
btn5.onclick = function () {
    slide.style.transform = "translateX(-400%)";
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
    btn5.classList.add('active');
    btn6.classList.remove('active');
};
btn6.onclick = function () {
    slide.style.transform = "translateX(-500%)";
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
    btn5.classList.remove('active');
    btn6.classList.add('active');
};