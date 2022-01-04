// Functions within another function.
function closures()
{
    var calc = function()
    {
        var value = 100;
        return function()
        {
            return value * 2;
        }
    }

    var test = calc();

    console.log("Function = " + test);
    console.log("Evaluated function = " + test());
}
//closures();

// Immediately Invoked Function Executions (IIFE)
function iife()
{
    var personName = "Joseph";
    (function printHello1(name) {console.log("Hello, " + name);})(personName);
    (function printHello2() {console.log("Hello, " + personName);})(personName);
    console.log(personName);
};
//iife();

function printMsg(message)
{
    console.log(message);
    console.log(arguments.length);
    console.log(arguments);
}

printMsg("Hello World");
printMsg("Hello again", 1, 2, 3);

var msg = printMsg;
console.log(printMsg.name);
console.log(msg.name); // gives the name of the method it is referring to
console.log(msg.length); // Number of expected arguments

//function binding to newMsg
var newMsg = function (){
    console.log("Anonymous Method");
}
console.log(newMsg.name); 


// Timer
var interval = setInterval( function() { console.log("Not yet!!!")}, 1000 );
setTimeout( function() { clearInterval(interval)}, 10000);

// 5 second wait
setTimeout( function() { console.log("We are done!!!")}, 11000);

// parseInt()
var a = '3';
var b = 'test';
console.log( parseInt(a), parseInt(b));
var c = 'FB';
console.log(parseInt(c,16));

var d = 12.231;
console.log(d.toFixed());
console.log(d.toFixed(2));





