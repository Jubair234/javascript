const school = 'RAJ UK Uttara Model school';
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject = 'Chemistry';
const book = 'chemistry';
// case sensative 

if(subject.toLowerCase() === book){
    console.log('I am reading book aiber porikah fatai felbo');

}
else{
    console.log( 'Hudai hudai pistra oltay ');
}


const drink = 'water';
const liquid = ' water  ';
if(drink === liquid.trim()){
    console.log('Pani er opr nam life');
}
else{
    console.log('somudre pane ase kahiate pari nah');
}