const arr = document.querySelectorAll("#gallery .photos img");
let i = 0;

document.querySelector(".next").onclick = function () {
  arr[i].setAttribute("class", " ");
  i++;
  if (i >= arr.length) {
    i = 0;
  }
  arr[i].className = "showed";
};

document.querySelector("#gallery .buttons .prev").onclick = function () {
  arr[i].setAttribute("class", " ");
  i--;
  if (i < 0) {
    i = arr.length - 1;
  }
  arr[i].className = "showed";
};
