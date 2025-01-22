import React from 'react';

import MainContent from "../Components/MainContent";

import "./App.css"; // Ensure App.css is in the same folder as App.js
import "../styles/styles.css"; // Ensure styles/styles.css is in src/styles folder


function App() {
  return (
    <div className="layout-container">
      <MainContent />
    </div>
  );
}

export default App;
