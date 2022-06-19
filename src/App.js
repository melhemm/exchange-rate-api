import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route exact path="/" element={<Home/>}/>
        </Routes>
    </Router>
  );
}

export default App;
