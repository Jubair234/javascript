function doubleIT (number) {
    const doubled = number * 2;
    console.log(number , doubled);
}

doubleIT(12);
console.log('>-------------');
doubleIT(23);

const num = 20;
doubleIT(num);
const money = 1000;
doubleIT(money);

// 

function difference ( num1 , num2) {
    const diff = num1 - num2;
    console.log(num1, num2, 'diffrence is', diff);
}

const fatherAge = 60;
const myAge = 24;
difference(fatherAge,myAge);