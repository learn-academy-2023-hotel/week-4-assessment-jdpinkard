// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("arrayRFIShuffler", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining items", () => {
      expect(arrayRFIShuffler(colors1)).not.toEqual(["red", "yellow", "blue", "pink", "green"]);
      expect(arrayRFIShuffler(colors2)).not.toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]);
    });
});
// Good Fail: ReferenceError: arrayRFIShuffler is not defined

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

// Pseudo code:
// input: an array
// output: an array shuffled with the original first index missing
// create a simple function taking in an array as a par
// apply .shift() to the array to remove the first index
// create a variable to hold a custom comparator function to shuffle the array with .sort
// return the shuffled array

function arrayRFIShuffler (array) {
    array.shift()
    let shuffledArray = array.sort((a, b) => 0.5 - Math.random())
    // .sort() idealy would be used on strings in an array as it sorts strings alphabetically.
    // in the case of numbers, it sorts it by the first digit of the number which isn't so accurate
    // that's why here we will use an equation
    // (a,b) are representing two elements of the array
    // while 0.5 - Math.random() is an equation to determine whether a is greater, less than, or equal to b
    // since we are not using the values of a,b, but the equation to determine it
    // if Math.random() rolls lower than 0.5, it tells .sort that a should come before b
    // if Math.random() rolls higher, it tells .sort b should come before a
    // if Math.random() rolls the same... probably should enter the lottery... a and b stay in the same position
    return shuffledArray
}

// Did look up https://jestjs.io/docs/expect#expectarraycontainingarray . It worked, but I am uncertain if I performed it as intended.

// Passed


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("voteMachine", () =>{
    it("takes in an object that contains up votes and down votes and returns the end tally", () => {
        expect(voteMachine(votes1)).toEqual(11)
        expect(voteMachine(votes2)).toEqual(-31)
    })
})

// Good Fail

// Pseudo code:
// input: an object
// output: a number
// create a function taking in an object
// return the difference between the object keys' values 


const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.
function voteMachine (object) {
    return object.upVotes - object.downVotes
}

// Passed
