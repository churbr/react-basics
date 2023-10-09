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

##### :arrows_counterclockwise: Reusability

Having reusable building blocks help us avoid repetition. Programming in general, it is good if we don't repeat ourselves.

##### :left_right_arrow: Separation of Concerns

Having a separation of concern helps us with keeping our code base small, manageable and easy to maintain instead of having one large file which holds all the HTML code. Basically, don't do too many things in one and same place (function). So, we can split big chunks of code into multiple smaller functions.

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
* ```<App />``` : This argument inside root.render() function is the main/root component in the Component tree. This will return a JSX code that will then be rendered to the root DOM element and bring onto the user's screen or the User Interface.

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

This basic block of code above is called  _JavaScript Syntax Extension_ or **JSX**.

</details>

### How React Works

To explain how React works, let's first discuss about the programming paradigm its using.

There are 2 types of programming paradigm:

1) ```Declarative approach``` : Declarative approach is a type of programming paradigm where you simply describe what you want to acheive. In this case with React, you describe how your User Interface should look. And React takes care of everything in the background like updating the DOM to match that description.

2) ```Imperative approach``` : Explicitly specifying the step-by-step instructions of the code for acheiving it. Where you provide explicit instructions on how to manipulate the DOM or update the user interface in response to changes in data or user interactions.

:clipboard: _React Code built In A 'Declarative Way'_

| Declarative | Imperative |
| ------------- | ------------- |
| <pre>function App() {&#13;&nbsp;return (&#13;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div\>&#13;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<h2\>Let's get started!\</h2\> &#13;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<p\>This is another paragraph!\</p\>&#13;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\</div\>&#13;&nbsp;);&#13;}</pre>&#13;_Using our existing JSX code, we simply put ```<p>This is another paragraph!</p>``` in the code below the H2 heading. And done! We have a simple paragraph on the screen right away. We can also transfer it anywhere within the JSX and it will update the UI base on where you put it. Its easy and straightforward._ | <pre>// Step 1: Create a new paragraph element&#13;const paragraph = document.createElement('p');&#13;&#13;// Step 2: Create text content &#13;const text = document.createTextNode('This is another paragraph!');&#13;&#13;// Step 3: Append the text to the paragraph element&#13;paragraph.appendChild(text);&#13;&#13;// Step 4: Append the paragraph element to the document body&#13;document.body.appendChild(paragraph);&#13;</pre> _In the code above, you can see there are multiple lines of regular javascript codes just to produce a simple paragraph on the screen. These lines of code works, but it can get cumbersome when complex user interfaces with dozens and hundreds of elements, which also might be changing (some codes are removed and edited) all the time. Having to write all these instructions makes it complicated. Hard to manage and prone to bugs. And would be problematic in the long run._  |