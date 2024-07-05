"use client";
import { useState, useEffect } from 'react';
import styles from "../styles/chatbot.module.css";
import Link from 'next/link';

import { jsPDF } from 'jspdf';

function Chatbot() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [age, setAge] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [inputType, setInputType] = useState('');
  const [symptomsMapping, setSymptomsMapping] = useState({});

  useEffect(() => {
    fetch('/questions.json')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error('Error fetching questions:', error));

    fetch('/symptomsMapping.json')
      .then(response => response.json())
      .then(data => setSymptomsMapping(data))
      .catch(error => console.error('Error fetching symptoms mapping:', error));
  }, []);

  const handleAnswer = (answer) => {
    if (answer.nextQuestion !== undefined) {
      setCurrentQuestion(answer.nextQuestion);
      if (questions[answer.nextQuestion].input) {
        setInputType(questions[answer.nextQuestion].input);
        setShowInput(true);
      } else {
        setShowInput(false);
      }
    } else {
      setAnswer(answer.answer);
      setShowInput(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let suggestion = '';
  
    if (inputType === 'age') {
      setShowInput(false);
      setCurrentQuestion(currentQuestion + 1);
      setInputType('symptoms');
    } else if (inputType === 'symptoms') {
      const symptomsArray = symptoms.split(',').map(s => s.trim().toLowerCase());
      const symptomsKey = symptomsArray.sort().join(',');
      suggestion = symptomsMapping[symptomsKey] || "Your symptoms are not in our database. Please consult a healthcare professional for a proper diagnosis.";
      
      setAnswer(suggestion);
      setShowInput(false);
  
      // Check if the current question should move to the next one automatically
      if (currentQuestion === 2) { // Assuming index 2 is the question "What symptoms are you experiencing?"
        setCurrentQuestion(3); // Move to the next question after symptoms
      }
    }
  };
  

  const handleInput = (e) => {
    if (inputType === 'age') {
      setAge(e.target.value);
    } else if (inputType === 'symptoms') {
      setSymptoms(e.target.value);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Chatbot Report", 10, 10);
    doc.text(`Age: ${age}`, 10, 20);
    doc.text(`Symptoms: ${symptoms}`, 10, 30);
    doc.text(`Suggestion: ${answer}`, 10, 40);
    doc.save('report.pdf');
  };

  return (
    <>
      {questions.length !== 0 ? (
        <div className={styles.chatbotcontainer}>
          <h1>Support Bot</h1>
          <div className={styles.chatbotmessages}>
            <div className={`${styles.chatbotquestioncontainer} ${styles.clearfix}`}>
            <p className={styles.chatbotquestion}>{questions[currentQuestion].question}</p>
            </div>
            <div className={styles.chatbotanswercontainer}>
              {questions[currentQuestion].input ? (
                <form onSubmit={handleSubmit}>
                  <input
                    type={inputType === 'age' ? 'number' : 'text'}
                    value={inputType === 'age' ? age : symptoms}
                    onChange={handleInput}
                    className={styles.chatbotinput}
                    placeholder={inputType === 'age' ? 'Enter your age...' : 'Type your symptoms...'}
                    min="0"
                  />
                  <button type="submit" className={styles.chatbotsubmitbutton}>Submit</button>
                </form>
              ) : (
                <ul className={styles.chatbotanswers}>
                  {questions[currentQuestion].answers.map((answer, index) => (
                    <li key={index}>
                      <button
                        className={styles.chatbotanswerbutton}
                        onClick={() => handleAnswer(answer)}
                      >
                        {answer.text}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          {answer && (
            <div className={styles.chatbotanswercontainer}>
              <p className={styles.chatbotanswer}>{answer}</p>
              <button onClick={generatePDF} className={styles.downloadbutton}>Download PDF Report</button>
              <div>
                <Link href="http://localhost:3001/">
                  Interact with the CHATBOT
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Chatbot;
