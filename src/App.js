import Expenses from "./components/Expenses";

function App() {
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
