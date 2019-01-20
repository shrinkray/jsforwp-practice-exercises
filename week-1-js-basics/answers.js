// 1. Create a variable with your name
var fullName = "John Appleseed";

// 2. Create a function that logs your name with console.log()
function log(name) {
    console.log(name);
}
log(fullName);

// 3. Create an object called "me" that includes properties for your first and last names as well as other properties for your website and social media
var me = {
    firstName: "John",
    lastName: "Appleseed",
    website: "john-appleseed.com",
    socialMedia: {
        twitter: "twitter.com/johnappleseed",
        facebook: "facebook.com/johnappleseed"
    }
};

// 4. Create a boolean variable called loggedIn (set to either true or false)
var loggedIn = false;

// 5. Write a conditional statement that logs "Logged In" when loggedIn is true and "Please login" when loggedIn is false
if (loggedIn) {
    console.log("Logged In");
} else {
    console.log("Please login");
}

// 6. Create an array called ids filled with numbers that could represent post ids
var ids = [1, 2, 3, 4];

// 7. Loop over the ids and log them all out
// for loop example
for (var count = 0, max = ids.length; count < max; count++) {
    console.log(ids[count]);
}
// for of loop example
for (var id of ids) {
    console.log(id);
}

// 8. Create an array of post objects.  Include an id, title and content property on each object
var posts = [
    {
        id: 1,
        title: "My awesome post title",
        content: "And this is the content of the awesome post."
    },
    {
        id: 2,
        title: "My awesome second post title",
        content: "And this is the content of the awesome post."
    },
    {
        id: 3,
        title: "My awesome third post title",
        content: "And this is the content of the awesome post."
    }
];
// 9. Loop over the array of posts and log out the title of each one
// for loop example
for (var count = 0, max = posts.length; count < max; count++) {
    console.log(posts[count].title);
}

// for of loop example
for (var post of posts) {
    console.log(post.title);
}

// 10. Create a function that will take an array of posts and log out the title and content of each post.
// for loop example
function logPosts(posts) {
    for (var count = 0, max = posts.length; count < max; count++) {
        var post = posts[count];
        console.log(post.title);
        console.log(post.content);
    }
}
logPosts(posts);
// for of loop example
function logPostsExample2(posts) {
    for (var post of posts) {
        console.log(post.title);
        console.log(post.content);
    }
}
logPostsExample2(posts);