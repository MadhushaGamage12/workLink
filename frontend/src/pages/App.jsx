import React from 'react';
import MainContent from "./Components/MainContent";

import "./pages/App.css";


function App() {
  return (
    <div className="layout-container">
      
      <Router>
        <Route>
          <Route path="/" element={<MainContent/>}></Route>
        </Route>
      </Router>
    </div>
  );
}

export default App;

