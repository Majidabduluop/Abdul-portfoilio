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
import Footer from "./Components/Footer";

function App() {
  return (
    <MantineProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-x-hidden">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </MantineProvider>
  );
}

export default App;
