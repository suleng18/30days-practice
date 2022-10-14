const listCounter = document.querySelectorAll('.counter');

function count(el) {
  const numberEl = el.querySelector('.number');
  var to = parseInt(numberEl.innerText);
  let count = 0;
  let time = 300;
  let step = to / time;

  let counting = setInterval(() => {
    count = count + step;
    if (count >= to) {
      clearInterval(counting);
      numberEl.innerText = to;
    } else {
      numberEl.innerText = Math.ceil(count);
    }
  }, 1);
}

listCounter.forEach((item) => {
  count(item);
});
