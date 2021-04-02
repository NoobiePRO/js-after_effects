var b=document.querySelector(".btn-translate");
var i=document.querySelector(".txt-area");
var o=document.querySelector(".output");

var url="https://api.funtranslations.com/translate/pirate.json";

function getTranslationURL(text){
    return url+"?text="+text;
}

function errorHandler(error){
    console.log("Error Occured",error);
}

function clickHandler(){
    var inputText=i.value;
    fetch(getTranslationURL(inputText))
       .then(response  =>  response.json())
       .then(json =>  {
           var translatedText=json.contents.translated;
           o.innerText = translatedText;
       }).catch(errorHandler);
};


b.addEventListener("click",clickHandler)