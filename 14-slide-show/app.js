const imgFeature = document.querySelector('.img-feature');
const listImg = document.querySelectorAll('.list-image img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function updateImgByIndex(index) {
  // remove active class
  document.querySelectorAll('.list-image div').forEach((item) => {
    item.classList.remove('active');
  });

  currentIndex = index;
  imgFeature.src = listImg[index].getAttribute('src');
  listImg[index].parentElement.classList.add('active');
}

listImg.forEach((imgElement, index) => {
  imgElement.addEventListener('click', (e) => {
    imgFeature.style.opacity = '0';
    setTimeout(() => {
      updateImgByIndex(index);
      imgFeature.style.opacity = '1';
    }, 400);
  });
});

prevBtn.addEventListener('click', (e) => {
  if (currentIndex === 0) {
    currentIndex = listImg.length - 1;
  } else {
    currentIndex--;
  }
  imgFeature.style.animation = '';
  setTimeout(() => {
    updateImgByIndex(currentIndex);
    imgFeature.style.animation = 'sildeLeft 1s ease-in-out forwards';
  }, 200);
});

nextBtn.addEventListener('click', (e) => {
  if (currentIndex === listImg.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  imgFeature.style.animation = '';
  setTimeout(() => {
    updateImgByIndex(currentIndex);
    imgFeature.style.animation = 'sildeRight 1s ease-in-out forwards';
  }, 200);
});

updateImgByIndex(0);
