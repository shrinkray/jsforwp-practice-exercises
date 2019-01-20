/**
 * If Else and Else If Statements
 */

 var logged = true;

 if ( true !== logged ) {

     console.log( 'show post' );

 } else {

     console.log( 'something else' );

 }

 // Another format is the else if format

 var user = {
     role: 'subsciber', // remember to use : when assigning values in an object
     username: 'test'
 };

if ('admin' === user.role ) {
    console.log( 'Show Admin' );
} else if ( 'editor' === user.role ) {
    console.log( 'Show Editor' );
} else {
    console.log( 'Please contact Admin' );
}