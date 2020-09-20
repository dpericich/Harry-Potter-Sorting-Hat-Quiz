import React from 'react';
import QuestionContainerList from './QuestionComponents/QuestionContainerList';

const QuizPage = () => {
    return(
        <div style={quizPageStyle}>
            <h1>Sorting Hat Quiz</h1>
            <QuestionContainerList />
            <button>Submit</button>        
        </div>
    )
};

const quizPageStyle = {
    backgroundColor: "white",
    height: "100vh",
    margin: "0 15vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    color: "black"
}

export default QuizPage;