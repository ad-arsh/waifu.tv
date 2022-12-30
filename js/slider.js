const slides = document.querySelectorAll(".slide");
// console.log(slides);

var count = 0;

var slides_vid = document.querySelectorAll(".slides-vid");
console.log(slides_vid);

slides.forEach((slide, index) => {
  slide.style.left = `${100 * index}%`;
});

const prev = () => {
  if (count == 0) {
    count = 2;
  } else {
    count--;
  }
  slides_vid.forEach((element) => {
    element.pause();
  });
  slider();
};
const next = () => {
  if (count == 2) {
    count = 0;
  } else {
    count++;
  }
  slides_vid.forEach((element) => {
    element.pause();
  });
  slider();
};

const slider = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
  setTimeout(() => {
    slides_vid.forEach((element) => {
      element.play();
    });
  }, 1000);
};
