console.log("Operators practice");

// Types of Operators 
// 1 - Arithmatic Operator
// 2 - Assignment Operator
// 3 - comparision operator
// 4 - logical Operator

// Arithmatic Operator - It does the simple calculations like addition, subtraction, multiplication, division and modolus. 
// such as + | - | * | / | % 

// console.log(20 + 20);   // addition
// console.log(20 - 10);   // subtraction
// console.log(20 * 10);   // multiplication
// console.log(20 / 10);   // division
// console.log(10 % 3);    // modulus

// Assignment Operator - It is not too different from arithmatic operators. we use this one to avoid reasign. After assigning var a number, we won't recall it to add some other numbers too. instead we assignment operators.
// such as = | += | -= | /= | *= 
// let username = "Abdullah";
// let num = 10;
// num = num + 5; // reassign
// num += 5;
// num -= 5;
// num *= 5;
// num /= 5;
// console.log(num);

// comparision operator - It only gives answer in boolean form, either the statment gets true of false.
// such as | > | < | == | === | != | !== | >= | <= 
// >    - greater than
// <    - less than
// ==   - double equals to (equals to)
// ===  - triple equals to (double equals to - used to check the data type whether strinf or number.)
// !=   - not equals to 
// !==  - not double equals to (this one is different from not equals to because it also checks the data types of that.)
// >=   - greater or equals to (Either equal or greater, both are exceptable)
// <=   - less or equals to (Either equal or less, both are exceptable)


// logical Operator - It also gives answer is boolean form, either the statment gets true of false.
// such as && and ||
// && == and
// || == or

// function and prompt :
// () - This is the symbol for alert. We use alert to show a pop-up. The moment someone opens our website, the alert will show our message.  
// prompt - It is also used for pop-ups, but the only difference is that we use prompt to take their data instead of showing them. Note: we used this with variables.

// alert box  // alert("Hello, World!"); 
// let username = prompt("Enter your full name: ");
// console.log("Full Name: " + username);

// concatenation and addition :
// Addition - It is when we add two or more numbers together and its sum is called addition.
// concatenation - It happens when your two different data types together, like string used with number. instead of getting the sum we find them written together. 

// addition // 20 + 20 
// console.log(20 + 20);
// concatenation // "20" + 20 + "20" 
// console.log("20" + 20 + "20");



// SIMPLE PRACTICE OF ASSIGNMENT OPERATORS :

// calculate percentage
// let totalMarks = 300;
// let subject1 = +prompt("Enter marks for subject 1: ");
// let subject2 = +prompt("Enter marks for subject 2: ");
// let subject3 = +prompt("Enter marks for subject 3: ");

// let obtainedMarks = subject1 + subject2 + subject3;

// let percentage = (obtainedMarks / totalMarks) * 100;
// console.log("Obtained Marks: " + obtainedMarks + " and Percentage is: " + percentage + "%");



// PRACTICE OF COMPARISION OPERATORS AND LOGICAL OPERATORS :

// 9 > 8 && 3 + 7 === 11 || 4 !== '4' && 10 - 2 === 8 || 5 * 3 === 15              // FIRST ONE 
// 0 === false && 7 * 2 === 14 || 'True' === true && 5 !== '5' || 6 + 6 === 12     // SECOND ONE
// 'a' !== 'A' && 3 * 3 === 9 || 4 < 4 && 10 / 2 === 5 || 8 === '8'                // THIRD ONE
// 100 / 10 === 10 && 7 === 7 || 3 * 2 !== 7 && 'hello' === 'hello' || 9 > 12      // FOURTH ONE
// 20 / 4 === 5 && 3 + 5 === 8 || 8 === 8 && 'yes' !== 'YES' || 12 === '12'        // FIFTH ONE
// 6 > 5 && 4 * 2 !== 10 || 7 === 6 + 1 && 'no' === 'yes' || 100 !== 100           // SIXTH ONE
// 5 === '5' || 8 / 2 !== 5 && 4 + 6 === 11 || 9 === 8 + 1 && 'abc' !== 'ABC'      // SEVENTH ONE

// FIRST ONE 
console.log(9 > 8 && 3 + 7 === 11 || 4 !== '4' && 10 - 2 === 8 || 5 * 3 === 15);
// 9 > 8 && 3 + 7 === 11 || 4 !== '4' && 10 - 2 === 8 || 5 * 3 === 15
// true && false || true && true || true
// false || true || true 
// THE ANSWER IS TRUE

