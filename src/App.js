import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/"/>
      </Routes>
    </Router>
  );
}

export default App;
