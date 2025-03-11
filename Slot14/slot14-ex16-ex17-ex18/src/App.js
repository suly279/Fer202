import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EventHandlingDemo from './components/Ex16';
import RenderAndCommitDemo from './components/Ex17';
import SnapshotDemo from './components/Ex18';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Event Handling</Link></li>
            <li><Link to="/render-commit">Render and Commit</Link></li>
            <li><Link to="/snapshot">Snapshot Demo</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<EventHandlingDemo />} />
          <Route path="/render-commit" element={<RenderAndCommitDemo />} />
          <Route path="/snapshot" element={<SnapshotDemo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
