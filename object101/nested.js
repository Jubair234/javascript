const school = {
    name: 'VNC',
    class: ['10' , '11'],
    events:['science fair', 'bijoy dibos'],
    unique:{
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top',
        }
    }
}
school.unique.result.gpa = 6;
console.log(school.unique.result.gpa)

school.events[1] = '16 December';
console.log(school.events[1]);
delete school.class;
console.log(school);
