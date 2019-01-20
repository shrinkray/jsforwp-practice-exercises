
// The Do while Loop
/**
 * The Do While Loop
 * 
 * This runs first one time then returns again while the condition is true. 
 * In the while condition, if the value returns false, then the loop stops after first run. 
 * 
 * Example might be a popup
 */

var postIds = [ 1,2,3,4,5,6 ],
    i = 0,
    max = postIds.length;

    do {
        console.log( postIds[i] );
        ++i;                            // works the same if ++i or i++ 
    } while ( i < max );                // for example, test if i === max


/**
 * Example 
 * 
 * I'm unsuccessful at getting this to run
 */

//  var signedUp = false,
//     askAgain = true;

//     do {

//         // wait some time
//         signUp = alert.confirm( 'Sign Up!' );

//     } while ( false === signUp && true === askAgain );

/**
 * While Loop
 * 
 * "while you have posts to display, do this thing"
 * 
 * In this I experimented adding a counting iterator to prefix the printed text
 */

 var postsToDisplay = 10,
 i  = 1;

 while ( postsToDisplay > 0 ) {

    console.log( i++ + ': Display post' );

    postsToDisplay--; 

 }
