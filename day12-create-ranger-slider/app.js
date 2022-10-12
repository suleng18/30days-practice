const body = document.querySelector('body');
const range = document.querySelector('.range');
const process = document.querySelector('.process');
const value = document.querySelector('.process span');

function updateProcess(percent) {
  process.style.width = `${percent}%`;
  value.innerHTML = `${percent}%`;
}

range.addEventListener('mousemove', function (e) {
  let processWidth = e.pageX - this.offsetLeft;
  let percent = (processWidth / this.offsetWidth) * 100;
  body.style.background = `rgba(0, 0, 0, ${processWidth / this.offsetWidth})`;
  percent = Math.round(percent);
  updateProcess(percent);
});

const slider = document.getElementById('slider');
slider.addEventListener('change', function (e) {
  console.log(this.value);
});

updateProcess(40);
