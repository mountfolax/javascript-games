let myWord = 'hello';

function scrambledGame(word){
    let originalWordLength = word.length;
    let scrambledWord = '';
    for(i=0; i < originalWordLength ; i++){

    let randomIndex = Math.floor(Math.random() * word.length);

    scrambledWord += word[randomIndex];
     console.log(`picked word: ${word[randomIndex]}`);

    remainigWord = word.slice(0 , randomIndex) + word.slice(randomIndex + 1);
    
   
    console.log(`Remaining word : ${remainigWord}`);
    console.log(`--------------------------------`);

    }
    console.log(`Final scrambled Word ${scrambledWord}`)
    return scrambledWord

    
}
scrambledGame(myWord)
