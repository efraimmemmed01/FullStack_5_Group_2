const ul = document.querySelector(".list");
const seeMore = document.querySelector(".see-more");
const seeLess = document.querySelector(".see-less");
const whyContainer = document.querySelector(".why-container");

function toggleList() {
  const isExpanded = ul.classList.toggle("expanded");
  if (isExpanded) {
    whyContainer.style.height = "810px";

    seeLess.style.display = "block";
    seeMore.style.opacity = "0%";
    seeLess.disabled = true;
    setTimeout(() => {
      seeLess.style.opacity = "100%";
      seeMore.style.display = "none";
      seeLess.disabled = false;
    }, 500);
  } else {
    whyContainer.style.height = "500px";

    seeMore.style.display = "block";
    seeLess.style.opacity = "0%";
    seeLess.disabled = true;
    setTimeout(() => {
      seeMore.style.opacity = "100%";
      seeLess.style.display = "none";
    }, 500);
  }
}

seeMore.addEventListener("click", toggleList);
seeLess.addEventListener("click", toggleList);
