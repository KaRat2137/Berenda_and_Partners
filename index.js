let gandhiTwoElement = document.getElementById("gandhi2")
let gandhiElement = document.getElementById("gandhi-text")
let oldScrollY = window.scrollY
let regExp = /\(([^)]+)\)/;

window.addEventListener('scroll', () => {
  if(elementIsVisibleInViewport(gandhiTwoElement)) {
    let scaleValue = parseFloat(regExp.exec(gandhiElement.style.transform)[1])
    console.log(scaleValue)
    if(isScrollingDown()) {
      if(scaleValue <= 1.7) {
        gandhiElement.style.transform = `scale(${scaleValue + 0.003})`
      }
    } else {
      if(scaleValue >= 1) {
        gandhiElement.style.transform = `scale(${scaleValue - 0.003})`
      }
    }
  }
});
function elementIsVisibleInViewport (el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}
function isScrollingDown() {
  let result
  if(oldScrollY < window.scrollY){
    result = true;
  } else {
    result = false;
  }
  oldScrollY = window.scrollY;
  return result
}