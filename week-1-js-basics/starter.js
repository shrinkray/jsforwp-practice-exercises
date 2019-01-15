// 1. Create a variable with your name

let me = "Greg Miller"
console.log(me);

// 2. Create a function that logs your name with console.log()

// Function Declaration
function displayName() {

    console.log(me);
}

// Function Call
displayName()

// 3. Create an object called "me" that includes properties for your first and last names as well as other properties for your website and social media

// Object declaration and properties
var thisIsMe = {
    first: 'Greg',
    last: 'Miller',
    webUrl: 'https://gregmiller.io',
    twitter: '@grmiller'
}
console.log('Hello ' + thisIsMe.last);

// 4. Create a boolean variable called loggedIn (set to either true or false)

// Assign variables for next conditional
var loggedIn = true;
    isLoggedIn = 'Logged In';
    notLoggedIn = 'Please login';

// 5. Write a conditional statement that logs "Logged In" when loggedIn is true and "Please login" when loggedIn is false

// Ternary formatted conditional
loggedIn ? console.log(isLoggedIn) : console.log(notLoggedIn);

// 6. Create an array called ids filled with numbers that could represent post ids

var id = [ 12, 23, 47, 52, 78 ];


// 7. Loop over the ids and log them all out

// This is new to me. Now using example showing this 'for in' combo
for ( var i in id ) {
    console.log(id[i]);
}

// 8. Create an array of post objects.  Include an id, title and content property on each object



// 9. Loop over the array of posts and log out the title of each one

// 10. Create a function that will take an array of posts and log out the title and content of each post.
