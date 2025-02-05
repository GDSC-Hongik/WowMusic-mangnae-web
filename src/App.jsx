import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import FortunePage from './pages/FortunePage';
import KeywordPage from './pages/KeywordPage';
import MbtiPage from './pages/MbtiPage';
import ListPage from './pages/ListPage';


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/fortune" element={<FortunePage />} />
        <Route path="/keyword" element={<KeywordPage />} />
        <Route path="/mbti" element={<MbtiPage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
      
    </Router>
  
  )
}

export default App;
