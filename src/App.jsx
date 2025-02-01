import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'
import Header from './components/Header';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';



function App() {
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      
    </Router>
  
  )
}

export default App;
