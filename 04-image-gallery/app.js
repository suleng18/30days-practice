const images = document.querySelectorAll('.image img');
console.log(images);
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const close = document.querySelector('.close');
const galleryImg = document.querySelector('.gallery__inner img');
const gallery = document.querySelector('.gallery');

let currentIndex = 0;

function galleryShow() {
  if (currentIndex === 0) {
    prev.classList.add('hide');
  } else {
    prev.classList.remove('hide');
  }

  if (currentIndex === images.length - 1) {
    next.classList.add('hide');
  } else {
    next.classList.remove('hide');
  }

  galleryImg.src = images[currentIndex].src;
  gallery.classList.add('show');
}

images.forEach((item, index) => {
  item.addEventListener('click', function () {
    currentIndex = index;
    galleryShow();
  });
});

close.addEventListener('click', function () {
  gallery.classList.remove('show');
});

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    gallery.classList.remove('show');
  }
});

prev.addEventListener('click', function (e) {
  if (currentIndex > 0) {
    currentIndex--;
    galleryShow();
  }
});
next.addEventListener('click', function (e) {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    galleryShow();
  }
});

// gallery.addEventListener('click', function (e) {
//   if (e.target === e.currentTarget) {
//     gallery.classList.remove('show');
//   }
// });
