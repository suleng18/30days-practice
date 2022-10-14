const animationElements = document.querySelectorAll('.show-on-scroll');

function toggleAnimationElementInWindow(element) {
  let rect = element.getClientRects()[0];
  let heightScreen = window.innerHeight;
  console.log(heightScreen);

  if (!(rect.bottom < 0 || rect.top > heightScreen)) {
    element.classList.add('start');
  } else {
    element.classList.remove('start');
  }
}

function checkAnimation() {
  animationElements.forEach((el) => {
    toggleAnimationElementInWindow(el);
  });
}

window.onscroll = checkAnimation;
