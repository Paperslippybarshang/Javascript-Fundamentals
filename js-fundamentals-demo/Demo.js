// let password = 'kitty';

// if(password.length >= 6) {
//   if(password.indexOf(' ') === -1) {
//     console.log('Valid Password');
//   }
//   else {
//     console.log('Password is long enough, but cannot contain spaces');
//   }
// }
// else {
//   console.log('Password must be longer!');
// }

let mystery = '';
if(mystery){
  console.log("TRUTHY");
}
else {
  console.log("FALSY");
}
// Truthy vs Falsy values
// false/ 0 / ''/ null/ undefined /NaN
// Everything else is truthy!
let userName = 'Hello';
if(userName) {
  console.log('You are logged in!');
}
else {
  console.log('Please log in!');
}