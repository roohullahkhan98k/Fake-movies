import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header,Footer,CommingSoon } from "./Components";
import { Home } from "./Pages/Home";
import './App.css'


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<CommingSoon />} />
        <Route path="/services" element={<CommingSoon />} />
        <Route path="/contact" element={<CommingSoon />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
