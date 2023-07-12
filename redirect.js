window.addEventListener("load", (event) => {
    let userLang = navigator.language || navigator.userLanguage;
    if (userLang == "pl") {
        window.location.href = "/pl/index.html"
    }
    else {
        window.location.href = "/en/index.html"
    }
});