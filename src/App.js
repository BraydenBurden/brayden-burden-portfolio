import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import Resume from "./components/Resume";
import MyWork from "./components/MyWork";

function App() {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const sections = ["home", "about", "contact"];

    const sectionRefs = sections.reduce((acc, section) => {
      acc[section] = document.getElementById(section);
      return acc;
    }, {});

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs).forEach((sectionElement) => {
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let timeout;
    if (currentSection) {
      timeout = setTimeout(() => {
        const sectionElement = document.getElementById(currentSection);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Delay action by 150ms to avoid trailing scroll
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [currentSection]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Contact />
            </>
          }
        />
        <Route path="/resume" element={<Resume />} />
        <Route path="/myWork" element={<MyWork />} />
      </Routes>
    </Router>
  );
}

export default App;
