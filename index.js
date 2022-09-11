"use strict";
var tl = gsap.timeline();

const ad = document.getElementsByClassName(`navigation-link`);
const ads = document.getElementsByClassName(`project-preview`)[0];
new Array(...ad).map((d) => {
  d.addEventListener("mouseover", () => {
    ads.style.backgroundImage = `url(img-${d.dataset.num}.jpeg)`;
    tl.to(".project-preview", 1, {
      width: "600px",
      ease: Expo.easeInOut,
    });
  });
  d.addEventListener("mouseout", () => {
    tl.to(".project-preview", 1, {
      width: 0,
      ease: Expo.easeInOut,
    });
  });
});

