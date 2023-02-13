START
var nbc = 0;
var nbw = 1;
var nbv = 0;
var sentence = prompt("my algorithm checkpoint.");

for (var i = 0; i < sentence.length; i++){
    nbc++;
    if (sentence[i]== ""){
        nbw++;
    }
    if (sentence[i]== "a"||
    sentence[i]== "e"||
    sentence[i]== "i"||
    sentence[i]== "o"||
    sentence[i]== "u"){
        nbw++;
    }
}



END
console.log("The length of a sentence is:"+ nbc);
console.log("The number of a word in a sentence is:"+ nbw);
console.log("The length of a vowels in the sentence is:"+ nbv);