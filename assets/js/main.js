const ul = document.querySelector(".list");
const seeMore = document.querySelector(".see-more");
const seeMoreMob = document.querySelector(".see-more-mob");
const seeLess = document.querySelector(".see-less");
const callNow = document.querySelector(".call-now");
const whyContainer = document.querySelector(".why-container");
const whyImage = document.querySelector(".why-image");

function toggleList() {
  const isExpanded = ul.classList.toggle("expanded");
  whyContainer.classList.toggle("expanded", isExpanded);
  if (isExpanded) {
    seeLess.style.display = "block";
    seeMore.style.opacity = "0%";
    callNow.style.display = "flex";
    seeLess.disabled = true;
    setTimeout(() => {
      whyImage.setAttribute("src", "./assets/image/WhyUs/Image2.png");
      callNow.style.opacity = "100%";
      seeLess.style.opacity = "100%";
      seeMore.style.display = "none";
      seeLess.disabled = false;
    }, 500);
  } else {
    seeMore.style.display = "flex";
    seeLess.style.opacity = "0%";
    callNow.style.opacity = "0%";
    callNow.style.display = "none";
    seeLess.disabled = true;
    setTimeout(() => {
      seeMore.style.opacity = "100%";
      seeLess.style.display = "none";
    }, 500);
  }
}

seeMore.addEventListener("click", toggleList);
seeMoreMob.addEventListener("click", toggleList);
seeLess.addEventListener("click", toggleList);
