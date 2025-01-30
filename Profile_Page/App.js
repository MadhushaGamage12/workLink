import React from "react";
import Sidebar from "./Components/Sidebar";
import Profile from "./Components/Profile";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import './styles/styles.css';



const App = () => (
  <div style={{ display: 'flex' }}>
    <Sidebar />
    <main>
      <Profile />
      <Skills />
      <Projects />
      
    </main>
    <Contact />
  </div>
);

export default App;

