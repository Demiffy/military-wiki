// src/components/Quiz.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { aircraft } from '../data/aircraft';
import { tanks } from '../data/tanks';

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 2rem auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  margin: 0.5rem 0;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Question = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const AnswerButton = styled(Button)`
  margin: 0.5rem 0;
`;

const Result = styled.div`
  font-size: 1.2rem;
  color: #333;
  margin-top: 2rem;
`;

const Quiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [category, setCategory] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const aircraftQuestions = aircraft.map((vehicle) => ({
    question: `What is the maximum speed of ${vehicle.name}?`,
    answers: [
      { text: vehicle.specifications.speed, isCorrect: true },
      { text: '500 mph', isCorrect: false },
      { text: '1000 mph', isCorrect: false },
      { text: '2000 mph', isCorrect: false },
    ],
  }));

  const tanksQuestions = tanks.map((vehicle) => ({
    question: `What is the maximum speed of ${vehicle.name}?`,
    answers: [
      { text: vehicle.specifications.speed, isCorrect: true },
      { text: '25 mph', isCorrect: false },
      { text: '35 mph', isCorrect: false },
      { text: '55 mph', isCorrect: false },
    ],
  }));

  const handleStartQuiz = (category) => {
    setCategory(category);
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    setCurrentQuestion(currentQuestion + 1);
  };

  const questions = category === 'aircraft' ? aircraftQuestions : tanksQuestions;

  if (!quizStarted) {
    return (
      <QuizContainer>
        <Title>Start the Quiz</Title>
        <Button onClick={() => handleStartQuiz('aircraft')}>Aircraft</Button>
        <Button onClick={() => handleStartQuiz('tanks')}>Tanks</Button>
      </QuizContainer>
    );
  }

  if (currentQuestion >= questions.length) {
    return <Result>Your score: {score}/{questions.length}</Result>;
  }

  return (
    <QuizContainer>
      <Question>{questions[currentQuestion].question}</Question>
      {questions[currentQuestion].answers.map((answer, index) => (
        <AnswerButton key={index} onClick={() => handleAnswer(answer.isCorrect)}>
          {answer.text}
        </AnswerButton>
      ))}
    </QuizContainer>
  );
};

export default Quiz;
