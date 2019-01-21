/**
 * FUNCTION CALLS INSIDE A FUNCTION
 *  This is the DRY method, breaking down bits of code into self-enclosed components
 *  Bits of code called in places
 */

 var displayTitle = function() {
     console.log( 'Functions' );
 };

 var displayExcerpt = function() {
     console.log( 'Read More ...' );
 };

 var displayPost = function() {
     displayTitle();
     displayExcerpt();

 };

 displayPost(); 

 // Function call must happen after Function Declaration. 