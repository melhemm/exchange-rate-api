import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<NotFound/>} /> 
          </Routes>
      </Router>
    </div>
    
  );
}

export default App;
