// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2P89eZUCagsXGUlYEmtotG9hyeq9paJY",
  authDomain: "berenda-and-partners.firebaseapp.com",
  projectId: "berenda-and-partners",
  storageBucket: "berenda-and-partners.appspot.com",
  messagingSenderId: "1067338064862",
  appId: "1:1067338064862:web:ff6d620bce25b1a9d5b34f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let gandhiElement = document.getElementById("gandhi-text")
let checkboxElement = document.getElementById("navCheckbox")
let oldScrollY = window.scrollY
let regExp = /\(([^)]+)\)/;

window.addEventListener('scroll', () => {
  if(elementIsVisibleInViewport(gandhiElement)) {
    let scaleValue = parseFloat(regExp.exec(gandhiElement.style.transform)[1])
    if(isScrollingDown()) {
      if(scaleValue <= 1.3) {
        gandhiElement.style.transform = `scale(${scaleValue + 0.001})`
      }
    } else {
      if(scaleValue >= 1) {
        gandhiElement.style.transform = `scale(${scaleValue - 0.001})`
      }
    }
  }
});
document.addEventListener("click", (event) => {
  if(event.target != checkboxElement) {
    if(checkboxElement.checked) {
      checkboxElement.checked = false;
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