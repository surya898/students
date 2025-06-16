import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getCsVideoTutorialsApi } from "../AllApis/allApis";
import axios from "axios";
import { FaBook, FaPlayCircle } from "react-icons/fa";  
import Carousel from 'react-bootstrap/Carousel';  

function Cs() {
  const [videos, setVideos] = useState([]);
  const [studyNotes, setStudyNotes] = useState([]);
  const [practiceQuestions, setPracticeQuestions] = useState([]);
  const [showAnswers, setShowAnswers] = useState({});

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await getCsVideoTutorialsApi();
        setVideos(response.data);
      } catch (error) {
        console.error("Error fetching video tutorials:", error);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    const fetchStudyNotes = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/csstudy_notes/");
        setStudyNotes(response.data);
      } catch (error) {
        console.error("Error fetching study notes:", error);
      }
    };

    fetchStudyNotes();
  }, []);

  const practiceQuestionsData = [
    {
        question: "What does CPU stand for?",
        answer: "Central Processing Unit",
      },
      {
        question: "What is the primary function of the operating system?",
        answer: "Manages hardware and software resources and provides a user interface",
      },
      {
        question: "Which programming language is known as the mother of all languages?",
        answer: "Assembly Language",
      },
      {
        question: "What is an IP address?",
        answer: "A unique address assigned to devices connected to a network for communication",
      },
      {
        question: "What is the full form of 'HTML'?",
        answer: "HyperText Markup Language",
      },
      {
        question: "Which device is used to display the output of a computer?",
        answer: "Monitor",
      }
  ];

  const toggleAnswer = (index) => {
    setShowAnswers((prevAnswers) => ({
      ...prevAnswers,
      [index]: !prevAnswers[index],
    }));
  };

  return (
    <div className="container" style={{ background: "#f0f8ff", padding: "20px", borderRadius: "10px" }}>
      
      <Carousel>
        <Carousel.Item>
          <img 
            className="d-block w-100" 
            src="https://d3sujgifhk94se.cloudfront.net/wp-content/uploads/2022/11/21155836/computer_basics_for_kids.jpg" 
            alt="First slide" 
          />
        </Carousel.Item>
      </Carousel>

      <h1 className="my-4 text-center fw-bolder text-success">Computer Subject</h1>

      <div style={{ backgroundColor: "#f9f9f9", padding: "30px", borderRadius: "15px", boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", marginBottom: "30px" }}>
        <h2 className="my-4 text-center" style={{ color: "black" }}>
          Video Tutorials <FaPlayCircle style={{ fontSize: "30px", color: "#ff6347" }} />
        </h2>

        <hr style={{ border: "1px solid rgb(7, 6, 6)", width: "50%", margin: "0 auto" }} />

        {videos.length > 0 ? (
          <div className="row justify-content-evenly">
            {videos.map((item) => (
              <Card style={{ width: "22rem", marginTop: "20px", borderRadius: "15px", boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }} key={item.id}>
                <Card.Body>
                  <Card.Title style={{ color: "black", fontSize: "1.2rem", textAlign: "center" }}>
                    <FaPlayCircle style={{ fontSize: "30px", color: "#ff6347", marginRight: "10px" }} />
                    {item.title}
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center", color: "black" }}>
                    <h4>{item.subject_name}</h4>
                    <h6>
                      Video URL:{" "}
                      <a href={item.video_url} target="_blank" rel="noopener noreferrer" className="text-primary">
                        {item.video_url}
                      </a>
                    </h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        ) : (
          <h3 className="text-center mt-4 text-danger">No videos available!</h3>
        )}
      </div>

      <div style={{ backgroundColor: "#f9f9f9", padding: "30px", borderRadius: "15px", boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", marginBottom: "30px" }}>
        <h2 className="my-4 text-center" style={{ color: "black" }}>
          Study Notes <FaBook style={{ fontSize: "30px", color: "#ff6347" }} />
        </h2>

        <hr style={{ border: "1px solid rgb(7, 6, 6)", width: "50%", margin: "0 auto" }} />

        <div className="row justify-content-evenly">
          {studyNotes.length > 0 ? (
            studyNotes.map((note) => (
              <Card style={{ width: "19rem", marginTop: "10px", borderRadius: "15px", boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }} key={note.id}>
                <Card.Body>
                  <Card.Title style={{ color: "black", fontSize: "1.2rem" }}>{note.title}</Card.Title>
                  <Card.Text style={{ color: "black" }}>
                    <h5>{note.subject_name}</h5>
                    <p>{note.description}</p>
                    <a href={note.file} target="_blank" rel="noopener noreferrer" className="btn btn-success" style={{ borderRadius: "10px" }}>
                      Download Study Note
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
          ) : (
            <h3 className="text-center mt-4 text-danger">No study notes available!</h3>
          )}
        </div>
      </div>

      <div style={{ backgroundColor: "#f9f9f9", padding: "30px", borderRadius: "15px", boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", marginBottom: "30px" }}>
        <h2 className="my-4 text-center" style={{ color: "black" }}>Practice Session</h2>

        <hr style={{ border: "1px solid rgb(7, 6, 6)", width: "50%", margin: "0 auto" }} />

        <div>
          {practiceQuestionsData.map((item, index) => (
            <Card key={index} style={{ marginTop: "10px", borderRadius: "15px", boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", marginBottom: "20px" }}>
              <Card.Body>
                <Card.Title style={{ color: "black" }}>{item.question}</Card.Title>
                <Button variant="info" onClick={() => toggleAnswer(index)}>
                  {showAnswers[index] ? "Hide Answer" : "Show Answer"}
                </Button>
                {showAnswers[index] && <Card.Text style={{ marginTop: "10px", color: "black" }}><strong>Answer: </strong>{item.answer}</Card.Text>}
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cs;
