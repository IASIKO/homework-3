import { useState, useEffect } from "react";
import "./App.css";

const generateUsers = () => {
  return [
    "name1",
    "name2",
    "name3",
    "name4",
    "name5",
    "name6",
    "name7",
    "name8",
    "name9",
    "name10",
  ];
};

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(generateUsers());
  }, []);

  useEffect(() => {
    document.title = state.length + " users left";
  }, [state]);

  const clickHandler = () => {
    const randomValue = state[Math.floor(Math.random() * state.length)];
    setState(state.filter((element) => element !== randomValue));
  };

  return (
    <>
      <ul>
        {state.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
      <button onClick={clickHandler}>HIDE</button>
    </>
  );
}

export default App;
