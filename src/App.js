import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/Homepage';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
    
      <Header />
    
      <Route path="/" excat>
      <HomePage />
      </Route>
    </div>
    </Router>
  );
}

export default App;
