import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />

        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
