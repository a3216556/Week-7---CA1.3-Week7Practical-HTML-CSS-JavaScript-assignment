# Week-7---CA1.3-Week7Practical-HTML-CSS-JavaScript-assignment

This project is a simple web-based calculator. It allows the user to enter two numbers and perform basic arithmetic operations such as: addition, subtraction, multiplication, and division. 

# How I Built It

1. HTML Structure
I started by creating the main structure of the page using HTML.  
I added:
- A heading for the calculator
- Two input fields for the numbers
- Four buttons for the operations (Add, Subtract, Multiply, Divide)
- A result section to display the output

This gave the calculator its basic layout.

2. CSS Styling
Next, I added CSS to style the page.  
I customised:
- The background colour
- Button colours and hover effects
- Input field styling
- The result text

My goal was to make the calculator simple, clean, and easy to read.

3. JavaScript Logic
I wrote the JavaScript functions to make the calculator work.  
Each button calls a function (add, subtract, multiply and divide) that: Gets the numbers from the input fields, converts them to actual numbers, performs the selected operation, and displays the result on the page.

4. Data Validation
I added basic input validation inside the getNumbers() function.

The calculator now checks:
- If either input is empty  
- If the input is not a valid number  
- If the user tries to divide by zero  

If the input is invalid, the result area shows "Invalid input" or "Cannot divide by zero".

This prevents errors and makes the calculator more reliable.

5. Final Steps
After finishing the each of the HTML, CSS, and JavaScript:
- I tested each operation
- I checked the validation worked (letters, symbols, empty fields, etc.)
- I committed and pushed the project to GitHub

This completes the Week 7 practical task.

# Files Included
- index.html — page structure  
- style.css — styling  
- script.js — calculator logic and validation  

# How to Use
1. Enter two numbers  
2. Click an operation button  
3. View the result below  

