import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import DishList from './components/DishList';
import DishDetails from './components/DishDetails';
import './App.css';

const App = () => (
  <>
      <nav>
          <Link to="/">Food App</Link>
          <Link to="/users">Users</Link>
          <Link to="/dishes">Dishes</Link>
      </nav>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/dishes" element={<DishList />} />
          <Route path="/dishes/:id" element={<DishDetails />} />
      </Routes>
  </>
);

export default App;
