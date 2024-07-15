const address = 'Andorkilla';
// slice that make a cut from start point to end point
const part = address.slice(0, 1);
console.log(part);

// splict make a string to array 
const sentence = 'I am a good Reader';
console.log(sentence.split(' ')); 
console.log(sentence.split('a')); 

const friendsStr = 'Rahim , kahim , dahim, lahim,Mahim';
const friends = friendsStr.split(',');
console.log(friends);
// join makes a array to string also add content in the middle (rahim / jasim)
const realFriends = ['Rahim','kahim', 'dahim', 'lahim','Mahim'];
console.log(realFriends.join(' - '));

// Concat can make strinds togeger and aslo apply content 
const first = 'Abid';
const last = 'Nabid';
const fullName = first + '' +  last;
// console.log(fullName)
const fullName2 = first.concat(' ').concat(last);
console.log(fullName2)


// includes that varifies if is present or not
console.log(last.includes('c'));
