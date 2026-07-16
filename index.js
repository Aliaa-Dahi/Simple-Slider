var myImgs = document.querySelectorAll(".sub-img img"); // NodeList
var maniImg = document.querySelector(".main-img");

for (var i = 0; i < myImgs.length; i++) {
  myImgs[i].addEventListener("click", function (e) {
    var currentSrc = e.target.getAttribute("src");
    maniImg.setAttribute("src", currentSrc);
  });
}
