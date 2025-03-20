import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Quiz from './components/Quiz';
import Contact from './components/Contact';
import DetailPage from './components/DetailPage'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:type/:id" element={<DetailPage />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;