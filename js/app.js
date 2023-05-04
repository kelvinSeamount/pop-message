/*===================DOM-SELECTION======================*/
const boxElement = document.querySelector(".box");
const iconBtn = document.querySelector(".icon");

/*===================Add.Eventlistner======================*/
document.addEventListener("mouseleave", function () {
  boxElement.classList.remove("hidden");
});

iconBtn.addEventListener("click", function () {
  boxElement.classList.add("hidden");
});
