// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']


const colors = ['red', 'blue','green','yellow','orange'];

const revser_color = [];


for(let i = 0; i< colors.length; i++){
      let reverse =  colors[i];
    revser_color.unshift(reverse);

}
console.log(revser_color);