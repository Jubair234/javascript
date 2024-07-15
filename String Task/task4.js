// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let inputString = "mr x had xxx Movie that is inrapoite to watch CCC XXXX";
let modifiedString = "";
for (let i = 0; i < inputString.length; i++) {
let currentChar = inputString[i];
if (currentChar === "x") {
modifiedString += "y";
} else if (currentChar === "X") {
modifiedString += "Y";
} else {
modifiedString += currentChar;
}
}
console.log(modifiedString);



// let input string from user
let str = 'I am very nervous at programming X language is very X no more that xxx';
// modified string 
let modStr = '';
// loop the string for to get ;
for (let i = 0; i< str.length; i++){
    let findChar = str[i];
    if(findChar === 'x'){
        modStr = modStr + 'y';

    }
    else if(findChar === 'X'){
        modStr = modStr + 'Y';
    }
    else{
        modStr = modStr + findChar;
    }

}
console.log(modStr);