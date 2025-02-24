## TDZ

### The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs with variables declared using let and const. It's the period between entering a scope (where a variable is declared) and the actual declaration being processed.

##### Key points about TDZ:

1.  Variables declared with let and const are hoisted but not initialized
2.  Accessing them before declaration results in a ReferenceError
3.  The TDZ ends when the variable is actually declared in the code

#### TDZ doesn't affect variables declared with var because they are hoisted and automatically initialized with undefined.
