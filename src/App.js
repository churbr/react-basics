import React from "react";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      item: "Dolce & Gabanna (Eau De Parfum) - The One",
      date: new Date(2023, 10, 6),
      price: 138.55,
    },
    {
      item: "Lenovo Legion 5i Pro (2022)",
      date: new Date(2023, 1, 22),
      price: 2384.8,
    },
    {
      item: "The Art of War & Other Classics of Eastern Philosophy",
      date: new Date(2022, 11, 23),
      price: 24.71,
    },
  ];


  /** Parameters: 
   * 
   * 1st Argument:    HTML element string name that you want to create. i.e: div, p, section, footer, etc.
   * 2nd Argument:    The object that configures the element, or props. If there's no props, just put {} (empty object)
   * 3rd Argument:    The HTML element(s) that is contained in HTML element you provided in 1st argument (or simply, ...children).
   *                  You can have as many elements as you want to put here, there is no limit.
   *                  Note that you will use another nested React.createElement() since you are creating another element.
   *                  
   *                  In the 3rd argument, it can also be a component. Still, use React.createElement() to render the component.
   *                  You just put the component name in the 1st argument of createElement() function. And props, in 2nd argument.
   *                  
   * **/

  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, "Let's get started!"),
    React.createElement(Expenses, { expenses: expenses })
  );

  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <Expenses expenses={expenses} />
  //   </div>
  // );
}

export default App;
