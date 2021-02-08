// Instead of Object, use the non-primitive object type
function reverse(s: String): String; // NO
function reverse(s: string): string; // YES

// Don’t ever have a generic type which doesn’t use its type parameter.

/* Don’t use any as a type unless you are in the process of migrating a 
JavaScript project to TypeScript. The compiler effectively treats any 
as “please turn off type checking for this thing”. It is similar to 
putting an @ts-ignore comment around every usage of the variable. 
This can be very helpful when you are first migrating a JavaScript 
project to TypeScript as you can set the type for stuff you haven’t 
migrated yet as any, but in a full TypeScript project you are disabling 
type checking for any parts of your program that use it.

In cases where you don’t know what type you want to accept, or when you 
want to accept anything because you will be blindly passing it through 
without interacting with it, you can use unknown. */

// Don’t use the return type any for callbacks whose value will be ignored:
function fn(x: () => any) {   // NO
    x();
}

// Do use the return type void for callbacks whose value will be ignored:
function fn(x: () => void) {   // YES
    x();
}

// Why: Using void is safer because it prevents you from accidentally 
// using the return value of x in an unchecked way:
function fn(x: () => void) {
    var k = x(); // oops! meant to do something else
    k.doSomething(); // error, but would be OK if the return type had been 'any'
}

