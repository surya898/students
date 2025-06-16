import React, { useState, useEffect } from "react";
import { getQuizzesApi } from "../AllApis/allApis";

function Quizz() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const data = await getQuizzesApi();
        setQuizzes(data);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🧠 IMPORTANT KEY POINTS!</h1>
      {quizzes.length > 0 ? (
        <div style={styles.quizGrid}>
          {quizzes.map((quiz) => (
            <div key={quiz.id} style={styles.quizCard}>
              <h2 style={styles.question}>{quiz.question}</h2>
              <ul style={styles.optionList}>
                <li style={styles.option}>{quiz.option1}</li>
                <li style={styles.option}>{quiz.option2}</li>
                <li style={styles.option}>{quiz.option3}</li>
                <li style={styles.option}>{quiz.option4}</li>
              </ul>
              <p style={styles.correctAnswer}>
                ✅ <strong>Answer:</strong> {quiz.correct_answer}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p style={styles.loading}>⏳ Loading quizzes... Please wait!</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "30px",
    color: "#ff6600",
    fontWeight: "bold",
    marginBottom: "25px",
  },
  quizGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px",
  },
  quizCard: {
    backgroundColor: "#fff",
    padding: "18px",
    borderRadius: "10px",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.15)",
    cursor: "pointer",
  },
  question: {
    fontSize: "20px",
    color: "#222",
    fontWeight: "600",
    marginBottom: "12px",
  },
  optionList: {
    listStyle: "none",
    padding: 0,
  },
  option: {
    backgroundColor: "#f8f8f8",
    padding: "12px",
    margin: "6px 0",
    borderRadius: "6px",
    border: "1px solid #ddd",
  },
  correctAnswer: {
    marginTop: "15px",
    color: "#28a745",
    fontSize: "16px",
    fontWeight: "bold",
  },
  loading: {
    fontSize: "18px",
    color: "#777",
  },
};

export default Quizz;
