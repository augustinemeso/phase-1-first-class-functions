// Function that receives a function as an argument and calls it
function receivesAFunction(callback) {
    callback();
}

// Function that returns a named function
function returnsANamedFunction() {
    function namedFunction() {
        console.log("I am a named function");
    }
    return namedFunction;
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
        console.log("I am an anonymous function");
    };
}

// Example usage to verify the functions
receivesAFunction(() => console.log("Callback function called!")); // Should log: "Callback function called!"

const namedFunc = returnsANamedFunction();
namedFunc(); // Should log: "I am a named function"

const anonymousFunc = returnsAnAnonymousFunction();
anonymousFunc(); // Should log: "I am an anonymous function"
