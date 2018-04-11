function countLetters(string) {
  var letterCount = {};

  for (var i = 0; i < string.length; i ++){
  	var letter = string[i];

    if (letter != ' '){
      if (letterCount[letter] === undefined){
        //create object
        letterCount[letter] = {
        	count: 1,
        	position: [i]
        };
      } else {
      	// object for this letter exists
      	letterCount[letter]['count'] += 1;
      	letterCount[letter]['position'].push(i);
      }
    }
  }

  return letterCount;
}

console.log(countLetters("lighthouse in the house"));
