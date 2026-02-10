let cliick = document.querySelector(".cliick");
let textii = document.querySelector(".textii");
let characraodenoba = document.querySelector(".characraodenoba");
let wordraodenoba = document.querySelector(".wordraodenoba");
let sentenceraodenoba = document.querySelector(".sentenceraodenoba");
let bbbb = textii.textContent;
let wo = Number(wordraodenoba);
let se = Number(sentenceraodenoba)
console.log(bbbb.length);

cliick.addEventListener("click", () =>{
    let text = textii.value;
    
    let charCount = text.length;
    characraodenoba.textContent = charCount;
    
    let words = text.split(/\s+/).filter(word => word.length > 0);
    let wordCount = words.length;
    wordraodenoba.textContent = wordCount;
    
    
    let sentences = text.split(/[.!?]+/).filter(sent => sent.trim().length > 0);
    let sentenceCount = sentences.length;
    sentenceraodenoba.textContent = sentenceCount;

});

