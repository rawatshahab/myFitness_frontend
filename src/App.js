import React from 'react';
import { Route , Routes } from 'react-router-dom'; //it will route between home page and exercise-details
import { Box } from '@mui/material'; //div with some shading and colour

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BmiCalculator from './pages/BmiCalculator';
import ChatBotLogic from './pages/chatgpt';

// require('dotenv').config();
const App = () => {
  return (
    <Box width="400px" sx={{ width : {x1: '1488px'}}} m="auto"> 
    <Navbar />
    <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/BmiCalculator" element={<BmiCalculator />} />
        <Route path="/Chatgpt" element={<ChatBotLogic />} />
       
    </Routes>
    <Footer />
     </Box>
  )
}

export default App