import logo from "./logo.svg";
import "./App.css";

function App() {
  // Statelesss Variable
  let title = "Learning React";
  let counter = 100;
  let list = [];

  return (
    <div>
      <h1 className="bg-dark text-light p-3">{title}</h1>

      <h1>Counter {counter}</h1>
    </div>
  );
}

export default App;
