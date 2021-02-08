// How code flows inside our JavaScript files can affect
// the types throughout our programs.

const users = [{ name: "Ahmed" }, { name: "Gemma" }, { name: "Jon" }];

// We're going to look to see if we can find a user named "jon".
const jon = users.find((u) => u.name === "jon");

// In the above case, 'find' could fail. In that case we
// don't have an object. This creates the type:
//
//   { name: string } | undefined
//
// If you hover your mouse over the three following uses of 'jon' below,
// you'll see how the types change depending on where the word is located:

if (jon) {
  jon;
} else {
  jon;
}

// The type '{ name: string } | undefined' uses a TypeScript
// feature called union types. A union type is a way to
// declare that an object could be one of many things.
//
// The pipe acts as the separator between different types.
// JavaScript's dynamic nature means that lots of functions
// receive and return objects of unrelated types and we need
// to be able to express which ones we might be dealing with.

// We can use this in a few ways. Let's start by looking at
// an array where the values have different types.

const identifiers = ["Hello", "World", 24, 19];

// We can use the JavaScript 'typeof x === y' syntax to
// check for the type of the first element. You can hover on
// 'randomIdentifier' below to see how it changes between
// different locations

const randomIdentifier = identifiers[0];
if (typeof randomIdentifier === "number") {
  randomIdentifier;
} else {
  randomIdentifier;
}
