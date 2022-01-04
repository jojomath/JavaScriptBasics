sessionStorage.setItem('name', "Joseph");
localStorage.setItem('wifeName', 'Radhika');

console.log(sessionStorage);
console.log(localStorage);
console.log(document.getElementById("nameTag"));
console.log(location);

// location.pathname -- gives you the path of the URL you are in
// location.replace('https://www.google.com'); // redirects to google homepage
// location.reload(); reloads the page
document.body.children[0].textContent = "Hello";
document.body.children[0].style.backgroundColor = 'red';
console.log(document.body.children[0].textContent);

document.body.firstElementChild.style.backgroundColor = 'green';

// Selectors - Mediorcre
document.getElementsByClassName('someClass');
document.getElementById("someid");
document.getElementsByName("li");

// Selector querySelector
document.querySelector('li');  // Gets first element li 
document.querySelector(".someClass");    // gives the first one
document.querySelectorAll(".someClass"); // returns array of result
document.querySelector("#someId");

// DOM traversal, try it