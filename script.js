// var button_translate = document.querySelector(".btn-translate")
// var txt_area = document.querySelector(".txt-area")
// var output = document.querySelector(".output")

// var serverURL= "https://api.funtranslations.com/translate/minion.json"
// function getTranslationURL(text){
//     return serverURL+"?"+"text="+text
// }
// function errorHandler(error){
//     console.log("error occured", error)
//     alert("something wrong with server! try again after some time.")
// }
// function clickEventHandler(){
//     var inputText = txt_area.value;
//     fetch(getTranslationURL(inputText)).then(response => response.json()).then(json => {
//         var translatedText = json.contents.translated;
//         output.innerText = translatedText;
//     })  .catch(errorHandler)
// }
// button_translate.addEventListener("click", clickEventHandler)