// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct.
// Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// DESCRIBE the code as it would be run, then let us know what the OUTCOME of the
// console.log statement will be.


// 0. (EXAMPLE!)
// DESCRIPTION:
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. If it is,
// 'yes' will be console.logged.
// OUTCOME:
// 'yes' is what is logged.

// CODE:
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //


// 1.
// DESCRIPTION
// Created variable called 'Dane'
// Create if else conditional
// if name is correct match to 'Mary' console.log ('Hi, Mary!')
// else if it is incorrect it will console.log ('How do you do?')
//
//
//
// OUTCOME:
// 'How do you do' will be logged

// CODE:
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 2.
// DESCRIPTION:
//  declare open variable secret and declare code 123
//  condtional if code is exact match to 123 secret will be 'super'
//  code will be will be multiplied by 2
// another conditional if code is greater then 250 secret will be 'duper'
//
// OUTCOME:
// 'super' will be logged

// CODE:
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 3.
// DESCRIPTION
// three variables are declared isStudent is true, age is 34, and zip is 55407
// conditional if else statment made of if isStudent is true and if zip is greater then 80000 ' You're a student on the West !' will be console.loog
// else if isStudent is false or age is less than 30 'What are your hobbies" will be cosoled.log
// the third else if isstudent is true then console.log 'Welcome to prime' or if false cnsole.log 'How about the weather'
//
// OUTCOME: 'Welcome to prime' will be console.log
//

// CODE:
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //


// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// 0. (EXAMPLE!)
// DESCRIPTION:
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

// CODE:
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 4. 
// DESCRIPTION:
// We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// CODE:
// Fix variable colorOne and colortwo. Set colorOne to blue, it is set to red and not blue like in description.
// DO the same of swapping colorTwo to red where it is written in code as blue.
// add colorTwo to colorOne (colorOne + colorTwo)
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 5.
// DESCRIPTION:
// We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

// CODE:
/*
// change || to && in the code because it should be a statement that both are needed to be true. 
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 6.
// DESCRIPTION:
// We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

// CODE:
/*
// change less than or equal to symbol to greater then or equal to symbol =<.
// Also change the console.log 'no entry' 
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
