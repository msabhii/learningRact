import { useState } from "react";

function App() {
  const [color, setColor] = useState("skyblue");

  return (
    <div
      className="w-full h-screen  duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap gap-2 shadow-lg bg-slate-300 rounded-lg p-2 text-white">
          <button
            className="p-4 m-2 rounded-xl bg-red-500"
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className="p-4 m-2 rounded-xl bg-green-500"
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="p-4 m-2 rounded-xl bg-blue-500"
          >
            Blue
          </button>
          <button
            onClick={() => {
              setColor("olive");
            }}
            className="p-4 m-2 rounded-xl bg-green-700"
          >
            Olive
          </button>
          <button
            onClick={() => {
              setColor("gray");
            }}
            className="p-4 m-2 rounded-xl bg-gray-500"
          >
            Gray
          </button>
          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="p-4 m-2 rounded-xl bg-yellow-500"
          >
            Yellow
          </button>
          <button
            onClick={() => {
              setColor("pink");
            }}
            className="p-4 m-2 rounded-xl bg-pink-500"
          >
            Pink
          </button>
          <button
            onClick={() => {
              setColor("purple");
            }}
            className="p-4 m-2 rounded-xl bg-purple-500"
          >
            Purple
          </button>
          <button
            onClick={() => {
              setColor("white");
            }}
            className="p-4 m-2 rounded-xl bg-white text-black"
          >
            White
          </button>
          <button
            onClick={() => {
              setColor("black");
            }}
            className="p-4 m-2 rounded-xl bg-black"
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
