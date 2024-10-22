gsap.registerPlugin(ScrollTrigger);
let responsiveGsap = gsap.matchMedia();

let markers = {
  startColor: "white",
  endColor: "white",
  indent: 128,
};
let markersAlt = {
  startColor: "yellow",
  endColor: "yellow",
  indent: 64,
};

// Responsive GSAP aniamtions.
responsiveGsap.add(
  {
    maxSm: "(max-width: 480px)",
    maxMd: "(max-width: 768px)",
    maxXl: "(max-width: 1200px)",
    maxXxl: "(max-width: 1512px)",
    minMd: "(min-width: 769px)",
    noMotion: "(prefers-reduced-motion: reduce)",
  },
  (context) => {
    let { maxSm, maxMd, maxXl, maxXxl, minMd, noMotion } = context.conditions;

    // SCOPED - Slider Tween
    gsap.fromTo(
      ".slider__inner",
      { x: maxSm ? "-8%" : maxXl ? "-4%" : "-2%" },
      {
        x: maxSm ? "-72%" : maxXl ? "-42%" : "-32%",
        ease: "none",
        scrollTrigger: {
          trigger: ".slider",
          start: "top bottom",
          end: "bottom top",
          scrub: noMotion ? 0 : 1,
        },
      }
    );

    // // GLOBAL - Hero Sliding Text (Try gauging position to separate a new row?)
    // const mirageText = (() => {
    //   document.querySelectorAll(".outer-span").forEach((outer) => {
    //     const firstSpan = outer.querySelector(".inner-span:first-of-type");
    //     const secondSpan = outer.querySelector(".inner-span:last-of-type");

    //     gsap.to(firstSpan, {
    //       yPercent: 100,
    //       scrollTrigger: {
    //         trigger: secondSpan,
    //         scrub: 1,
    //         start: maxXxl ? "top 14%" : "top 20%",
    //         end: "top 5%",
    //         // markers: true,
    //       },
    //     });

    //     gsap.to(secondSpan, {
    //       yPercent: 100,
    //       scrollTrigger: {
    //         trigger: secondSpan,
    //         scrub: 1,
    //         start: maxXxl ? "top 14%" : "top 20%",
    //         end: "top 5%",
    //         // markers: true,
    //       },
    //     });
    //   });
    // })();
  }
);

