let word;

function logLetters(getWord, getNumber) {
  word = getWord;
  word = word.split(" ").join("");
  word = word.substring(0, getNumber);
  return console.log(word);
}
logLetters("hello world", 7);
