// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

const statement = 'I am a hard working person';

const words = statement.split(' ');
console.log(words);
let newArray = [];
for(let word of words){
    // console.log(word);
    newArray.unshift(word);
}
console.log(newArray.join(' '));
