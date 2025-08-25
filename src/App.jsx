import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="flex flex-col min-h-screen">
      <header className="meow top-0 left-0 w-[80vw] flex flex-row h-[10vh] items-center justify-between px-12 py-4 shadow-md">
        <div className="flex items-center gap-3">
          <img src={viteLogo} className="logo w-10 h-10" alt="Vite logo" />
          <p className="text-lg font-semibold">AO3 Skin Maker</p>
        </div>

        <div className="flex gap-4">  
          <button className="px-4 py-2 bg-white rounded shadow hover:bg-gray-100">

            </button>
          <button className="px-4 py-2 bg-white rounded shadow hover:bg-gray-100">
            {"</>"} Generate CSS
          </button>
          <button className="px-4 py-2 bg-white rounded shadow hover:bg-gray-100">
            ⟳ Reset
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
