/* CHALLENGE 1 */

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first? 

// Partnah
// Howdy

/* CHALLENGE 2 */

function delayedGreet() {
  // ADD CODE HERE
  console.log('Welcome')
}
// Uncomment the following line to check your work!
setTimeout(delayedGreet(), 3000); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
  // ADD CODE HERE
console.log('hello');
 setTimeout(() => {
   console.log('Good Bye')
 }, 2000);
}
// Uncomment the following line to check your work!
 helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */

function brokenRecord() {
  // ADD CODE HERE
  setInterval(() => {
    console.log('hi')
  }, 1000)
}
// Uncomment the following line to check your work!
 brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */

function limitedRepeat() {
  // ADD CODE HERE
  let r = setInterval(() => {
    console.log('Hi')
  }, 1000)

  setTimeout(() => {
    clearInterval(r)
  }, 5000)
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs(fuc, interval, duration) {
  // ADD CODE HERE
  let r = setInterval(fuc,interval*1000);
  setTimeout(() => {
    clearInterval(r)
  }, duration*1000)
}
// Uncomment the following lines to check your work!
// function theEnd() {
//   console.log('This is the end!');
// }
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
