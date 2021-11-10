var button = document.querySelector("#btn-translate");
var textFromGUI = document.querySelector("textarea");
var outputDiv = document.querySelector("#output");
/*let testUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";*/
let bananaUrl = "https://api.funtranslations.com/translate/minion.json";

button.addEventListener("click", translate);

function errorHandler(error) {
    console.log("error in calling server", error);
}

function translate() {
    fetch(constructUrl(textFromGUI.value))
        .then(response => response.json())
        .then(json => outputDiv.innerText = json.contents.translated)
        .catch(errorHandler);
}

function constructUrl(text) {
    return bananaUrl + "?" + "text=" + text;
}