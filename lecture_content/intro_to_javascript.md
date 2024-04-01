# Introduction
JavaScript is a programming language that is used to make web pages interactive.
It is a high-level, interpreted programming language that conforms to the ECMAScript specification.
JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.

Basically, JavaScript is a coding language that allows you to add interactive elements to your website.

The greatest use of JavaScript is to add interactivity to your website. JavaScript predominantly interacts with the HTML elements on the page, allowing you to manipulate them in various ways. When HTML is sent to a browser, it creates a visual object, called the Document Object Model (DOM). JavaScript can manipulate the DOM, allowing you to change the appearance and content of the page.

## The DOM
The Document Object Model (DOM) is a programming interface for web documents. It represents the html page that's rendered by browsers so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

## Variables
Variables are containers for storing data values. In JavaScript, you can declare a variable using the var, let, or const keyword, however, let and const are the preferred way to declare variables in modern JavaScript.

Variables can be named anything you like, but they must follow a few rules:
- The name must begin with a letter (a-z, A-Z) or an underscore (_).
- The name can contain letters, numbers, or the underscore character.
- The name cannot contain spaces.

## Declaring Variables
The let keyword is used to declare a variable that can be reassigned, while the const keyword is used to declare a variable that cannot be reassigned.
```javascript
// The value in the name variable can be changed
let name = "John";
// The value in the pi variable cannot be changed
const pi = 3.14;
```

## Data Types
JavaScript has many data types, including strings, numbers, booleans, arrays, and objects. These will be the most common data types you will encounter when working with JavaScript.

Strings are used for storing text.
Numbers are used for storing numbers.
Booleans are used for storing true or false values.
Arrays are used for storing collections of data.
Objects are used for storing collections of data using key descriptors and values.

Declaring strings:
```javascript
let name = "John";
```
Declaring numbers:
```javascript
let age = 30;
const pi = 3.14;
```
Declaring booleans:
```javascript
let isAdult = true;
const buildingIsTall = false;
```

## Arrays
Arrays are used for storing collections of data. They are declared using square brackets `[]` and can contain any data type, including strings, numbers, booleans, arrays, and objects.
Declaring an array:
```javascript
let fruits = ["apple", "banana", "orange"];
```

## Accessing Array Elements
You can access array elements using the index that represents the position of the value. Array indexes start at 0, so the first element in the array has an index of 0, the second element has an index of 1, and so on.
Accessing an array element:
```javascript
let fruits = ["apple", "banana", "orange"];
let firstFruit = fruits[0]; // apple
let secondFruit = fruits[1]; // banana
```

## Objects
Objects are used for storing collections of data. There are many Object types in JavaScript, but the most common is the object literal, which is declared using curly braces `{}`.
Declaring an object:
```javascript
let person = {
  "name" : "John",
  "age" : 30,
  "isAdult" : true
};
```

Here, the object person has three properties: name, age, and isAdult. Each property has a key and a value. The key is the name of the property, and the value is the data stored in the property. 

## Accessing Object Properties
You can access object properties using dot notation or bracket notation. Dot notation is the preferred way to access object properties, but bracket notation is useful when the property name is stored in a variable.
Accessing an object property:
```javascript
let person = {
  "name" : "John",
  "age" : 30,
  "isAdult" : true
};
let personName = person.name; // John
let personAge = person["age"]; // 30
```

## Back to the DOM
The DOM renders our HTML page in a way that JavaScript can interact with it. JavaScript can manipulate the DOM, allowing you to change the appearance and content of the page. This is done by selecting elements on the page and changing their properties.

We can access the document object using the `document` keyword. The document object represents the entire HTML document, and we can use it to access and manipulate the DOM.

## Selecting Elements
The best way to learn about manipulating the DOM is to select elements on the page and change their properties. You can select elements using the `document.getElementById()`, `document.getElementsByClassName()`, and `document.getElementsByTagName()` methods.

The `document.getElementById()` method selects an element by its id attribute.
```javascript
let cardListSection = document.getElementById("card-list-section");
```

The `document.getElementsByClassName()` method selects all elements that have that specific class name.
```javascript
let cardBodyList = document.getElementsByClassName("card-body");
```

Same goes for the `document.getElementsByTagName()` method, which selects all elements with that specific tag name.
```javascript
let divTags = document.getElementsByTagName("div");
```

## Changing Element Properties
Because the DOM represents the HTML page as a tree of elements, you can select elements on the page and change their properties (properties are the attributes of the elements). You can change an elements properties using the `element.property` syntax. For example, you can change the innerHTML property of an element to change the text inside it.

```javascript
let cardTitle = document.getElementById("card-title");
cardTitle.innerHTML = "New Card Title";
```

## More Element Property Changes
Some of the many properties you can change on an element include:
- innerHTML: The text inside the element.
- style: The style of the element.
- className: The class name of the element.
- src: The source of an image element.
- href: The URL of an anchor element.

## Styling Elements by adding Classes
You can change the style of an element by adding a class to it. You can add a class to an element using the `element.className` property. You can also add a class to an element using the `element.classList.add()` method.

```javascript
let cardBody = document.getElementById("card-body");
cardBody.className = "card-body bg-light";
```

```javascript
let cardBody = document.getElementById("card-body");
cardBody.classList.add("border-bottom");
```

## Conditional Statements
Conditional statements are used to perform different actions based on different conditions. JavaScript has several conditional statements, including if, else, and else if.

The if statement is used to execute a block of code if a condition is true.
```javascript
const userAge = document.getElementById("user-age").value;

if (userAge >= 18) {
  alert("You are an adult");
}
```

## Functions
Functions are blocks of code that can be reused throughout your program. You can define a function using the `function` keyword, followed by the function name and parentheses. You can call a function by using the function name followed by parentheses.

```javascript
function greet() {
  alert("Hello, World!");
}

greet();
```

## Loops
Loops are used to execute a block of code multiple times. JavaScript has several types of loops, including for, for in, for of, while, and do while. We will focus on the for of loop. The for of loop is used to iterate over the values of an iterable object, such as an array.

Say we are given an array of fruits:
```javascript
let fruits = ["apple", "banana", "orange"];
```
We can loop through the array and print each fruit to the console using the for of loop.
```javascript
for (let fruit of fruits) {
  console.log(fruit);
}
```

We can grab a list of elements from the DOM and loop through them to change their properties. For example, we can change the background color of each element in a list:
```javascript
let cardBodyList = document.getElementsByClassName("card-body");
for (let cardBody of cardBodyList) {
  cardBody.style.backgroundColor = "lightblue";
}
```