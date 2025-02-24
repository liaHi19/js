## Lexical scope (also known as static scope) is where the accessibility of variables is determined by their location within the source code at the time of writing (during lexing phase) - not where functions are called from.

#### Key characteristics:

1. Inner scopes can access outer scopes
2. Outer scopes cannot access inner scopes
3. Sibling scopes cannot access each other
4. The scope is fixed at write-time, not run-time

#### The lexical scope is particularly important because:

1. It makes code more predictable
2. Enables closure mechanisms
3. Helps with encapsulation
4. Makes debugging easier as variable scope is clear from the code structure

## Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their respective scopes during the compilation phase, before the code is executed.

#### Key points about hoisting:

1. Function declarations:

- Fully hoisted with their body
- Can be called before declaration

2. var variables:

- Declaration is hoisted
- Initialized as undefined
- Assignment stays in place

3. let and const:

- Declarations are hoisted
- Not initialized (enter TDZ)
- Cannot be accessed before declaration

4. Function expressions aren't hoisted

## TDZ

### The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs with variables declared using let and const. It's the period between entering a scope (where a variable is declared) and the actual declaration being processed.

#### Key points about TDZ:

1.  Variables declared with let and const are hoisted but not initialized
2.  Accessing them before declaration results in a ReferenceError
3.  The TDZ ends when the variable is actually declared in the code

#### TDZ doesn't affect variables declared with var because they are hoisted and automatically initialized with undefined.

## An IIFE (Immediately Invoked Function Expression) is a JavaScript pattern where a function is defined and executed immediately after creation.

#### Key points for using IIFE:

1. Data privacy / encapsulation
2. Avoiding global scope pollution
3. Creating module patterns
4. Capturing variable values at execution time
5. Executing code once without creating reusable functions

## A closure is a function that remembers and can access its lexical scope (the variables defined in its parent function) even when that function has finished executing.

#### Key characteristics of closures:

1. They "close over" variables from their containing scope
2. They maintain access to these variables even after the outer function has returned
3. Each closure has its own separate lexical environment

#### Common practical uses:

- Creating private variables and encapsulation
- Maintaining state in event handlers
- Implementing callbacks and higher-order functions
- Factory functions (creating objects with private data)