// SECOND ONE
console.log(0 === false && 7 * 2 === 14 || 'True' === true && 5 !== '5' || 6 + 6 === 12);
// 0 === false && 7 * 2 === 14 || 'True' === true && 5 !== '5' || 6 + 6 === 12
// true && true || false && true || true
// true || false || true 
// THE ANSWER IS TRUE

// THIRD ONE
console.log('a' !== 'A' && 3 * 3 === 9 || 4 < 4 && 10 / 2 === 5 || 8 === '8')
// 'a' !== 'A' && 3 * 3 === 9 || 4 < 4 && 10 / 2 === 5 || 8 === '8'
// true && true || false && true || false
// true || false || false 
// THE ANSWER IS TRUE

// FOURTH ONE
console.log(100 / 10 === 10 && 7 === 7 || 3 * 2 !== 7 && 'hello' === 'hello' || 9 > 12);
// 100 / 10 === 10 && 7 === 7 || 3 * 2 !== 7 && 'hello' === 'hello' || 9 > 12
// true && true || true && true || false
// true || true || false 
// THE ANSWER IS TRUE 

// FIFTH ONE
console.log(20 / 4 === 5 && 3 + 5 === 8 || 8 === 8 && 'yes' !== 'YES' || 12 === '12' );
// 20 / 4 === 5 && 3 + 5 === 8 || 8 === 8 && 'yes' !== 'YES' || 12 === '12' 
// true && true || true && true || false 
// true || true || false 
// THE ANSWER IS TRUE 

// SIXTH ONE
console.log(6 > 5 && 4 * 2 !== 10 || 7 === 6 + 1 && 'no' === 'yes' || 100 !== 100);
// 6 > 5 && 4 * 2 !== 10 || 7 === 6 + 1 && 'no' === 'yes' || 100 !== 100
// true && true || true && false || false
// true || false || false 
// THE ANSWER IS TRUE

// SEVENTH ONE
console.log(5 === '5' || 8 / 2 !== 5 && 4 + 6 === 11 || 9 === 8 + 1 && 'abc' !== 'ABC');
// 5 === '5' || 8 / 2 !== 5 && 4 + 6 === 11 || 9 === 8 + 1 && 'abc' !== 'ABC'
// false || true && false || true && true 
// false | false || true 
// THE ANSWER IS TRUE 
// -------------------




// true && false || 4 * 2 === 8 && 'hello' === 'hello' || 5 !== '5' && 3 < 5        // FIRST ONE 
// false && true || 'red' === 'blue' && 5 + 5 === 10 || 6 === '6' && 9 > 8          // SECOND ONE
// 'dog' === 'dog' && 3 * 3 === 9 || false && 5 === 5 || 7 === '7'                  // THIRD ONE
// true || false && 4 * 4 === 16 || 'cat' !== 'dog' && 3 < 5 || 10 / 2 === 5        // FOURTH ONE
// false && true || 5 * 3 === 15 || 6 > 8 && 7 + 1 === 8 || 'test' === 'test'       // FIFTH ONE
// true && false || 8 / 2 === 4 && 3 + 2 === 5 || 9 !== 9 && 'green' === 'green'    // SIXTH ONE


// FIRST ONE 
console.log(true && false || 4 * 2 === 8 && 'hello' === 'hello' || 5 !== '5' && 3 < 5);
// true && false || 4 * 2 === 8 && 'hello' === 'hello' || 5 !== '5' && 3 < 5
// false || true && true || true && true 
// false || true || true 
// THE ANSWER IS TRUE 

// SECOND ONE
console.log(false && true || 'red' === 'blue' && 5 + 5 === 10 || 6 === '6' && 9 > 8 );
// false && true || 'red' === 'blue' && 5 + 5 === 10 || 6 === '6' && 9 > 8 
// false || false && true || false && true 
// false || false || false 
// THE ANSWER IS FALSE 

// THIRD ONE
console.log('dog' === 'dog' && 3 * 3 === 9 || false && 5 === 5 || 7 === '7');
//'dog' === 'dog' && 3 * 3 === 9 || false && 5 === 5 || 7 === '7' 
// true && true || false && true || false
// true || false || false
// THE ANSWER IS TRUE 

// FOURTH ONE
console.log(true || false && 4 * 4 === 16 || 'cat' !== 'dog' && 3 < 5 || 10 / 2 === 5);
// true || false && 4 * 4 === 16 || 'cat' !== 'dog' && 3 < 5 || 10 / 2 === 5
// true || false && true || true  && true || true 
// true || false || false || true 
// THE ANSWER IS TRUE 

