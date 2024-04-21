import { useCallback, useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
const App = () => {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [passWord, setPassword] = useState("");
  const [cpIcon, setCpIcon] = useState();
  const passwordRef = useRef(null);

  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefijklmnopqrstuvwxyz";
    if (numAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*(){}[]~`+=-";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, charAllowed, numAllowed, setPassword]);

  useEffect(() => {
    passwordGenrator();
  }, [length, numAllowed, charAllowed, passwordGenrator]);

  // const changinIcon = () => {
  //   <FaCheck />;
  // };
  const copytoCB = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(passWord);

    setCpIcon(<FaCheck />);
    setTimeout(() => {
      setCpIcon(null);
    }, 1000);
  };

  return (
    <>
      <div className="text-orange-400  w-96 max-w-auto mx-auto shadow-md rounded-xl px-4 py-2 my-8 text-center bg-gray-700">
        <h1 className="text-white text-center my-2">Password Genrator</h1>
        <div className="flex shadow  rounded-xl overflow-hidden mb-4">
          <input
            type="text"
            value={passWord}
            placeholder="Password"
            className="outline-none w-full py-1 px-3"
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-blue-600 hover:bg-blue-500 outline-none text-white px-3 py-1 shrink-0"
            onClick={copytoCB}
          >
            {cpIcon ? <FaCheck /> : "Copy"}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Char</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
