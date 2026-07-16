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

function slide(move) {
  if (move == 1) {
    if (index == imgList.length - 1) index = -1;
    box.style.backgroundImage = `url(${imgList[++index].src})`;
  } else if (move == -1) {
    if (index == 0) index = imgList.length;
    box.style.backgroundImage = `url(${imgList[--index].src})`;
  }
}

nextBtn.addEventListener("click", function () {
  slide(1);
});

prevBtn.addEventListener("click", function () {
  slide(-1);
});

document.addEventListener("keyup", function (e) {
  if (!lightContainer.classList.contains("d-none"))
    e.key == "ArrowRight" ? slide(1) : slide(-1);
});

document.addEventListener('click', function(e){
    // console.log(e.target);
    if(e.target == lightContainer) 
        lightContainer.classList.add('d-none')
})
