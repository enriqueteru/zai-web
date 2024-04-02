import gsap from "gsap";

document
  .querySelector('[data-app="sidenav-open"]')
  .addEventListener("click", () => {
    const sidenav = document.querySelector('[data-app="sidenav"]');
    if (sidenav) {
      sidenav.classList.add("sidenav--visible");

      gsap.fromTo(
        '[data-app="sidenav-item"]',
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power1.out",
        }
      );
    }
  });

document
  .querySelector('[data-app="sidenav-close"]')
  .addEventListener("click", () => {
    const sidenav = document.querySelector('[data-app="sidenav"]');
    if (sidenav) {
      gsap.to('[data-app="sidenav-item"]', {
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.inOut",
      });
    }
    setTimeout(() => {
      sidenav.classList.remove("sidenav--visible");
    }, 500);
  });
