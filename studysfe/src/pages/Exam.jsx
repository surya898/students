import React, { useState, useEffect } from "react";
import { getExamApi } from "../AllApis/allApis";

function Exam() {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [writtenAnswer, setWrittenAnswer] = useState("");
  const [timer, setTimer] = useState(30);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const data = await getExamApi();
        setQuizzes(data);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchQuizzes();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      handleNextQuestion();
    }
    const interval = setInterval(() => {
      setTimer((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleWrittenAnswerChange = (e) => {
    setWrittenAnswer(e.target.value);
  };

  const handleNextQuestion = () => {
    if (
      quizzes[currentQuestion].correct_answer.toLowerCase() ===
        selectedAnswer.toLowerCase() ||
      quizzes[currentQuestion].correct_answer.toLowerCase() ===
        writtenAnswer.toLowerCase()
    ) {
      setScore(score + 1);
    }

    setSelectedAnswer("");
    setWrittenAnswer("");
    setTimer(30);

    if (currentQuestion + 1 < quizzes.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🎯 Online Test</h1>

      {!showResult ? (
        quizzes.length > 0 ? (
          <div style={styles.quizBox}>
            <h2 style={styles.question}>{quizzes[currentQuestion].question}</h2>
            <p style={styles.timer}>
              ⏳ Time Left: <b>{timer}s</b>
            </p>

            <ul style={styles.optionList}>
              {[
                quizzes[currentQuestion].option1,
                quizzes[currentQuestion].option2,
                quizzes[currentQuestion].option3,
                quizzes[currentQuestion].option4,
              ].map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  style={styles.option}
                >
                  {option}
                </li>
              ))}
            </ul>

            <input
              type="text"
              placeholder="Write your answer..."
              value={writtenAnswer}
              onChange={handleWrittenAnswerChange}
              style={styles.input}
            />

            <button onClick={handleNextQuestion} style={styles.button}>
              Submit Answer ✅
            </button>
          </div>
        ) : (
          <p style={styles.loading}>Loading quizzes... ⏳</p>
        )
      ) : (
        <div style={styles.resultBox}>
          <h2 style={styles.congrats}>🎉 Congratulations! 🎉</h2>
          <p style={styles.scoreText}>
            Your Score: <b>{score} / {quizzes.length}</b>
          </p>
          <p style={styles.message}>
            {score >= quizzes.length / 2
              ? "Great job! Keep it up! 🚀"
              : "Keep practicing! You'll do better next time. 💪"}
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    color: "#333",
    marginBottom: "20px",
  },
  quizBox: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  question: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  timer: {
    color: "#d9534f",
    fontSize: "16px",
  },
  optionList: {
    listStyle: "none",
    padding: 0,
  },
  option: {
    cursor: "pointer",
    padding: "12px",
    border: "1px solid #ccc",
    margin: "5px 0",
    borderRadius: "5px",
    backgroundColor: "#f8f9fa",
    transition: "0.3s",
  },
  input: {
    padding: "10px",
    width: "90%",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    background: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "0.3s",
  },
  loading: {
    fontSize: "18px",
    color: "#777",
  },
  resultBox: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  congrats: {
    fontSize: "24px",
    color: "#28a745",
    marginBottom: "10px",
  },
  scoreText: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
  },
  message: {
    fontSize: "16px",
    color: "#555",
  },
};

export default Exam;
