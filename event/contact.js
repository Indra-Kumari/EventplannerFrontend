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
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
