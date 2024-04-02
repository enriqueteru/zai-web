import { gsap } from "https://cdn.skypack.dev/gsap";
import SplitType from "https://cdn.skypack.dev/split-type@0.3.3";

document.addEventListener("DOMContentLoaded", () => {
  const ourText = new SplitType("[data-app='animate-title']", {
    types: "chars",
  });

  const chars = ourText.chars;
  console.warn(chars);

  gsap.from(chars, {
    y: 20,
    opacity: 0,
    duration: 0.3,
    ease: "power4.out",
    stagger: {
      each: 0.05,
      from: "start",
      ease: "none",
    },
  });

  const logo = document.querySelector('[data-app="logo"]');
  const div = document.querySelector('[data-app="div-dark"]');

  const checkConditionsAndUpdateLogo = () => {
    const logoRect = logo.getBoundingClientRect();
    const divRect = div.getBoundingClientRect();

    const isLogoPastDiv =
      logoRect.top + window.scrollY <
      divRect.top + window.scrollY + divRect.height;
    const isDivDark = div.classList.contains("dark");

    isLogoPastDiv || isDivDark
      ? gsap.to(logo, { duration: 0.5, filter: "invert(1)" })
      : gsap.to(logo, { duration: 0.5, filter: "invert(0)" });
  };

  checkConditionsAndUpdateLogo();
  window.addEventListener("scroll", checkConditionsAndUpdateLogo);
  window.addEventListener("resize", checkConditionsAndUpdateLogo);
});


