var today = new Date();
console.log(today.toString());
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay()); // Day of the week
var lastYear = new Date(2020,10,7);
console.log(lastYear.toString());
lastYear = new Date("2020/11/7");
console.log(lastYear.toString());
console.log(Date.parse("2020/11/7"));

// Regular Expressions
var str = 'abcabcabc';

var pattern = /ab/;
console.log(pattern.exec(str) );
console.log(pattern.test(str) );
console.log(str.match(pattern) );