import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reveal = () => {
  const els = document.querySelectorAll("[data-app='reveal']");

  els.forEach((el, index) => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.fromTo(
          el,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.out",
            delay: ScrollTrigger.isInViewport(el) ? 0 : index * 0.2,
          }
        );
      },
    });
  });
};

reveal();
