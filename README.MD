# day_1---Namaste-React
Learnig react - Namste React

Sure! Here's a simple summary for GitHub:

---

## Namaste React - Simple React Example

This project demonstrates a basic React setup using CDN links for quick development and learning.

### HTML Structure

1. **HTML Boilerplate**: The basic structure of an HTML document.
   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Namaste React</title>
     </head>
     <body>
       <div id="root"></div>
     </body>
   </html>
   ```

2. **CDN Links for React**:
   ```html
   <script
     crossorigin
     src="https://unpkg.com/react@18/umd/react.development.js"
   ></script>
   <script
     crossorigin
     src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
   ></script>
   ```

### JavaScript for React

1. **Create a React Element**:
   ```javascript
   const heading = React.createElement("h1", {}, "hello world from React!");
   ```

2. **Render the Element**:
   ```javascript
   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(heading);
   ```

### Summary

This example shows how to:

1. Set up a basic HTML document for a React project.
2. Include React and ReactDOM via CDN links.
3. Create a simple React element (`<h1>`) with `React.createElement`.
4. Render this element into a DOM node with `ReactDOM.createRoot` and `root.render`.

This is a quick and straightforward way to get started with React for simple applications or for learning purposes.

---
