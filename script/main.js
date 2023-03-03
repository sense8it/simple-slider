const imgArr = document.querySelectorAll('#gallery .photos img');
let i = 0;
//x - transition effect timeout, ms
let x = 4000;
let activeButton = 'movement';
document.querySelector('.play').disabled = true;
console.log(i); //for debugging

const movementLoop = function() {
  setTimeout(slider, x);
}

const slider = function() {
  switch (activeButton) {
    case 'movement':
      {
        imgArr[i].classList.remove('showed');
        i++;
        if (i >= imgArr.length) {
          i = 0;
        }
          imgArr[i].classList.add('showed');
          console.log(i); //for debugging
          movementLoop();
      }
      break;
    case 'click':
      {
        activeButton = 'movement';
        movementLoop();
      }
      break;
    case 'stop':
      {
        document.querySelector('.play').disabled = false;
        document.querySelector('.next').disabled = false;
        document.querySelector('.prev').disabled = false;
      }
      break;
  }
};

movementLoop();

document.querySelector("#gallery .buttons .prev").onclick = function () {
  activeButton = 'click';
  imgArr[i].classList.remove('showed');
  i--;
  if (i < 0) {
    i = imgArr.length - 1;
  }
  console.log(i); //for debugging
  imgArr[i].classList.add('showed');
};

document.querySelector('.next').onclick = function () {
  activeButton = 'click';
  imgArr[i].classList.remove('showed');
  i++;
  if (i >= imgArr.length) {
    i = 0;
  }
  console.log(i); //for debugging
  imgArr[i].classList.add('showed');
};

document.querySelector('.stop').onclick = function () {
  activeButton = 'stop';
  document.querySelector('.next').disabled = true;
  document.querySelector('.prev').disabled = true;
  this.disabled = true;
  console.log('stop'); //for debugging
};

document.querySelector('.play').onclick = function () {
  activeButton = 'movement';
  this.disabled = true;
  document.querySelector('.stop').disabled = false;
  console.log('play'); //for debugging
  movementLoop();
};
