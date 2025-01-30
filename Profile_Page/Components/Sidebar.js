
// Sidebar.js
import React from 'react';
import '../styles/styles.css';

const Sidebar = () => (
  <aside className="sidebar">
    <h1>WorkLink</h1>
    <h2>Freelancer <br /> Dashboard</h2>
    <ul>
      <li><a href="#">Profile</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Settings</a></li>
      <li><a href="#">Logout</a></li>
    </ul>
  </aside>
);

export default Sidebar;
