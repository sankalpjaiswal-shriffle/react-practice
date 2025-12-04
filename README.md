### React syllabus

## React Day-1 topic

# Intro to react & SPA concept

React is a javascript library that allow us to build user interface using class-based & functional components.Class-based components is a traditional way to create react project that uses componentDidMount,componentDidUpdate and componentDidUnmount methods but in modern react we use functional components that uses react hook to manage states and lifecycle features of the applications.

# Feature of react:

1. Components based: User interface is break down into resuable components that there own state and props using react hooks.

2. Virtual DOM: Virtual DOM is a light-weight copy of the actual dom to update only the necessary things in the real dom.

3. Unidirectional data flow: In react, the data flows from parent to child components through prop drilling.

4. JSX: JSX stands for Javascript and XMl that allow us to write html like syntax inside javascript function and jsx is not an html so it's gets compiled into JS.JSX improve readability and simplify the user interface.

5. Reactivity: React automatically updates the UI whenever the states or props is changed that triggers re-render.

6. Reconiliation: It compares the new virtual dom with it's previous version using diffing algorithm to update only the necessary elements in the actual dom for efficient rendering.

# SPA(Single Page Applications):

SPA is a type of web applications that loads and manage updates dynamically. It download the file (like html,css,javascript) on the client side during initial load. Unlike traditional way where the application loads the page from the server on user actions.

# Advantages:

1. Dynamic interactions: SPA create an enviroment that allow to user to interact and manage updates dynamic without a full page reload.

2. Minimized server load: SPA minimize load on the server based on frequent user interaction on server like API call etc.

# Create React project using Vite:

Vite is a modern build tool to enhance the development experience and provide built tools for the production applications.

```
npm create vite@latest react-app-name
cd react-app-name
npm install //install dependency
npm run dev //to run react app
```

# React version:19.2.0

# Folder Structure

- node_modules //dependency for the projects.
  public // static assets for the projects like favion.ico.
  src // Contains all the source code.
  src/assets //store static media like images,logo.
  src/components // Define the UI components for the app.
  src/App.jsx //where we import all the components.
  src/main.jsx //Entry component that render the app components.
  src/App.css //Define styles for the app.jsx
  src/index.css //Define the styles at the root level.
  .gitignore //Git uses to ignore the file on the github
  eslint.config.js  
  index.html //Define a snapshot for the dependency and dev dependency with the exact version.It uses version-locking that allow us to run project seamless across different system.
  package-lock.json //
  package.json //Define project metadata,scripts,dependency and dev dependency.
  README.md //Document the project.
  vite.config.js //vite configuration.

  # JSX basics:

  1.JSX stands for Javascript and XMl that allow us to write html like syntax inside javascript function.
  2.JSX is not an html so it's gets compiled into JS.
  3.JSX improve readability and simplify the user interface.

# Functional components

1. Functional components that uses simple javascript function that accept input through props and return jsx from the components.
2. Functional components use react hooks to manage state and lifecycle features.

# List rending in UI using:

To display the list in the ui we use the javascipt methods like map(),filter().

1. map() method: It return a new array by iterating the elements over an array.
2. filter() : It return a new array that pass the given condition on the existing array.

# Keys in lists:

1. Keys helps react to uniquely identify the list
2. It also identify which list are created,updated and deleted.
