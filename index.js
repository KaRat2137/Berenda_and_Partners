// let zosiaElement = document.getElementById("about")
let options = {
    threshold: 0.8,
  };
// function zosiaCallback(e) {
//     console.log(zosiaElement.style.right)
//     if(zosiaElement.style.right == "-100vw") {
//         zosiaElement.style.right = "0"
//     }
// }

// let zosiaObserver = new IntersectionObserver(zosiaCallback, options);
// zosiaObserver.observe(zosiaElement);

// let introElement = document.getElementById("intro")
// function introCallback(e) {
//     if(introElement.style.marginLeft == "-100vw") {
//         introElement.style.marginLeft == "0"
//     }
// }
// let introObserver = new IntersectionObserver(introCallback, options);
// introObserver.observe(introElement);

let introElement = document.getElementById("intro")
function introCallback(e) {
    if(introElement.style.left == "-100vw") {
        introElement.style.left = "0"
    }
}
let introObserver = new IntersectionObserver(introCallback, options);
introObserver.observe(document.getElementById("intro_bg"));