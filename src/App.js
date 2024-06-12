// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/header';
import HomePage from './pages/homepage';
import AircraftPage from './pages/aircraftpage';
import TanksPage from './pages/tankspage';
import VehicleDetailPage from './pages/vehicledetailpage';
import Quiz from './components/quiz';
import { aircraft } from './data/aircraft';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
`;

const App = () => {
  const quizQuestions = aircraft.map((vehicle) => ({
    question: `What is the maximum speed of ${vehicle.name}?`,
    answers: [
      { text: vehicle.specifications.speed, isCorrect: true },
      { text: '500 mph', isCorrect: false },
      { text: '1000 mph', isCorrect: false },
      { text: '2000 mph', isCorrect: false },
    ],
  }));

  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Content className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aircraft" element={<AircraftPage />} />
            <Route path="/tanks" element={<TanksPage />} />
            <Route path="/vehicle/:type/:id" element={<VehicleDetailPage />} />
            <Route path="/quiz" element={<Quiz questions={quizQuestions} />} />
          </Routes>
        </Content>
      </AppContainer>
    </Router>
  );
};

export default App;