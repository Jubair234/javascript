const person = {
    name: 'Rahim Sorkar',
    age: 25,
    profession: 'Developer',
    salary: 30000,
    married: true,
    'fav places': ['Bandorban','cox bazar','Sainmartain']

}
person.salary = 35000;
person['age'] = 30;
person['fav places'] = ['India', 'nepal','bali']

console.log(person);


const keyName = 'profession';
console.log(person[keyName]);


