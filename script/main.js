const arr = document.querySelectorAll("#gallery .photos img");
let i = 0;

document.querySelector(".next").onclick = function () {
  arr[i].setAttribute("style", "display: none");
  i++;
  if (i >= arr.length) {
    i = 0;
  }
  arr[i].style.display = "inline-block";
};

document.querySelector("#gallery .buttons .prev").onclick = function () {
  arr[i].setAttribute("style", "display: none");
  i--;
  if (i < 0) {
    i = arr.length - 1;
  }
  arr[i].style.display = "inline-block";
};