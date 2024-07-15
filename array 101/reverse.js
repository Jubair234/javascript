const nubmers = [1,2,3,4,5,6,7,8,9];

// console.log(nubmers);
// const reversed = nubmers.reverse();
// console.log(reversed);


const rev_nubers = [];
for (const num of nubmers){
    // console.log(num);
    rev_nubers.unshift(num);

}
// console.log(rev_nubers);

const reversed_number = []
for(let i = 0; i<nubmers.length; i++){
    const num = nubmers[i];
    reversed_number.unshift(num);
    
}
console.log(reversed_number);

// reverse side
const reverse_side = [];
for(let i = nubmers.length - 1; i>=0; i--){
    const num = nubmers[i];
    reverse_side.push(num);
    // console.log(num);
}
console.log(reverse_side);
