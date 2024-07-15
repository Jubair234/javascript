const person = {
    name: 'Rahim Sorkar',
    age: 25,
    profession: 'Developer',
    salary: 30000,
    married: true,
    'fav places': ['Bandorban','cox bazar','Sainmartain']

}
// console.log(person);
// Dot Notation used to get value of  object property 
// console.log(person.name)
const income = person.salary;
// console.log(income);


// Braket Notation
const job = person['profession'];
console.log(job);

// Error 
// console.log(person.'fav places');
console.log(person['fav places']);