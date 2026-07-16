// selecting elements
let imgList = document.querySelectorAll(".item img"); // NodeList\
let lightContainer = document.querySelector(".light-container");
let btnClose = document.getElementById("close");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let box = document.querySelector(".box");

// variables
let index = 0;

for (let i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener("click", function (e) {
    index = i;
    let currentSrc = e.target.getAttribute("src");
    lightContainer.classList.remove("d-none");
    box.style.backgroundImage = `url(${currentSrc})`;
  });
}

btnClose.addEventListener("click", function () {
  lightContainer.classList.add("d-none");
});

nextBtn.addEventListener("click", function () {
  if (index == imgList.length - 1) index = -1;
  box.style.backgroundImage = `url(${imgList[++index].src})`;
});

prevBtn.addEventListener("click", function () {
  if (index == 0) index = imgList.length;
  box.style.backgroundImage = `url(${imgList[--index].src})`;
});
