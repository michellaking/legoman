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

const range = document.querySelector("#range");
const turnImg = document.querySelector("#turn-img");
range.addEventListener("input", function () {
  console.log(this.value);
  let extraDigit = "0";
  if (this.value > 99) {
    extraDigit = "";
  } else {
    extraDigit = "0";
  }
  turnImg.setAttribute(
    "src",
    "./img/turntable-brown/00" + extraDigit + this.value + ".jpg"
  );
});

const rangepink = document.querySelector("#rangepink");
const turnpinkImg = document.querySelector("#turnpink-img");
rangepink.addEventListener("input", function () {
  console.log(this.value);
  let extraDigit = "0";
  if (this.value > 99) {
    extraDigit = "";
  } else {
    extraDigit = "0";
  }
  turnpinkImg.setAttribute(
    "src",
    "./img/turntable-pink/00" + extraDigit + this.value + ".jpg"
  );
});
