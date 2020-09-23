import React from 'react';
import QuestionContainer from './QuestionContainer';
import {quizQA} from './Questions'

const QuestionContainerList = () => {
    return(
        <div style={questionContainerStyle}>
            {quizQA.map(question => <QuestionContainer question={question.question} answers={question.answers} />)}
        </div>
    )
};

const questionContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems : "center",
    flex: "wrap"
}

export default QuestionContainerList;