// Separate animation library. Seeing spammed <span> tags injected into markup on resize. This fixes it.
const animationLibrary = (() => {
  // GLOBAL - Easily toggle an 'animate' class on any element with '.gsap-animate' class
  const globalGenerateAnimate = (() => {
    const targetElements = document.querySelectorAll(".gsap-animate");

    targetElements.forEach((targetElem) => {
      gsap.to(targetElem, {
        scrollTrigger: {
          trigger: targetElem,
          start: "top 98%",
          end: "bottom top",
          onEnter: () => targetElem.classList.add("animate"),
          onLeave: () => targetElem.classList.remove("animate"),
          onEnterBack: () => targetElem.classList.add("animate"),
          onLeaveBack: () => targetElem.classList.remove("animate"),
        },
      });
    });
  })();

  // // GLOBAL - Nest each word in a sentence within a <span> tag via 'word-span' utility class.
  // const wordSpan = (() => {
  //   const spanWordsInParagraph = (paragraph) => {
  //     const text = paragraph.textContent || paragraph.innerText;
  //     const words = text.trim().split(/\s+/);

  //     const wrappedWords = words
  //       .map((word) => `<span class="word-span__span">${word}</span>`)
  //       .join(" ");

  //     paragraph.innerHTML = wrappedWords;
  //   };

  //   const applyWordWrappingToAll = (globalClass) => {
  //     const paragraphs = document.querySelectorAll(globalClass);
  //     paragraphs.forEach((paragraph) => spanWordsInParagraph(paragraph));
  //   };

  //   applyWordWrappingToAll(".word-span");
  // })();

  // // GLOBAL - Meant for the hero and pre-footer. Animating each word via 'word-split' utility class. Files: index.html, home.scss, & utility.scss
  // const mirageSplit = (() => {
  //   const splitWordsInParagraph = (paragraph) => {
  //     const text = paragraph.textContent || paragraph.innerText;

  //     // Regex pattern to detect tokens like [%br%] and similar
  //     const tokenRegex = /\[%[^\]]+%\]/g;

  //     // Split words, but keep tokens intact by using a regex split
  //     const words = text.trim().split(/\s+/);

  //     const wrappedWords = words
  //       .map((word) => {
  //         // Skip wrapping if the word is a token
  //         if (tokenRegex.test(word)) {
  //           return word; // Leave the token as is, no wrapping
  //         }

  //         // Wrap non-token words in spans
  //         return `
  //         <span class="outer-span">
  //           <span class="inner-span">${word}</span>
  //           <span class="inner-span">${word}</span>
  //         </span>`;
  //       })
  //       .join(" ");

  //     paragraph.innerHTML = wrappedWords;
  //   };

  //   const applyWordSplittingToAll = (globalClass) => {
  //     const paragraphs = document.querySelectorAll(globalClass);
  //     paragraphs.forEach((paragraph) => splitWordsInParagraph(paragraph));
  //   };

  //   applyWordSplittingToAll(".word-split");
  // })();

  // SCOPED - Hero Sliding Text - Animating per line (smoother) ... Should be able to gauge the distance to apply the line...
  const mirageText = (() => {
    const lines = [
      {
        element: ".hero-h1__line-inner-1",
        trigger: ".hero",
        start: "40% 36%",
        end: "50% 36%",
      },
      {
        element: ".hero-h1__line-inner-2",
        trigger: ".hero",
        start: "44% 36%",
        end: "54% 36%",
      },
      {
        element: ".hero-h1__line-inner-3",
        trigger: ".hero",
        start: "48% 36%",
        end: "58% 36%",
      },
      {
        element: ".hero-h1__line-inner-1b",
        trigger: ".hero",
        start: "30% 36%",
        end: "35% 36%",
      },
      {
        element: ".hero-h1__line-inner-2b",
        trigger: ".hero",
        start: "31% 36%",
        end: "38% 36%",
      },
      {
        element: ".hero-h1__line-inner-3b",
        trigger: ".hero",
        start: "32% 36%",
        end: "41% 36%",
      },
      {
        element: ".hero-h1__line-inner-4b",
        trigger: ".hero",
        start: "33% 36%",
        end: "44% 36%",
      },
      {
        element: ".footer-h2__line-inner-1",
        trigger: ".pre-footer",
        start: "top 45%",
        end: "10% 45%",
      },
      {
        element: ".footer-h2__line-inner-2",
        trigger: ".pre-footer",
        start: "4% 45%",
        end: "16% 45%",
      },
      {
        element: ".footer-h2__line-inner-3",
        trigger: ".pre-footer",
        start: "8% 45%",
        end: "22% 45%",
      },
      {
        element: ".footer-h2__line-inner-1b",
        trigger: ".pre-footer",
        start: "top 30%",
        end: "11% 30%",
      },
      {
        element: ".footer-h2__line-inner-2b",
        trigger: ".pre-footer",
        start: "4% 30%",
        end: "16% 30%",
      },
      {
        element: ".footer-h2__line-inner-3b",
        trigger: ".pre-footer",
        start: "8% 30%",
        end: "21% 30%",
      },
      {
        element: ".footer-h2__line-inner-4b",
        trigger: ".pre-footer",
        start: "12% 30%",
        end: "26% 30%",
      },
    ];

    lines.forEach(({ element, trigger, start, end, markers }) => {
      gsap.to(element, {
        yPercent: 100,
        scrollTrigger: {
          trigger: trigger,
          scrub: 1,
          start: start,
          end: end,
          markers: markers,
        },
      });
    });
  })();

  // Refresh ScrollTrigger instances on page load and resize. Game Changer
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });

  // Greater than 520 so it doesn't loop refresh on mobile(dvh)
  if (window.innerWidth > 520) {
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
    });
  }
})();
