import "./App.css";

function App() {
  let counter = 5;
  return (
    <>
      <h1>mscode</h1>
      <p>Counter: {counter}</p>
      <button
        onClick={() => {
          counter += 1;
          console.log("Counter Updated");
        }}
      >
        OnClick
      </button>
    </>
  );
}

export default App;