# Guide for JavaScript & TypeScript (Task 2)

This guide is meant to help you understand the JavaScript and TypeScript concepts needed to complete the task using Vite. It does **not** provide code or direct solutions—focus on learning the concepts and applying them yourself.

#

## 1. Project Code Structure

Break your code into clear, logical sections. A well-structured app for this task might have:

- **Fetch Function** – Retrieves data from the API.
- **Validator Function** – Validates the user’s input.
- **Main Handler** – Coordinates validation, data fetching, and result display.
- **Event Hook** – Connects your logic to a button press.

This separation keeps your code modular and easier to debug.

#

## 2. Variables and Types

Understand how to declare and use variables.

- Use `const` for values that don’t change.
- Use `let` when the value might change.
- Avoid `var`.

In TypeScript, specify types explicitly:

- `string`: text data
- `number`: numerical data
- `boolean`: true/false
- `HTMLElement`: for working with DOM elements

Example (conceptually): `let price: number;`

#

## 3. Functions

A function is a reusable block of logic.

Key concepts:

- Define functions with clear names and purposes.
- Use parameters and return types in TypeScript.
- Keep each function focused on a single task.

Example (conceptually): a function that returns a number or shows a message.

#

## 4. Asynchronous Code and API Calls

You will use the Fetch API to get the current stock price.

Key concepts:

- `fetch()` returns a Promise (data that arrives in the future).
- Use `async`/`await` to wait for this data.
- Handle API responses and convert them into usable data formats like JSON.

Understanding how asynchronous code works is critical for real-world web development.

#

## 5. DOM Manipulation

To interact with the page, you’ll access HTML elements using:

- `document.getElementById()` or similar methods.
- Type assertions in TypeScript to access element properties safely (e.g., input values).

You’ll be reading input values and updating parts of the page dynamically.

#

## 6. Event Handling

User actions like button clicks should trigger your logic.

Key concepts:

- Use `addEventListener` to run a function when a button is clicked.
- Alternatively, use the `onclick` attribute in HTML.
- Ensure the button triggers your main logic function.

This is how you connect your TypeScript logic to your UI.

#

## 7. Input Validation

You need to make sure the user's guess is:

- A valid number
- Not negative
- Not greater than 1000
- Limited to two decimal places

Use JavaScript string/number conversion methods and possibly regular expressions to check format. Always validate before using the input in comparisons.

#

## 8. Conditional Logic and Comparisons

Once you have a valid input and the actual stock price:

- Use conditional statements (`if/else`) to compare the values.
- Decide whether the guess is correct or not.
- Display appropriate feedback.

Understand basic comparison operators (`===`, `!==`, `<`, `>`) and how to format numbers if needed.

#

## 9. Outputting Results

Avoid using `alert()` for displaying messages. Instead:

- Update content in a `<div>` or custom popup using `textContent`.
- Optionally change styles (color, visibility) to enhance user experience.
- Create an element that acts as a result box or notification area.

This introduces basic DOM manipulation and UI feedback techniques.

#

## 10. TypeScript Concepts

TypeScript adds safety to your JavaScript by enforcing types.

Learn these basics:

- Type annotations for variables and function parameters
- Specifying return types
- Type narrowing (e.g., checking if a value is not null before using it)
- Type assertions (telling TypeScript the specific type of a DOM element)

Using TypeScript properly helps prevent bugs and makes your code more reliable.

#

## 11. Clean Code Practices

- Keep your code modular (one function = one responsibility).
- Use clear and consistent naming.
- Comment sections of your code to describe their purpose.
- Avoid writing everything inside one big function.

#

## 12. Porting Your HTML & CSS into the Vite Project

If you already made a UI in plain HTML and CSS in Task 1, here's how to bring that into your Vite project:

### HTML Integration
- Open your Vite project folder.
- Go to the `index.html` file.
- Replace the content inside `<body>` with your previous HTML layout.
- Keep the root structure of Vite intact — **do not remove the `<script type="module" src="/src/main.tsx"></script>`** at the bottom.

### CSS Integration
- If your CSS is inside your HTML (`<style>` tags), move the styles into `src/styles.css`.
- If you already used a separate CSS file in Task 1, copy those styles into `src/styles.css` in the Vite project.
- Make sure your HTML tags match the class or ID names you wrote in your CSS.

This keeps styling consistent across your new setup.

#

## 13. Where to Write Your TypeScript Code

All of your TypeScript code for this task will go inside `main.tsx` (located in the `src/` folder).

Structure your logic into:

- Functions for fetching and validating
- A main function that handles click events
- DOM access and updates
- Any helper functions

Keep the code modular and clean.

#

## Summary

To complete the task, you'll need to understand:

- JavaScript and TypeScript syntax and structure
- How to fetch and handle data from an API
- How to access and validate user input
- How to structure your code cleanly and modularly
- How to display feedback on a web page
- How to move existing HTML/CSS into a Vite project
- How to use event listeners to connect logic to user actions

Take the time to understand each concept and write the logic yourself. You’re not expected to know everything right away, what matters is learning to figure it out like a developer.

For any queries, reach out to me via  **DMs**, and feel free to connect with your peers in the domain-wise group.

Good luck!

**Pranav**  
_Fullstack Development Head_
