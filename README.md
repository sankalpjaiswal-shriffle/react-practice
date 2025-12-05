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

## React day2:

# React props:

1. Props is a short form of properties and it's like a function agruments to pass data from parent to child components via html attributes.
2. Props can be any type like numbers ,strings ,arrays ,objects etc.
3. Props are immutable which means it cannot be modified by the child component.
4. Props can be handle on the child component with objects as a parameters like props or we can destructure it using curly brackets {}.

# React props children:

1. Using Props children we can send the content between opening tag and closing tag from one component to another component with props.children or destructure children property.

# Conditional rendering:

-Conditional rendering is used to conditional render the components.
-There are three ways to do:

1. if statement.
2. Logical AND(&&) operator.
3. Ternary operator.

# React useState hook

-useState hook allow us to track state in a functional component.

-Steps to use useState in functional components:

1. Import useState from the react module.

```
import {useState} from 'react';
```

2. Initialize useState and it return two values:

```
const [state,setState]=useState(initialValue);
```

3. Read State:we can use the state variable.

```
<h1>{state}</h1>
```

# updating State:

-Updating the state: we can use setState updater function.Either we can create function to update the state or we can use event handler like button onClick attribute.

```
<button onClick={()=>setState("value")}></button>
```

-useState can hold any type of data like number, string, boolean, array, object or combination of data type.

# Event handling:

-Just like html DOM events, React can also perform action based on events like click, change, blur, focus etc.
-React event handlers use inside curly brackets not in strings like html.

Example1: Click event

```
<button onClick={btnHandler}>Click</button>
```

Example2: For onChange it will get the event parameter.

```
<input onchange={(event)=>handleChange(event.target.value)}>
```

# Two-way binding:

-In React two-way binding is the process where the state of the component and the input field both are synchronized in both direction which means if the state of the component is changed then it will also reflect to the input fields.

-This synchromization allows more dynamic and interactive user interface, Where the changes in the UI are reflected immediately.

# Component communication:

# Parent -> child (communication):

-In react,we can pass the data from parent components to child components via props.
-It is the simplest way to communicate between the components.

# Child -> Parent (Communication):

-As react support unidirectional data flow, we can not pass data directly from child to parent but to achieve this, we can pass a method from parent component to child component.

-Then child component execute that method to reflect and update the data to the parent component.
