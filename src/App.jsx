import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <div className="main-content">
        <Home />
        <About />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
