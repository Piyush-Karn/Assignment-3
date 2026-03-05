# JavaScript Practical Assignment

This repository contains solutions for basic **JavaScript practical questions** covering:

* Primitive Data Types
* Functions
* Lambda Functions
* Arrow Functions

Each question is implemented using:

* A **JavaScript file (.js)** containing the logic
* An **HTML file (.html)** that connects and runs the JavaScript code

The project is organized into two sections.

---

## 📁 Project Structure

```
Assignment-3
│
├── Section1
│   ├── checkNumber.html
│   ├── checkNumber.js
│   ├── compareNumbers.html
│   ├── compareNumbers.js
│   ├── FirstLastName.html
│   ├── FirstLastName.js
│   ├── string length.html
│   ├── string length.js
│   ├── StringToNumber.html
│   └── StringToNumber.js
│
├── Section2
│   ├── add.html
│   ├── add.js
│   ├── convertTemperature.html
│   ├── convertTemperature.js
│   ├── even or odd.html
│   ├── even or odd.js
│   ├── multiply.html
│   ├── multiply.js
│   ├── square.html
│   └── square.js
│
└── README.md
```

---

# Section 1: Primitive Data Types

1. **String Length**
   Write a program that takes a string and prints its length.

   Example
   Input: `"JavaScript"`
   Output: `10`

2. **Check if Value is Number**
   Write a function that checks if a value is a number.

   Example

   ```
   checkNumber(25) → true
   checkNumber("25") → false
   ```

3. **String to Number Conversion**
   Write a program that converts a string `"123"` into number `123`.

4. **Compare Two Numbers**
   Write a program that compares two numbers and prints:

   * Greater
   * Smaller
   * Equal

5. **Join First and Last Name**
   Write a program that joins first name and last name.

   Example
   Input: `"Rahul", "Sharma"`
   Output: `Rahul Sharma`

---

# Section 2: Functions

1. **Function Expression – Addition**
   Write a function expression to add two numbers.
   Take multiple inputs from the user and print the result.

   Example

   ```
   add(10, 20)
   Output: 30
   ```

2. **Square of a Number**
   Write a function and an arrow function that takes user input from prompt and prints the square of a number.

   Example

   ```
   square(5)
   Output: 25
   ```

3. **Even or Odd (Lambda Function)**
   Write a lambda function that checks whether a number is even or odd.

4. **Temperature Conversion**
   Write functions to convert temperature.

   Functions:

   * `celsiusToFahrenheit()`
   * `fahrenheitToCelsius()`

5. **Convert to Arrow Function**
   Convert the following function into an arrow function:

   ```javascript
   function multiply(a, b) {
       return a * b;
   }
   ```

---

## 🚀 How to Run

1. Clone the repository
2. Open the project in **VS Code**
3. Open any `.html` file in a browser
4. Provide input when prompted and check results in the console

---

## 📚 Concepts Practiced

* JavaScript Primitive Data Types
* Functions
* Function Expressions
* Lambda Functions
* Arrow Functions
* User Input using `prompt()`
