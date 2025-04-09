import { useState } from "react";
import Home from "./Components/Home";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import About from "./Components/About";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

function App() {
  return (
    <MantineProvider>
      <Router>
        <div className="min-h-screen bg-black">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </MantineProvider>
  );
}

export default App;
