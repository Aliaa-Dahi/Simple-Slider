let imgList = document.querySelectorAll(".item img"); // NodeList\
let lightContainer = document.querySelector(".light-container");
let btnClose = document.getElementById("close");

for (let i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener("click", function () {
    lightContainer.classList.remove("d-none");
  });
}

btnClose.addEventListener("click", function () {
  lightContainer.classList.add("d-none");
});
