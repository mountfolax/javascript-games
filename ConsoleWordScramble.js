let myWord = "hello";

function scrambledGame(word) {
  let originalWordLength = word.length; // Original word length
  let scrambledWord = ""; // Start with an empty scrambled word

  for (let i = 0; i < originalWordLength; i++) {
    // Randomly pick an index
    let randomIndex = Math.floor(Math.random() * word.length);

    // Add the selected letter to scrambledWord
    scrambledWord += word[randomIndex];
    console.log(`Picked letter: ${word[randomIndex]}`);

    // Remove the selected letter from the word
    word = word.slice(0, randomIndex) + word.slice(randomIndex + 1);
    console.log(`Remaining word: ${word}`);
    console.log(`--------------------------------`);
  }

  console.log(`Final scrambled word: ${scrambledWord}`);
  return scrambledWord; // Return the fully scrambled word
}

scrambledGame(myWord);
