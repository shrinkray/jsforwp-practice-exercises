/**
 * For In & For Of  loops
 * 
 * For In  -  Iterates through properties of an object 
 */

// Setting up the variable to be assigned the value of each object property
// And passing in the variable we want to get the properties from

// for ( var prop in obj ) {
//     console.log( prop );
//     console.log( post[prop] );
// };

var post = {
    id: 2,
    slug: 'hello-js',
    title: 'Hello JavaScript'
}

/**
 *  FOR IN LOOP
 */
// tihe var name below can be anything, and we use something that makes sense
// prop gets the name of each property

for ( var prop in post ) {

    console.log( prop + ': ' + post[prop] );
}
//               ^ See that we are getting the name of the prop 
//                                  ^ and its value
// When we are passing in a variable name INTO the property, we need to use the bracket notation

// If we were returning the value of post.slug, where it IS the property 
//                                       ^ we use this dot notation

/**
 * 'FOR IN' WITH ARRAYS
 * 
 *  While we can use this with arrays since the array is a type of object, 
 *  We use For In for objects with properties, not for arrays
 * 
 */

var postIDs = [ 1, 3, 5, 7 ];

for (var i in postIDs ) {

//    console.log( postIDs[ i ] );

}



/**
 *    'FOR OF' LOOP
 * 
 *  Best for Arrays
 *  
 *  Iterates through items in a collection, such as an array. 
 * 
 *  *** This is an ES6 level loop ***
 */

//  for ( var item of collection ) {

//     console.log( item );

//  }

 var postIds = [ 1, 3, 5, 7, 22 ];

 for ( var id of postIds ) {
     console.log( id );
     
 }