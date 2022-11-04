const name = 'Sarat';
let age = 33;
const hasHobbies = true;

age = 34;

function summariseUser(userName, userAge, userHobbies) {
  return (
    'Name is ' +
    userName +
    ' , age is ' +
    userAge +
    ' and the user has Hobbies: ' +
    userHobbies
  );
}

console.log(summariseUser(name, age, hasHobbies));
