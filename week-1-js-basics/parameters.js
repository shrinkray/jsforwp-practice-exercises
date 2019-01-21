/**
 * 
 *   PARAMETERS
 *   Values or arguments passed into a function
 * 
 *   Added within parentheses -- one or more
 */

// function name( param1, param2, param3 ) { // once declareed they become variable names
//     console.log( param1 );

// }

var post = {
    id: 1,
    title: 'My Function Parameters'
};

var displayTitle = function( title ) {
    console.log( title );

}

displayTitle( post.title ); // < = Assigning the value that the parameter, 'title' should be equal to. 

/**
 *  Function Call with Different Parameters
 */

 var posts = [
     {
         id: 1,
         title: 'Function Parameters'
     },
     {
         id: 2,
         title: 'Parameters are so flexible!'
     }
 ];

 var displayTitle = function( title ) { // calls parameter 
     console.log( title );
 }

 for( var post of posts ) { // loops through posts to get the title
     displayTitle( post.title );
 }

