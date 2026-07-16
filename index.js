let imgList = document.querySelectorAll(".item img"); // NodeList\
let lightContainer = document.querySelector(".light-container");
let btnClose = document.getElementById("close");
let box = document.querySelector(".box");

for (let i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener("click", function (e) {
    let currentSrc = e.target.getAttribute("src");
    lightContainer.classList.remove("d-none");
    box.style.backgroundImage = `url(${currentSrc})`;
  });
}

btnClose.addEventListener("click", function () {
  lightContainer.classList.add("d-none");
});
