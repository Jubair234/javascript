/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
const age = 43;
let ticket = 800;

// if (age < 10) {
//     console.log('Children get free bus ride');
    
// }
// else if (age > 10 && age <= 25) {
//     let discount = ticket * (50 / 100);
//     ticket = ticket - discount;
//     console.log(ticket, 'You get Student Discount');
// }
// else if (age >= 60) {
//     let discount =  ticket * (15 / 100);
//     ticket = ticket - discount;
//     console.log(ticket, 'You get Senior Citizens Discount');
// }
// else {
//     console.log(ticket, 'You pay Regular Ticket Fare');
// }

//ternary oprator
ticket = age < 10
    ? 'Children get free bus ride'
    : age > 10 && age <= 25
    ? ((ticket -= ticket * (50 / 100)), ticket + ' You get Student Discount')
    : age >= 60
    ? ((ticket -= ticket * (15 / 100)), ticket + ' You get Senior Citizens Discount')
    : ticket + ' You pay Regular Ticket Fare';

console.log('Final ticket price:', ticket)

