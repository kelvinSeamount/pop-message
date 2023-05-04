/*===================DOM-SELECTION======================*/
const boxElement = document.querySelector(".box");
const iconBtn = document.querySelector(".icon");

/*===================Add.Eventlistner======================*/
document.addEventListener("mouseleave", function () {
  boxElement.style.display = "block";
});

iconBtn.addEventListener("click", function () {
  boxElement.style.display = "none";
});
