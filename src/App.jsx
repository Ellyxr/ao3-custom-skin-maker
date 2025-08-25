import { useState } from "react";
import viteLogo from "/mode_night.svg";
import AO3Logo from "./assets/ao3-logo.svg";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="flex flex-col min-h-screen">
      <header className="meow top-0 left-0 w-[80vw] flex flex-row h-[10vh] items-center justify-between px-12 py-4 shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-3">
          <img src={AO3Logo} className="logo w-10 h-10" alt="AO3 Skin Maker Logo" />
          <p className="text-lg font-semibold">AO3 Skin Maker</p>
        </div>

        <div className="flex gap-4">  
          <button className="px-4 py-2 bg-white rounded shadow hover:bg-gray-100">
            <img src={viteLogo} className="w-5 h-5 inline-block mr-2" alt="Mode icon" />
            </button>
          <button className="px-4 py-2 bg-white rounded shadow hover:bg-gray-100">
            + New Skin
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
