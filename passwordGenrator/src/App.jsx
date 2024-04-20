import { useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [passWord, setPassword] = useState("");
  return (
    <>
      <div className="text-white text-3xl text-center flex justify-center h-screen items-center">
        <h3>Heelo</h3>
      </div>
    </>
  );
};

export default App;
