import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';



function App() {
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      
    </Router>
  
  )
}

export default App;
