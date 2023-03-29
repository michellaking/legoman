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

document.querySelectorAll(".opgaven").forEach((box) => {
  const p = box.querySelector("p");
  const arrow = box.querySelector(".arrow");
  const boxheight = p.clientHeight;
  p.style.height = "0px";
  box.addEventListener("mouseenter", () => {
    arrow.style.transform = "rotate(180deg)";
    p.style.height = boxheight + "px";
  });

  box.addEventListener("mouseleave", () => {
    arrow.style.transform = "rotate(0deg)";
    p.style.height = "0px";
  });
});