// FIFTH ONE
console.log(false && true || 5 * 3 === 15 || 6 > 8 && 7 + 1 === 8 || 'test' === 'test');
// false && true || 5 * 3 === 15 || 6 > 8 && 7 + 1 === 8 || 'test' === 'test'
// false || true || false && true || true 
// false // true // false // true 
// THE ANSWER IS TRUE

// SIXTH ONE
console.log(true && false || 8 / 2 === 4 && 3 + 2 === 5 || 9 !== 9 && 'green' === 'green');
// true && false || 8 / 2 === 4 && 3 + 2 === 5 || 9 !== 9 && 'green' === 'green'
//  false || true && true || false && true 
// false  || true || true 
// THE ANSWER IS TRUE 
// -------------------




// true && 'hello' === 'hello' || 9 * 2 === 18 && 6 + 2 === 8 || false && 7 > 3           // FIRST ONE 
// 'apple' === 'apple' && 2 + 3 === 5 || false && true || 10 - 5 === 5 || 5 === '5'       // SECOND ONE
// 15 * 2 !== 30 && 5 === 5 || 'cat' === 'dog' && 7 / 2 === 3.5 || 20 > 10                // THIRD ONE


// FIRST ONE 
console.log(true && 'hello' === 'hello' || 9 * 2 === 18 && 6 + 2 === 8 || false && 7 > 3);
// true && 'hello' === 'hello' || 9 * 2 === 18 && 6 + 2 === 8 || false && 7 > 3
// true && true || true && true || false && true 
// true || true || false 
// THE ANSWER IS TRUE 

// SECOND ONE
console.log('apple' === 'apple' && 2 + 3 === 5 || false && true || 10 - 5 === 5 || 5 === '5');
// 'apple' === 'apple' && 2 + 3 === 5 || false && true || 10 - 5 === 5 || 5 === '5'
// true && true || false || true || false
// true || false || true || false 
// THE ANSWER IS TRUE 

// THIRD ONE
console.log(15 * 2 !== 30 && 5 === 5 || 'cat' === 'dog' && 7 / 2 === 3.5 || 20 > 10);
// 15 * 2 !== 30 && 5 === 5 || 'cat' === 'dog' && 7 / 2 === 3.5 || 20 > 10
// false && true || false && true || true 
// false || false || true 
// THE ANSWER IS TRUE


// 8 * 3 === 24 && 100 / 10 === 10 || 'red' !== 'green' && 9 + 1 === 10 || 5 === 5      // FIRST ONE
// 10 > 8 && 7 * 2 === 14 || 3 - 1 === 2 && 'sun' === 'sun' || 'hello' !== 'HELLO'      // SECOND ONE
// 0 !== '0' && 9 + 5 === 14 || 3 * 3 === 9 && 'apple' === 'apple' || 12 / 3 === 4      // THIRD ONE
// 'hi' !== 'HI' && 7 + 2 === 9 || 10 / 2 === 5 && 'bar' !== 'bar' || 3 > 4             // FOURTH ONE
// 100 / 5 === 20 && 'dog' !== 'dog' || 12 * 2 === 24 && 9 === 9 || 'red' === 'blue'    // FIFTH ONE
// 'true' !== true && 4 + 6 === 10 || 8 / 4 === 2 && 15 - 5 === 10 || 'yes' === 'YES'   // SIXTH ONE
// 5 * 5 === 25 && 3 - 1 === 2 || 20 !== '20' && 10 === 10 || 'test' !== 'TEST'         // SEVENTH ONE


// FIRST ONE
console.log(8 * 3 === 24 && 100 / 10 === 10 || 'red' !== 'green' && 9 + 1 === 10 || 5 === 5);
// 8 * 3 === 24 && 100 / 10 === 10 || 'red' !== 'green' && 9 + 1 === 10 || 5 === 5
// true && true || true && true || true 
// true || true || true 
// THE ANSWER IS TRUE

// SECOND ONE
console.log(10 > 8 && 7 * 2 === 14 || 3 - 1 === 2 && 'sun' === 'sun' || 'hello' !== 'HELLO');
// 10 > 8 && 7 * 2 === 14 || 3 - 1 === 2 && 'sun' === 'sun' || 'hello' !== 'HELLO'
// true && true || true && true || true
// true || true || true 
// THE ANSWER IS TRUE 

