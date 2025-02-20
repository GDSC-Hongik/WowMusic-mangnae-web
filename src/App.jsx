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
import KeyResultPage from './pages/KeyResultPage';
import MyPage from './pages/MyPage';
import BirthPage from './pages/BirthPage';
import BloodTypePage from './pages/BloodTypePage';
import ConstellationPage from './pages/ConstellationPage';
import FortuneResultPage from './pages/FortuneResultPage';



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
        <Route path="/kResult" element={<KeyResultPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/birth" element={<BirthPage />} />
        <Route path="/blood" element={<BloodTypePage />} />
        <Route path="/constellation" element={<ConstellationPage />} />
        <Route path="/fResult" element={<FortuneResultPage />} />
      </Routes>
      
    </Router>
  
  )
}

export default App;
