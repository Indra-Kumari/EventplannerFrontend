let loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
});
// on loading

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

// let nav = document.querySelector(".navigation-wrap");
// window.onscroll = function () {
//     if(document.documentElement.scrollTop  > 20){
//         nav.classList.add("scroll-on");
//     }else{
//         nav.classList.remove("scroll-on");
//     }
// }

// let navBar = document.querySelectorAll('.nav-link');
// let navCollapse = document.querySelector('.navbar-collapse.collapse');
// navBar.forEach(function(a){
//     a.addEventListener("click", function(){
//         navCollapse.classList.remove("show");
//     })
// })
 
// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration /  range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 26, 3000);
    counter("count2", 100, 19, 2500);
    counter("count3", 0, 43, 3000);
    counter("count4", 0, 50, 3000);
 });
   
//  ******************************type write**************************
   const typed = new Typed('.multiple', {
    strings: [' CORPORATE EVENT', ' NON-PROFIT EVENT', ' SOCIAL EVENT', ' WEDDING EVENT'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
   });
//  ******************************scroll **************************
// scroll to top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})




