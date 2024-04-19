import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);

  return (
    <>
      <h1>mscode</h1>
      <p>Counter: {counter}</p>
      <button
        onClick={() => {
          if (counter < 20) {
            setCounter(counter + 1);
            console.log("Counter Updated");
          }
          console.log("Greater than 20");
        }}
      >
        OnClick
      </button>
    </>
  );
}

export default App;
