// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 76, 46]

const numbers = [12,98,5,41,23,78,46];
const even_number = [];
for(const num of numbers){
    // console.log(num);
    if(num % 2=== 0){
        even_number.push(num)
    }
}
console.log(even_number);