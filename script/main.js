const imgArr = document.querySelectorAll('#gallery .photos img');
let i = 0;
//x - transition effect timeout, ms
let x = 4000;
let activeButton = 'play';
// console.log(i); //for debugging

const playLoop = function() {
  setTimeout(slider, x);
}

const slider = function() {
  switch (activeButton) {
    case 'play':
      {
        imgArr[i].classList.remove('showed');
        i++;
        if (i >= imgArr.length) {
          i = 0;
        }
          imgArr[i].classList.add('showed');
          // console.log(i); //for debugging
          playLoop();
      }
      break;
    case 'click':
      {
        activeButton = 'play';
        playLoop();
      }
      break;
    case 'stop':
      {
        checkbox.disabled = false;
        // console.log('stop'); //for debugging
      }
      break;
  }
};

playLoop();

document.querySelector("#gallery .buttons .prev").onclick = function () {
  if (activeButton !== 'stop') {
    activeButton = 'click';
  }
  imgArr[i].classList.remove('showed');
  i--;
  if (i < 0) {
    i = imgArr.length - 1;
  }
  // console.log(i); //for debugging
  imgArr[i].classList.add('showed');
};

document.querySelector('#gallery .buttons .next').onclick = function () {
  if (activeButton !== 'stop') {
    activeButton = 'click';
  }
  imgArr[i].classList.remove('showed');
  i++;
  if (i >= imgArr.length) {
    i = 0;
  }
  // console.log(i); //for debugging
  imgArr[i].classList.add('showed');
};

const checkbox = document.querySelector('#stop_play');
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    activeButton = 'play';
    // console.log('play'); //for debugging
    playLoop();
  } else {
    activeButton = 'stop';
    checkbox.disabled = true;
  }
});
