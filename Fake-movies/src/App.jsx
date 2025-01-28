
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout,CommingSoon } from './Components';
import { Home } from './Pages/Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<CommingSoon />} />
          <Route path="/services" element={<CommingSoon />} />
          <Route path="/contact" element={<CommingSoon />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
