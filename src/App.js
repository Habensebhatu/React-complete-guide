import "./App.css";
import Expenses from "./components/Expenses";

const expense = [
  {
    title: "haben",
    amount: 123.2,
    date: new Date(2023, 2, 16),
  },
  {
    title: "Maki",
    amount: 123.2,
    date: new Date(2023, 2, 16),
  },
  {
    title: "abi",
    amount: 123.2,
    date: new Date(2023, 2, 16),
  },
];

function App() {
  return (
    <>
      <h5>It is my first React lesson !</h5>
      <Expenses expense={expense}></Expenses>
     
    </>
  );
}

export default App;
