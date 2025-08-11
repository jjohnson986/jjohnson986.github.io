import { useState } from "react";
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
      <div className="main-content">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
