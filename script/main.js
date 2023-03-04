const imgArr = document.querySelectorAll('#gallery .photos img');
let i = Number(localStorage.getItem('imgArr_i')) || 0;
imgArr[i].classList.add('showed');
// console.log('START imgArr: ' + i); //for debugging

const checkbox = document.querySelector('#stop_play');
checkbox.checked = localStorage.getItem('checked') 
  ? JSON.parse(localStorage.getItem('checked')) 
  : true;
  // console.log('START checkbox.checked: ' + checkbox.checked); //for debugging

let activeButton = localStorage.getItem('activeButton') || 'play';
// console.log('START activeButton: ' + activeButton  +  '\n\n'); //for debugging

if (activeButton === 'stop') {
  checkbox.disabled = true;
}

//x - transition effect timeout, ms
let x = 4000;

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
          localStorage.setItem('imgArr_i', i);
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
  imgArr[i].classList.add('showed');
  localStorage.setItem('imgArr_i', i);
  // console.log(i); //for debugging
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
  imgArr[i].classList.add('showed');
  localStorage.setItem('imgArr_i', i);
  // console.log(i); //for debugging
};

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    activeButton = 'play';
    localStorage.setItem('checked', checkbox.checked);
    localStorage.setItem('activeButton', activeButton);
    // console.log('\n\ncheckbox.checked: ' + checkbox.checked); //for debugging
    // console.log('activeButton: ' + activeButton + '\n\n'); //for debugging
    playLoop();
  } else {
    activeButton = 'stop';
    localStorage.setItem('checked', checkbox.checked);
    localStorage.setItem('activeButton', activeButton);
    checkbox.disabled = true;
    // console.log('\n\ncheckbox.checked: ' + checkbox.checked); //for debugging
    // console.log('activeButton: ' + activeButton + '\n\n'); //for debugging
  }
});
