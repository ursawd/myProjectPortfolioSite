import { menuHandler } from "./modules/header.js";
menuHandler("#start", "Start at the beginning", "Start");
menuHandler("#features", "Explore MY features", "Features");
menuHandler("#enlightenment", "Find out more about me", "Enlightenment");
menuHandler(
  "#discusion",
  "Let's talk about what the future may bring",
  "Discusion"
);
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".logo").style.visibility = "hidden";
    document.querySelector("h2").style.visibility = "visible";
  } else {
    document.querySelector(".logo").style.visibility = "visible";
    document.querySelector("h2").style.visibility = "hidden";
  }
}
