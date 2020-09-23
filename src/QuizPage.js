import React from 'react';
import QuestionContainerList from './QuestionComponents/QuestionContainerList';

const QuizPage = ({name, submitQuizAnswers}) => {
    return(
        <div style={quizPageStyle}>
            <h1>Sorting Hat Quiz</h1>
            <p>Welcome {name}, please answer a few questions for us.</p>
            <QuestionContainerList />
            <button style={{marginBottom: "15px", color: "white", backgroundColor: "black"}} onClick={submitQuizAnswers}>
                <span>⚡️ Submit ⚡️</span></button>        
        </div>
    )
};

const quizPageStyle = {
    backgroundColor: "#f5f2d0",
    height: "100%",
    margin: "0 15vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    color: "black"
}

export default QuizPage;