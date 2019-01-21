/**
 * Function Declaration 
 * Sets the name and what the function will do.
 * 
 * Function Call
 * Tells the function to execute. 
 * 
 * Code won't run until it is called
 */

 // Function Declaration
 function displayPost() {
     console.log( 'Post Title' );
     console.log( 'Post Content' );
 }

 // Function Call - name of function with parentheses
 displayPost();

 // If you leave off the parentheses, it becomes a Function Reference 

 /**
  * TYPES
  * 
  * Anonymous Function
  * Named Function
  * Function Expression
  */

/**]
 * ANONYMOUS FUNCTION
 * Does not have a name to be recalled. Is usually meant to execute immediately. 
 */

 function() {
     console.log( 'Post' );
 }

 /**
  * NAMED FUNCTION
  * Assigned a name to be used when called. 
  */

function displayPost() {
    console.log('Post Title');
    console.log('Post Content');
}

// Can be called as often as we like
displayPost();
displayPost();

/**
 * FUNCTION EXPRESSION
 * Written as part of a larger JavaScript statement, like a variable assignment. 
 * 
 */

var displayPost = function () {
    console.log('Post');
}; // < = Needs a semicolon. 

displayPost; // < = This format without parenthese is preferred