// THIRD ONE
console.log(0 !== '0' && 9 + 5 === 14 || 3 * 3 === 9 && 'apple' === 'apple' || 12 / 3 === 4);
// 0 !== '0' && 9 + 5 === 14 || 3 * 3 === 9 && 'apple' === 'apple' || 12 / 3 === 4
// true && true || true && true || true 
// true || true || true 
// THE ANSWER IS TRUE 

// FOURTH ONE 
console.log('hi' !== 'HI' && 7 + 2 === 9 || 10 / 2 === 5 && 'bar' !== 'bar' || 3 > 4);
// 'hi' !== 'HI' && 7 + 2 === 9 || 10 / 2 === 5 && 'bar' !== 'bar' || 3 > 4 
// true && true || true && false || true
// true || true || true 
// THE ANSWER IS TRUE 

// FIFTH ONE
console.log(100 / 5 === 20 && 'dog' !== 'dog' || 12 * 2 === 24 && 9 === 9 || 'red' === 'blue');
// 100 / 5 === 20 && 'dog' !== 'dog' || 12 * 2 === 24 && 9 === 9 || 'red' === 'blue'
// true && false || true && true || false
// false || true || false
// THE ANSWER IS TRUE 

// SIXTH ONE
console.log('true' !== true && 4 + 6 === 10 || 8 / 4 === 2 && 15 - 5 === 10 || 'yes' === 'YES');
// 'true' !== true && 4 + 6 === 10 || 8 / 4 === 2 && 15 - 5 === 10 || 'yes' === 'YES'
// true && true || true && true || false 
// true || true || false
// THE ANSWER IS TRUE 

// SEVENTH ONE
console.log(5 * 5 === 25 && 3 - 1 === 2 || 20 !== '20' && 10 === 10 || 'test' !== 'TEST');
// 5 * 5 === 25 && 3 - 1 === 2 || 20 !== '20' && 10 === 10 || 'test' !== 'TEST'
// true && true || true && true || true 
// true || true || true 
// THE ANSWER IS TRUE 
// -------------------




// 'cat' !== 'dog' && 4 * 5 === 20 || 7 + 2 === 9 && 2 !== 1 || 12 / 3 === 4                // FIRST ONE
// 9 > 8 && 6 * 2 === 12 || 3 + 7 !== 10 && 'apple' === 'apple' || 6 === '6'                // SECOND ONE
// 'hello' === 'hello' && 4 * 3 === 12 || 10 / 5 === 2 && 5 !== 5 || 'world' !== 'WORLD'    // THIRD ONE
// 20 - 5 === 15 && 'a' !== 'A' || 3 * 2 === 6 && 5 === '5' || 7 > 6                        // FOURTH ONE
// 4 + 4 === 8 && 6 * 3 === 18 || 5 !== '5' && 'dog' === 'dog' || 12 === 12                 // FIFTH ONE
// 'false' === 'false' && 10 - 4 === 6 || 3 / 3 === 1 && 7 === 7 || 8 * 2 === 16            // SIXTH ONE
// 'blue' !== 'green' && 9 + 6 === 15 || 5 === 5 && 8 / 4 === 2 || 'apple' === 'banana'     // SEVENTH ONE
// 8 * 2 === 16 && 5 + 4 === 9 || 6 === '6' && 10 - 3 === 7 || 7 * 2 !== 16                 // EIGHTH ONE
// 5 + 2 === 7 && 'red' === 'red' || 3 * 4 === 12 && 'dog' !== 'cat' || 10 - 5 === 5        // NINETH ONE
// 7 * 3 === 21 && 12 / 4 === 3 || 5 + 6 === 11 && 'blue' !== 'green' || 'yes' !== 'YES'    // TENTH ONE
// 'false' === false && 4 * 2 === 8 || 3 - 2 === 1 && 10 / 5 === 2 || 'a' !== 'A'           // ELEVENTH ONE
// 6 + 6 === 12 && 'yellow' === 'yellow' || 8 !== 8 && 3 * 3 === 9 || 'hello' !== 'HELLO''  // TWELVETH ONE


// FIRST ONE 
console.log('cat' !== 'dog' && 4 * 5 === 20 || 7 + 2 === 9 && 2 !== 1 || 12 / 3 === 4);
// 'cat' !== 'dog' && 4 * 5 === 20 || 7 + 2 === 9 && 2 !== 1 || 12 / 3 === 4
// true && true || true && true || true 
// true || true || true 
// THE ANSWER IS TRUE 

