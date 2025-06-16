import React, { useState, useEffect } from "react";
import { Card, Spinner, Col } from "react-bootstrap";
import { FaBook, FaDownload } from "react-icons/fa";
import { getQuestionPapersApi } from "../AllApis/allApis";

function Question() {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState("eng"); 

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        setLoading(true); 
        const data = await getQuestionPapersApi(selectedSubject);
        
        const filteredPapers = data.filter(paper => paper.subject.toLowerCase() === selectedSubject);
        
        setPapers(filteredPapers);
      } catch (error) {
        console.error("Error fetching question papers:", error);
        setPapers([]); 
      } finally {
        setLoading(false);
      }
    };

    fetchPapers();
  }, [selectedSubject]);

  return (
    <div className="container" style={{ background: "#f0f8ff", padding: "20px", borderRadius: "10px" }}>
      <h1 className="my-4 text-center fw-bolder text-success">Previous Year Question Papers</h1>

      <div className="mb-4 text-center">
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="form-select w-50 mx-auto"
          style={{ backgroundColor: "#f9f9f9" }}
        >
          <option value="eng">English</option>
          <option value="cs">Computer Science</option>
          <option value="math">Mathematics</option>
          <option value="mal">Malayalam</option>
        </select>
      </div>

      {loading && <div className="text-center my-4"><Spinner animation="border" variant="success" /></div>}

      {!loading && papers.length === 0 && (
        <h3 className="text-center text-danger">No question papers available for the selected subject.</h3>
      )}

      <div className="row justify-content-center">
        {!loading &&
          papers.map((paper) => (
            <Col key={paper.id} sm={12} md={6} lg={4} className="mb-4">
              <Card style={{ borderRadius: "15px", boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}>
                <Card.Body>
                  <Card.Title className="text-center" style={{ color: "black" }}>
                    <FaBook style={{ fontSize: "24px", color: "#ff6347" }} />{" "}
                    {paper.subject.toUpperCase()} - {paper.year}
                  </Card.Title>
                  <Card.Text className="text-center" style={{ color: "black" }}>
                    <a
                      href={paper.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success w-100"
                    >
                      <FaDownload style={{ marginRight: "10px" }} />
                      Download Paper
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </div>
    </div>
  );
}

export default Question;
