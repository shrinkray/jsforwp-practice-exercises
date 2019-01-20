/**
 * Break & Continue Statements
 * 
 * Beak allows to exit
 * In a switch statement, break confirms the condtion has been met and forces out of conditional
 * 
 * Continue to stay in
 * 
 */

// Switch example

switch ( 'user.role' ) {
    case 'admin':
        console.log( 'Show Admin');
        break;
    case 'editor': 
        console.log( 'Show all posts' );
        break;

        // ... 

    default: 
      console.log( 'Contact Admin' );

    
}

// Loops

var categories = [ 'Javascript', 'WordPress', 'API', 'React', 'JSON' ],
    max = categories.length;

    for ( var i = 0; i < max; i++ ) {
        if ( 'API' === categories[i] ) break; // exits out of loop when condition met
            
        console.log( categories[i] ); // placing this before condtion will print what we are looking for. 

    }

var categories = ['Javascript', 'WordPress', 'API', 'React', 'JSON'],
    max = categories.length;

for (var i = 0; i < max; i++) {
    console.log(categories[i]);

    // TODO: I don't have a clear understanding of this one
    if ('API' === categories[i]) continue; // continues when condition met

}
