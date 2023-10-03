# React Basics

### What is React?

React is a javascript library for building user interfaces.

We know that HTML & CSS are used to build user interfaces. And Javascript is used to make the user interfaces interactive.

React makes building complex, interactive and reactive user interfaces much simpler using one core concept...

To acheive that, to make _"building complex, interactive and reactive user interfaces simpler"_, React embraces the concept called **"Components"**.

### Components

_What exactly is a Component?_

Components are the building blocks that make up the user interface. So, basically _individual parts of the UI_.

_i.e: Header, Image, Forms, Sidebar, Body, Footer, etc._.

Inside a component is just a combination of HTML & CSS for styling and JavaScript code for some logic. They are combined together into a single code called Component.

### Why Components?

##### Reusability

Having reusable building blocks help us avoid repetition. Programming in general, it is good if we don't repeat ourselves.

##### Separation of Concerns

Having a separation of concern helps us with keeping our code base small, manageable and easy to maintain instead of having one large file which holds all the HTML code. Basically, don't do too many things in one and same place (function). So, we can split big chunks of code into multiple smaller functions.

##### React Code is built In A 'Declarative Way'

In React, a declarative approach is a programming paradigm where you describe what you want to acheive, rather than explicitly specifying the step-by-step instructions/commands/logic of the code for acheiving it.

This approach is in contrast to an imperative approach, where you provide explicit instructions on how to manipulate the DOM or update the user interface in response to changes in data or user interactions.

##### Difference between Declarative Programming vs Imperative

The difference between declarative and imperative code is that imperative code focuses on writing an explicit sequence of commands to describe how you want the program to do things while declarative code focuses on specifying the result of what you want to acheive.

### The Directory Structure

We will be focusing on the ```src/``` directory at this point since all of the code we will be working on are inside this folder.

```
root
│ ├── public/
│ │   ├── index.html
│ │   ├── manifest.json
│ │   └── index.js
│ └── src/
│     ├── App.js
│     ├── index.css
│     └── index.js
│
├── .gitignore
├── package-lock.json
└── package.json
```

<details>
<summary>src/index.js</summary>

<br />

_This is the code file that is first executed whenever the landing page loads. It holds the code that executed initially. But that code inside is not exactly what you will see when delivered to the browser. But what you will see is the transformed version or the compiled code generated by React from that. The idea of this is that, we can write code in a nice way, to simplify it. Make it easy to understand. We write few lines of simple, and small snippets of code and then we have the code in the end which runs in all browsers._

```javascript
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

* ```const root = ReactDOM.createRoot()``` :  This creates the main entry point of the overall user interface you are about to build with React. That's the idea behind createRoot() hook, and what this does is it tells React where this React application (the user interface), should be placed in the web page that is loaded.
* ```document.getElementById('root')``` : This argument inside createRoot() function retrieves an HTML element with the id of 'root' from DOM. Once retrieved, react components will be set to be rendered here. This is typically a div or another DOM element in your HTML document.
* ```root.render()``` : Renders the component specified inside its argument.
* ```<App />``` : This argument inside root.render() function is the main/root component in the Component tree. This will return a JSX code that will then be rendered to the root DOM element and shown in the user interface.

</details>

<details>
<summary>public/index.html</summary>

<br />

_The ```index.html``` file inside public directory which is loaded by the browser is basically the only HTML file that is being used by overall React application. Because it's a so-called single page application, so it has a single HTML file. This is the place where the React-driven user interfaces are rendered into._

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <!-- This root div  is the entry point of all components that we created. -->
    <div id="root"></div>
  </body>
</html>
```
* ```<div id="root"></div>``` : The empty div with the id of ```root``` is the DOM element that we are going to attach/inject our React-driven user interface. Or simply, _Components_.
<br />

  If you take a look at index.js file, do you remember, there's a line ```ReactDOM.createRoot(document.getElementById('root'))```. Basically, what it does is telling React that this should be the root of our React application, the main DOM element where the React-driven user interface gets rendered into. All the interactive user interfaces that we created will be put here.
</details>

<details>
<summary>src/App.js</summary>

<br />

_The App.js file is the main component of this ReactJS application._

```javascript
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
    </div>
  );
}
export default App;
```

_And what it does is basically return that HTML elements wrapped around return() statement. See code below:_

```html
<div>
  <h2>Let's get started!</h2>
</div>
```

_This basic block of code above is called **JSX**._

</details>