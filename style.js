window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  const navBar = document.getElementById("navbar");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navBar.style.transform = "translateY(0px)";
  } else {
    navBar.style.transform = "translateY(-50px)";
  }
}
