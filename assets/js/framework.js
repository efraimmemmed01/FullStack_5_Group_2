// Navigation
let navBtn = document.querySelector("#nav-btn");
let hamburger = document.querySelector(".nav-mob");
let navigation = document.querySelector(".mob-nav");
let logo = document.querySelector("#Logo");
let isOpen = false;

const servBtnP = document.querySelector(".services");
const servBtnM = document.querySelector(".services-mob");
const servMenuDesktop = document.querySelector("nav .services + .menu");
const servMenuMobile = document.querySelector(".mob-srv .menu");

navBtn.addEventListener("click", () => {
  if (isOpen) {
    navBtn.disabled = true;
    navBtn.innerHTML = "<i class='fa-solid fa-bars'></i>";
    hamburger.style.height = "75%";
    hamburger.style.borderBottom = "solid var(--Handy-Daddy-Yellow)";
    navigation.style.opacity = "0%";

    logo.style.opacity = "100%";
    navBtn.style.transform = "translateY(0px)";
    navBtn.style.fontSize = "18px";
    isOpen = false;
    setTimeout(() => {
      navigation.style.display = "none";
      navBtn.disabled = false;
    }, 50);
  } else {
    navBtn.disabled = true;
    navigation.style.display = "flex";
    navBtn.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    hamburger.style.height = "100vh";
    hamburger.style.borderBottom = "none";

    logo.style.opacity = "0%";
    navBtn.style.transform = "translateY(15px)";
    navBtn.style.fontSize = "40px";
    isOpen = true;
    setTimeout(() => {
      navigation.style.opacity = "100%";
      navBtn.disabled = false;
    }, 50);
  }
});

// Slide
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");

let index = 0;

slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) {
    dot.classList.add("active");
  }
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showSlide(i) {
  slides[index].classList.remove("active");
  dots[index].classList.remove("active");

  index = i;

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

setInterval(() => {
  let nextIndex = (index + 1) % slides.length;
  showSlide(nextIndex);
}, 4000);

// Services menu.. ugh
let isExpandedDesktop = false;
let isExpandedMobile = false;

if (servBtnP) {
  servBtnP.addEventListener("click", () => {
    if (!isExpandedDesktop) {
      isExpandedDesktop = true;
      servMenuDesktop.style.display = "flex";
      setTimeout(() => {
        servMenuDesktop.style.opacity = "1";
      }, 30);
    } else {
      isExpandedDesktop = false;
      servMenuDesktop.style.opacity = "0";
      setTimeout(() => {
        servMenuDesktop.style.display = "none";
      }, 300);
    }
  });
}

if (servBtnM) {
  servBtnM.addEventListener("click", () => {
    if (!isExpandedMobile) {
      isExpandedMobile = true;
      servMenuMobile.style.display = "flex";
      setTimeout(() => {
        servMenuMobile.style.opacity = "1";
      }, 30);
    } else {
      isExpandedMobile = false;
      servMenuMobile.style.opacity = "0";
      setTimeout(() => {
        servMenuMobile.style.display = "none";
      }, 300);
    }
  });
}
