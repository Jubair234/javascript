// let num = 1;

// while(num <= 30){
//     if(num % 3 ===0 && num % 5 === 0){
//         console.log(num)
//     }
//     num++;
// }

let sum = 0;
for(let i = 1 ; i<=30; i++){
    if(i % 3=== 0){
        console.log(i)
        sum = sum + i;
    }
    console.log('sum is :', sum)
}

