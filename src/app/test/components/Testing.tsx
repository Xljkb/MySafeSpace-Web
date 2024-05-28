"use client"
import { useRouter } from "next/navigation"
import React, { useState } from 'react';


const Test = () => {
  const questions = [
    { id: 1, question: "Вопрос 1", answers: ["Ответ 1", "Ответ 2", "Ответ 3"] },
    { id: 2, question: "Вопрос 2", answers: ["Ответ 1", "Ответ 2", "Ответ 3"] },
    // добавьте остальные вопросы аналогично
  ];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newAnswers);

    const points = [1, 0, 3][answerIndex];
    setScore(score + points - (userAnswers[currentQuestion] !== null ? [1, 0, 3][userAnswers[currentQuestion]] : 0));

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Тест завершен! Ваш результат: ${score}`);
      // router.push("/profile")
    }
  };

  return (
    <div>
      <h1>{questions[currentQuestion].question}</h1>
      {questions[currentQuestion].answers.map((answer, index) => (
        <button key={index} onClick={() => handleAnswer(index)}>{answer}</button>
      ))}
    </div>
  );
};

export default Test;
