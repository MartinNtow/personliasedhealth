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
  const [conversationHistory, setConversationHistory] = useState([]);
  const [isLastQuestion, setIsLastQuestion] = useState(false);

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
    const newHistory = [
      ...conversationHistory,
      { question: questions[currentQuestion].question, answer: answer.text }
    ];
    setConversationHistory(newHistory);

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
      const newHistory = [
        ...conversationHistory,
        { question: questions[currentQuestion].question, answer: age }
      ];
      setConversationHistory(newHistory);
      setShowInput(false);
      setCurrentQuestion(currentQuestion + 1);
      if (questions[currentQuestion + 1].input === 'symptoms') {
        setInputType('symptoms');
        setShowInput(true);
      }
    } else if (inputType === 'symptoms') {
      const symptomsArray = symptoms.split(',').map(s => s.trim().toLowerCase());
      const symptomsKey = symptomsArray.sort().join(',');
      suggestion = symptomsMapping[symptomsKey] || "Your symptoms are not in our database. Please consult a healthcare professional for a proper diagnosis.";

      const newHistory = [
        ...conversationHistory,
        { question: questions[currentQuestion].question, answer: symptoms }
      ];
      setConversationHistory(newHistory);

      setAnswer(suggestion);
      setShowInput(false);

      const nextQuestionIndex = currentQuestion + 1;
      if (questions[nextQuestionIndex] && questions[nextQuestionIndex].answers) {
        setCurrentQuestion(nextQuestionIndex);
        setShowInput(false);
      } else {
        setIsLastQuestion(true);
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
    let yOffset = 10;
    const lineHeight = 10;

    doc.text("Chatbot Report", 10, yOffset);
    yOffset += lineHeight;

    conversationHistory.forEach((item, index) => {
      let questionLines = doc.splitTextToSize(`${index + 1}. ${item.question}`, 180);
      let answerLines = doc.splitTextToSize(`Answer: ${item.answer}`, 180);

      doc.text(questionLines, 10, yOffset);
      yOffset += questionLines.length * lineHeight;
      doc.text(answerLines, 10, yOffset);
      yOffset += answerLines.length * lineHeight * 2;
    });

    if (answer) {
      let suggestionLines = doc.splitTextToSize(`Suggestion: ${answer}`, 180);
      doc.text(suggestionLines, 10, yOffset);
    }

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
            {isLastQuestion && (
              <div className={styles.chatbotanswercontainer}>
                {answer && <p className={styles.chatbotanswer}>{answer}</p>}
                <button onClick={generatePDF} className={styles.downloadbutton}>Download PDF Report</button>
                <div>
                  <Link href="http://localhost:3001/">
                    Interact with the CHATBOT
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Chatbot;