// SECOND ONE
console.log(9 > 8 && 6 * 2 === 12 || 3 + 7 !== 10 && 'apple' === 'apple' || 6 === '6');
// 9 > 8 && 6 * 2 === 12 || 3 + 7 !== 10 && 'apple' === 'apple' || 6 === '6'
// true && true || false && true || false 
// true || false || false 
// THE ANSWER IS TRUE 

// THIRD ONE
console.log('hello' === 'hello' && 4 * 3 === 12 || 10 / 5 === 2 && 5 !== 5 || 'world' !== 'WORLD');
// 'hello' === 'hello' && 4 * 3 === 12 || 10 / 5 === 2 && 5 !== 5 || 'world' !== 'WORLD'
// true && true || true && false || true 
// true || false || true 
// THE ANSWER IS TRUE

// FOURTH ONE
console.log(20 - 5 === 15 && 'a' !== 'A' || 3 * 2 === 6 && 5 === '5' || 7 > 6);
// 20 - 5 === 15 && 'a' !== 'A' || 3 * 2 === 6 && 5 === '5' || 7 > 6
// true && false || true && false || true 
// false || false || true 
// THE ANSWER IS TRUE

// FIFTH ONE
console.log(4 + 4 === 8 && 6 * 3 === 18 || 5 !== '5' && 'dog' === 'dog' || 12 === 12);
// 4 + 4 === 8 && 6 * 3 === 18 || 5 !== '5' && 'dog' === 'dog' || 12 === 12
//  true && true || true && true || true 
// true || true || true 
// THE ANSWER IS TRUE 

// SIXTH ONE
console.log('false' === 'false' && 10 - 4 === 6 || 3 / 3 === 1 && 7 === 7 || 8 * 2 === 16);
// 'false' === 'false' && 10 - 4 === 6 || 3 / 3 === 1 && 7 === 7 || 8 * 2 === 16
// true && true || true && true || true
// true || true || true 
// THE ANSWER IS TRUE

// SEVENTH ONE
console.log('blue' !== 'green' && 9 + 6 === 15 || 5 === 5 && 8 / 4 === 2 || 'apple' === 'banana');
// 'blue' !== 'green' && 9 + 6 === 15 || 5 === 5 && 8 / 4 === 2 || 'apple' === 'banana'
// true && true || true && true || false 
// true || true || false 
// THE ANSWER IS TRUE 

// EIGHTH ONE
console.log(8 * 2 === 16 && 5 + 4 === 9 || 6 === '6' && 10 - 3 === 7 || 7 * 2 !== 16);
// 8 * 2 === 16 && 5 + 4 === 9 || 6 === '6' && 10 - 3 === 7 || 7 * 2 !== 16
// true && true || false && true || true 
// true || false || true 
// THE ANSWER IS TRUE 

// NINETH ONE
console.log(5 + 2 === 7 && 'red' === 'red' || 3 * 4 === 12 && 'dog' !== 'cat' || 10 - 5 === 5);
// 5 + 2 === 7 && 'red' === 'red' || 3 * 4 === 12 && 'dog' !== 'cat' || 10 - 5 === 5
// true && true || true && true || true
// true || true || true 
// THE ANSWER IS TRUE

// TENTH ONE
console.log(7 * 3 === 21 && 12 / 4 === 3 || 5 + 6 === 11 && 'blue' !== 'green' || 'yes' !== 'YES');
// 7 * 3 === 21 && 12 / 4 === 3 || 5 + 6 === 11 && 'blue' !== 'green' || 'yes' !== 'YES'
// true && true || true && true || true 
// true || true || true 
// THE ANSWER IS TRUE

// ELEVENTH ONE
console.log('false' === false && 4 * 2 === 8 || 3 - 2 === 1 && 10 / 5 === 2 || 'a' !== 'A');
// 'false' === false && 4 * 2 === 8 || 3 - 2 === 1 && 10 / 5 === 2 || 'a' !== 'A'
// false && true || true && true || true 
// true || true || true 
// THE ANSWER IS TRUE

// TWELVETH ONE
console.log(6 + 6 === 12 && 'yellow' === 'yellow' || 8 !== 8 && 3 * 3 === 9 || 'hello' !== 'HELLO');
// 6 + 6 === 12 && 'yellow' === 'yellow' || 8 !== 8 && 3 * 3 === 9 || 'hello' !== 'HELLO''
// true && true || false && true || true
// true || false || true 
// THE ANSWER IS TRUE
// -------------------