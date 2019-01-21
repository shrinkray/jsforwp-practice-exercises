/**
 * 
 *  MULTIPLE PARAMETERS
 *  And multiple function calls
 */

 var title = 'Post about Parameters',
    author = 'Greg',
    recommendedPost = 'Learn JavaScript';

    var displayPost = function( title, author, recommendedPost ) { 
                     // the parms here ^ can differ from var properties. 

        console.log( title + ' by ' + author);
        console.log( 'read next: ' + recommendedPost );
    };

    displayPost( title, author, recommendedPost ); // Params need to be called and listed in right order. Otherwise will get unexpected results

