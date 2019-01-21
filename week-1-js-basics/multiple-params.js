/**
 * 
 *  MULTIPLE PARAMETERS
 *  And multiple function calls
 */

 var title = 'Post about Parameters',
    author = 'Greg',
    recommendedPost = 'Learn JavaScript';

    var displayPost = function( myTitle, myAuthor, recommendedPost ) { 
                     // the parms here 👆 can differ from var properties.
                     // changed author to myAuthor, as long as using below, it will work.

        console.log( myTitle + ' by ' + myAuthor);
        console.log( 'read next: ' + recommendedPost );
    };

    // while in the same order, these 👇 now differ from above yet it works!
    displayPost( title, author, recommendedPost ); // Params need to be called and listed in right order. Otherwise will get unexpected results


    var post = { id: 1, title: "Post about parameters" },
      author = { id: 1, displayName: "Greg" },
      relatedPosts = [ 
          "Learn Javascript", 
          "JavaScript Functions", 
          "Multiple Parameters"
        ];

        var displayTitle = function( title ) {
            console.log( '<h2>' + title + '</h2>');
        }
        var displayAuthor = function( author ) {
            console.log('<p>By: ' + author + '</p>' );
        }

        var displayRelatedPosts = function( relatedPosts ) {
            console.log( '<p>Related Posts</p>');
            console.log( '<ul>');
            
            for ( var post of relatedPosts ) {
                console.log("<li>" + post + "</li>");
            }
            console.log('</ul>');

        }

        var displayPost = function( title, author, relatedPosts ) {
            displayTitle ( title );
            displayAuthor( author );
            displayRelatedPosts( relatedPosts );
        };

        displayPost( post.title, author.displayName, relatedPosts );