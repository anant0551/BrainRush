import React, { useState, useEffect } from "react";
import Question from "./Question";
import Result from "./Result";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    // Fetch quiz data from the API
    fetch("/api/Uw5CrX")
      .then((response) => response.json())
      .then((data) => {
        console.log("Quiz Data:", data);
        // Set the questions state with the fetched data
        setQuestions(data.questions);
      })
      .catch((error) => console.error("Error fetching quiz data:", error));
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    // Check if the selected option is correct and update the score
    if (selectedOption && selectedOption.is_correct) {
      setScore(score + 1);
    }

    // Move to the next question or finish the quiz
    setSelectedOption(null);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div className="">
      {quizFinished ? (
        // Show the result when the quiz is finished
        <Result score={score} total={questions.length} />
      ) : questions.length > 0 ? (
        // Show the current question and options
        <Question
          index={currentQuestionIndex}
          question={questions[currentQuestionIndex]}
          selectedOption={selectedOption}
          onSelectOption={handleOptionSelect}
          onNext={handleNextQuestion}
          isLastQuestion={currentQuestionIndex + 1 === questions.length}
        />
      ) : (
        // Show a loading message while fetching data
        <p>Loading quiz...</p>
      )}
    </div>
  );
};

export default Quiz;