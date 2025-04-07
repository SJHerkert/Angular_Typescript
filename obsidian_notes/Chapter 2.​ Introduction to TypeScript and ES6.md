==2_Introduction to TypeScript and ES6==

"In this chapter, we will touch on the bases of TypeScript: data types, let and const, functions, arrow functions, classes, and interfaces. Although not extensive, this guide is complete enough to understand every bit of code we will be building and to understand pieces of code from other sources when you need to look for something later on your journey as a developer."  -Victor Hugo Garcia

---
*Start date: 6.3.2025*

Getting Started -*done*
let and const
	-First File
Data Types -*done*
	-Boolean
	-Number
	-Array
	-Any
Template Strings -*done*
	-Manipulating Strings
Functions -*done*
	-Arrow Functions
Destructuring Objects and Arrays -*done*
Interfaces -*done*
Classes -*done*
	-Abstract Classes
	-Classes and Interfaces
Promises -*done*
Decorators -*done*

---

Focus is on going through typescript syntax.

When having multiple folders in the same 'project' if i want to access the tsc commands I have to open the specific folder in the terminal. Otherwise it will not find the file and will produce error. Also the execution policies must be made again for the specific terminal in use.

Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned

When creating with tsc '' -init a new tsconfig.js file the following is found in the file
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
[ES5, ES6, ES2016, ES.Next: What's going on with JavaScript versioning? - Herding Lions](https://benmccormick.org/2015/09/13/221134.html)

Creating the tsconfig.js file is used in case i have many .ts files. It would be not be good to compile them all separately to javascript in terminal. If we create the universal compiler file, we can just us tsc -w in the folder and it will compile all the ts files. 

compile: npx tsc -w

even though i can explicitly define a type for a value, like number. In ts it shows the error, but i can still compile it to jscript and there is no errors? as in when compiled, its possible.

Classes use methods. To access a private class, you must first use special methods called accessors. Create the methods, and then you can use the instantiated class, that is an object, and methods inside the class.
As in get, set.

Class inheritance is class X extends Y{
constructor(){
super()
}
}
Classes have constructors
Classes have methods
Classes can be public(no setting) private or protected, and abstract

We do not use var in our solutions.

---

Summary
"This chapter may have been a bit extensive, but I hope it was entertaining and useful. We have seen the bases of TypeScript: data types, let and const, functions, arrow functions, classes, and interfaces. Although to be honest we have only touched the surface, what we have seen is more than enough to develop the applications of the book." -Victor Hugo Garcia



