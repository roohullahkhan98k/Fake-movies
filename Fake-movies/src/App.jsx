
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout,CommingSoon } from './Components';
import MoviesList from './Pages/MovieList/MoviesList';
import './App.css';

const App = () => {
  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Layout>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/about" element={<CommingSoon />} />
          <Route path="/services" element={<CommingSoon />} />
          <Route path="/contact" element={<CommingSoon />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
