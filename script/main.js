const arr = document.querySelectorAll('#gallery .photos img');
let i = 0;
// console.log(i);
let activeButton= 'movement';
document.querySelector('.play').disabled = true;

const slider = function () {
  switch (activeButton) {
    case 'movement':
      {
        arr[i].setAttribute('class', ' ');
        i++;

        if (i < arr.length) {
          arr[i].className = 'showed';
          // console.log(i);
          movementLoop();
        } else {
          i = 0;
          arr[i].className = 'showed';
          // console.log(i);
          movementLoop();
        }
      }
      break;
    case 'click':
      {
        activeButton= 'movement';
        movementLoop();
      }
      break;
    case 'stop':
      {
        document.querySelector('.play').disabled = false;
      }
      break;
  }
};

function movementLoop() {
  //timeout ms
  setTimeout(slider, 4000);
}
movementLoop();

document.querySelector("#gallery .buttons .prev").onclick = function () {
  activeButton= 'click';
  arr[i].setAttribute("class", ' ');
  i--;
  if (i < 0) {
    i = arr.length - 1;
  }
  // console.log(i);
  arr[i].className = "showed";
};

document.querySelector('.next').onclick = function () {
  activeButton= 'click';
  arr[i].setAttribute('class', ' ');
  i++;
  if (i >= arr.length) {
    i = 0;
  }
  // console.log(i);
  arr[i].className = 'showed';
};

document.querySelector('.stop').onclick = function () {
  activeButton= 'stop';
  this.disabled = true;
  console.log('stop');
};

document.querySelector('.play').onclick = function () {
  activeButton= 'movement';
  this.disabled = true;
  document.querySelector('.stop').disabled = false;
  console.log('play');
  movementLoop();
};
