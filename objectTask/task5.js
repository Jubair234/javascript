// for of : array 
// for in : object

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Saver City',
    isStudent: true,
}

// let key = Object.keys(myObject);
// let value = Object.values(myObject);

// for(const keys of key){
//     console.log(keys);
// }

// for(const values of value){
//     console.log(typeof(values));
// }


for(let myObjects in myObject){
    console.log('key:', myObjects,'|','type: ', typeof(myObject[myObjects]));
}