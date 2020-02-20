/*Harmless Ransom Note
A note made out of words cut from a magazine (object in this case)

This function will take in 2 inputs,
the first input string of the note we want to write,
the second input will be the magazine text we have to use

The function will look at the note we want to write, and then check the 
Magazine to see if it contains each word we need to use

You can assume that both inputs will not contain punctuation or capital letters

ex:  if we need a word more than once we should find one word 
to cut out for each time we need it */


// For a challenge feel free to try writing a second function that will use
// capital letters and punctuation as well

function harmlessRandsomNote(noteText, magazineText){
    var noteArr = noteText.split(' ');
    var magazineArr = magazineText.split(' ');
    var magazineObj = {};

    magazineArr.forEach(word => {
        if(!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    });
   // console.log(magazineArr);
    //console.log(magazineObj);
    var noteIsPossible = true;
    noteArr.forEach(word =>{
        if(magazineObj[word]){
            magazineObj[word]--;
            if(magazineObj[word] < 0) noteIsPossible = false;
        }
        else noteIsPossible = false;
    });
    return noteIsPossible;
}

harmlessRandsomNote('have no text', 'this is all of the text i have to use');
console.log(harmlessRandsomNote(' have no text', 'this is all of the text i have to use'), "log");
//output should be either true or false 
// true if the magazine has enough words for the note
// false if there are not enough words for the note


/*
Hint 1-
You will need to *split* each string of text into their own array, and then set the arrays to 
variables that can be used in the function
*/

/*
Hint 2-
Look into building a Hash Table
Build an object that will hold every word in the magazine array as a property on it.
For each word property we want the value to be how many times the word is present in the array.

**To build the object create a forEach loop that will take each word in the array and
then will pass that word through a function. This nested function will look at each word in the
magazine array and will check to see if it exists in the magazineObj. If yes then increase the 
property value by one, and if not it will add the word to the object as a new property**
*/