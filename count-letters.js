function countLetters(string) {
  var letterCount = {};

  for (var letter of string){
    if (letter != ' '){
      if (letterCount[letter] === undefined){
        letterCount[letter] = 1;
      } else {
        letterCount[letter] += 1;
      }
    }
  }

  return letterCount;
}

console.log(countLetters("lighthouse in the house"));
