window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector("header").style.padding = "18px";
    document.querySelector("header").style.paddingBottom = "10px";
    document.querySelector("header").style.boxShadow =
      "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px";
  } else {
    document.querySelector("header").style.padding = "24px";
    document.querySelector("header").style.boxShadow = "none";
  }
}
