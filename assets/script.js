const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

console.log(slides);

const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const banner_dots = document.querySelector(".dots");
const banner_img = document.querySelector(".banner-img");
const banner_tagLine = document.querySelector("#banner p");

let currentIndex = 0;

arrow_left.addEventListener("click", () => {
  dots[currentIndex].classList.remove("dot_selected");
  currentIndex - 1 < 0 ? (currentIndex = slides.length - 1) : currentIndex--;
  console.log("click left", currentIndex);
  slides_update();
});

arrow_right.addEventListener("click", () => {
  dots[currentIndex].classList.remove("dot_selected");
  currentIndex + 1 > slides.length - 1 ? (currentIndex = 0) : currentIndex++;
  console.log("click right", currentIndex);
  slides_update();
});

slides.forEach(() => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  banner_dots.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function slides_update() {
  dots[currentIndex].classList.add("dot_selected");
  banner_img.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
  banner_tagLine.innerHTML = slides[currentIndex].tagLine;
}

slides_update();
