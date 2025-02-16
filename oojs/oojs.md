## An object is a data structure that allows you to store collections of data as key-value pairs.

- Keys (properties) must be strings or Symbols
- All keys get “stringified”
- Properties that don’t exist evaluate to undefined
- Values can be any valid JavaScript data type (including other objects)
- Objects are mutable - you can add, modify, or delete properties
- They're reference types - when assigned to a variable, the variable holds a reference to the object, not the object itself

## A class in JavaScript is a blueprint for creating objects that have similar properties and methods.

- Any method named constructor will be called on making a new instance
  - Validate data
  - Assign properties
- Instance methods shared by all instances
- Note that constructor functions always just return undefined
- Functions placed in a class are methods (formally, instance methods)
  - They have access to properties of object with this
  - They take arguments/return data like any other function
  - A method can call another method
- Inheritance using the extends keyword
  - super gives access to parent constructor
- JS gives us “static methods”, where the method is called on a Class, not an object — therefore it cannot have access to individual object attributes
- JS also offers “static properties”, where individual pieces of data are on the class, not on instances
