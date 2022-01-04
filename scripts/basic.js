// Commented out, not needed 
// console.log("Hello directly from console.log");
// alert("Just a stupid alert");
/*
function nameOfFunc( params )
{
    // do something
}
*/
function sayHello( name )
{
    var hello = "Hello " + name + " !!!"
    console.log( "Hello: " + name + " from sayHello()" );
    document.getElementById( "nameTag" ).innerHTML = hello;
}

function printAge( age )
{
    var ageStr = "Your age is " + age + " !!!"
    console.log( "Age printed: " + age + " from printAge()" );
    document.getElementById( "ageTag" ).innerHTML = ageStr;
}

function sayHelloToPerson( person )
{
    console.log( "Name printed: " + person.personName + " from sayHelloToPerson()" );
    console.log( "Age printed: " + person.personAge + " from sayHelloToPerson()" );
    document.getElementById( "personTag" ).innerHTML = "{ Name: " + person.personName + ", Age: " + person.personAge + " }";
}

// prompting user for input
// var userName = prompt('What is your name?');
// var age = prompt('What is your age?');

// using user input to update dom element
// sayHello( userName );
// printAge( age );

// creating object using user input
// let person = { personName: userName, personAge: age };
// sayHelloToPerson( person);
// console.log(person.ageStr);


// String Operations
let fruit = "Banana";

console.log( fruit.length );
console.log( fruit.indexOf( 'nan' ) );
console.log( fruit.slice( 2, 5 ) );
console.log( fruit.replace('nana', 'papa'));
console.log( fruit.toUpperCase() );
console.log( fruit.toLowerCase() );
console.log( fruit.split( '' ) );


// Arrays
let temp1 = ["a", "b", "c"];
let temp2 = new Array('a', 'b', 'c');

console.log( "temp1 = " + temp1 );
console.log( "temp2 = " +temp2 );

// temp2[0] = 123;
// console.log( "temp2 = " +temp2 );

// Push / pop adds and removes element from the end of the list.
temp1.push('d'),
console.log( temp1);
console.log( temp1.pop())
console.log( temp1 );

// Shift/ unshift removes and adds element to the start of the list.
temp1.unshift('z'),
console.log( temp1);
console.log( temp1.shift())
console.log( temp1 );

temp3 = temp1.concat(temp2);
console.log(temp3);
console.log(temp3.slice(2,4));
console.log(temp3.reverse());
console.log(temp3.sort());

let someNums = [ 1, 0, 34, 32, 45, 43, 56, 43, 67, 54, 78, 89, 87, 10, 100, 1 ];
console.log( someNums.sort() );
console.log( "Sorted: ");
console.log( someNums.sort( function( a, b ) { return a-b; } ) );
console.log( "Reverse order: ");
console.log( someNums.sort( function( a, b ) { return b-a; } ) );

// Splice method will slice the array and modify old array
// array.splice( start index, how many elements)
// Slice works like slicing in python

let arr1 = ["hello", "world"];
let arr2 = ["hello2", "world2"];
console.log("New array");
console.log(arr1.join( ": "));
console.log(arr1.concat( arr2 ));


let someNum = [ 1, 0, 1, 0, 1 ];
console.log(someNum.reduce(
    function(total, value)
    {
        return  (10* total + value);
    }
 ));
/*
someNums.forEach(element => {
   console.log(element * 2); 
});
*/

console.log(someNums.filter(function(element) { return element > 20;}))
console.log(someNums.map(function(element) { return element *20;}))
console.log(someNums.reverse());

// Objects in JS == Dictionaries in python
let student = 
{ 
    firstName: "Joseph", 
    lastName: "Mathw",
    studentInfo: function() {
        return "Student info: [ " + this.lastName + ", " + this.firstName + " ]";
    } 
};
console.log( student );
console.log( student.firstName );
console.log( student.lastName );
console.log( student["lastName"] );
student["lastName"] = "Mathew";
console.log( student.studentInfo() );

let age = prompt( "What is your age?" );
console.log("Entered age is: " + age );


// JSON
let stu = `[
    {
        "name": "Joseph",
        "age": 50,
        "masters": "C.Sc."
    },
    {
        "name": "Radhika",
        "age": 45,
        "masters": "Data Science and Analytics"
    }
]`
console.log(JSON.parse(stu));