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
