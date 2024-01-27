import { useState } from "react";

function App() {
  const [color , setColor] = useState('gray')
    return (
      <>
        <div
          className="w-full h-screen flex justify-center"
          style={{ backgroundColor: color }}
        >
          <div className="p-[20px] bg-white fixed rounded-md bottom-4 min-w-[400px] flex justify-evenly items-center gap-4 m-auto">
            <button
              onClick={() => setColor("red")}
              className="bg-red-500 p-3 w-[80px] rounded-md text-[white]"
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="bg-green-500 p-3 w-[80px] rounded-md text-[white]"
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="bg-blue-500 p-3 w-[80px] rounded-md text-[white]"
            >
              Blue
            </button>
            <button
              onClick={() => setColor("orange")}
              className="bg-[orange] p-3 w-[80px] rounded-md text-[white]"
            >
              Orange
            </button>
            <button
              onClick={() => setColor("pink")}
              className="bg-[pink] p-3 w-[80px] rounded-md text-[white]"
            >
              Pink
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="bg-[yellow] p-3 w-[80px] rounded-md "
            >
              Yellow
            </button>
          </div>
        </div>
      </>
    );
}

export default App;
