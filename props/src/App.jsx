import "./App.css";
import Card from "./Card";

function App() {
  const testingObJ = {
    name: "mscode",
    age: 20,
  };
  return (
    <>
      <h1 className="text-red-400 bg-slate-600 mb-4">Hello</h1>
      <Card name="mscode" somObj={testingObJ} />
      <Card name="msabhi" somObj={testingObJ} />
    </>
  );
}

export default App;
