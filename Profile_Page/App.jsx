import React from 'react';
import Sidebar from "./Components/Sidebar";
import MainContent from './MainContent';
import './styles/styles.css';

function App() {
  return (
    <div className="layout-container">
      <Sidebar />
      <main>
        <Profile />
        <Skills />
        <Projects />
        </main>
      <Contact />
    </div>
  );
}

export default App;