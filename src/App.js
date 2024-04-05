import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Project from "./components/Project/Project";
import Qualification from "./components/Qualification/Qualification";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Project />
        <Qualification />
        <Contact />
      </main>
    </div>
  );
};

export default App;
