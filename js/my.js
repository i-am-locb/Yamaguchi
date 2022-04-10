//TODO не работает srcset, не пойму почему, если увидите ошибку напишите мне об этом :)
//TODO зарефакторить код, много дублирования

gsap.registerPlugin(TextPlugin);

var tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });

tl.to(".ergonomics__title", {
  text: {
    value: "Эргономика — ключ к успеху современного человека",
  },
  duration: 3,
  delay: 0.5,
  ease: "none",
});
tl.to(".text1", { left: "0", delay: 0.5 });
if (window.screen.width < 1000) {
  tl.to(".ergonomics__table", { left: "0", delay: 0.5 });
  tl.to(".button", { opacity: "1", delay: 0.5 });
  tl.to(".tex2", { left: "0", delay: 0.5 });
} else {
  tl.to(".tex2", { left: "0", delay: 0.5 });
  tl.to(".ergonomics__table", { left: "0", delay: 0.5 });
  tl.to(".button", { opacity: "1", delay: 0.5 });
}

if (window.screen.width < 1000) {
  tl.to(".voiceControl__title", { left: "0", delay: 0.5 });
  tl.to(".voiceControl__text", { left: "0", delay: 0.5 });
  tl.to(".voiceControl__animation", { left: "0", delay: 0.5 });

  tl.to(".voiceControl__hole", { scale: "1.2", delay: 0.5 });
  tl.to(".voiceControl__girlIMG", { bottom: "10px", duration: 3 });
  tl.to(".voiceControl__hole", { scale: "0.7", duration: 3 }, "-=3");
  tl.to(".voiceControl__girl", { overflow: "visible", duration: 0 });
  tl.to(".voiceControl__girlIMG", {
    bottom: "50px",
    duration: 1,
    yoyo: true,
    repeat: -1,
    ease: Power1.easeInOut,
  });
  tl.to(".voiceControl__interface", { left: "0", delay: 0.5 });
  tl.to(".voiceControl__callToAction", { left: "0", delay: 0.5 });
} else {
  tl.to(".voiceControl__title", { left: "0", delay: 0.5 });
  tl.to(".voiceControl__text", { left: "0", delay: 0.5 });
  tl.to(".voiceControl__callToAction", { left: "0", delay: 0.5 });
  tl.to(".voiceControl__animation", { left: "0", delay: 0.5 });
  tl.to(".voiceControl__hole", { scale: "1.2", delay: 0.5 });
  tl.to(".voiceControl__girlIMG", { bottom: "-70px", duration: 3 });
  tl.to(".voiceControl__hole", { scale: "0.7", duration: 3 }, "-=3");
  tl.to(".voiceControl__girl", { overflow: "visible", duration: 0 });
  tl.to(".voiceControl__girlIMG", {
    bottom: "20px",
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: Power1.easeInOut,
  });
  tl.to(".voiceControl__interface", { scale: "1", delay: 1 });
} 

const buttonUP = document.getElementsByClassName("ergonomics__buttonUP")[0];
const buttonDOWN = document.getElementsByClassName("ergonomics__buttonDOWN")[0];

if (window.screen.width < 1000) {
  buttonUP.addEventListener("click", () => {
    gsap.to(".ergonomics__tableUP", { bottom: "-20px", duration: 2 });
  });
  buttonDOWN.addEventListener("click", () => {
    gsap.to(".ergonomics__tableUP", { bottom: "-80px", duration: 2 });
  });
} else if (window.screen.width < 1600 && window.screen.width >= 1000) {
  buttonUP.addEventListener("click", () => {
    gsap.to(".ergonomics__tableUP", { bottom: "-120px", duration: 2 });
  });
  buttonDOWN.addEventListener("click", () => {
    gsap.to(".ergonomics__tableUP", { bottom: "-200px", duration: 2 });
  });
} else {
  buttonUP.addEventListener("click", () => {
    gsap.to(".ergonomics__tableUP", { bottom: "-70px", duration: 2 });
  });
  buttonDOWN.addEventListener("click", () => {
    gsap.to(".ergonomics__tableUP", { bottom: "-170px", duration: 2 });
  });
}
