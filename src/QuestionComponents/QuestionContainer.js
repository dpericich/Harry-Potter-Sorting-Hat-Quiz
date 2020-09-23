import React, {useState} from 'react';
import QuestionItem from './QuestionItem';

const QuestionContainer = ({question, answers}) => {
    const [selectedAnswer, setSelectedAnswer] = useState(answers)


    return(
        // <div style={questionItemStyle}>
        //     <div style={questionStyle}>{question}</div>
        //     {selectedAnswer.map(answer => <QuestionItem answer={answer} />)}
        // </div>
        <div style={questionItemStyle}>
            <div style={questionStyle}>{question}</div>
            {answers.map((answer, index) => (
                key={answer.id}
            ))}
        </div>
    )
};

const questionItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "black 2px solid",
    width: "25vw",
    paddingBottom: "15px",
    marginBottom: "10px",
}

const questionStyle = {
    backgroundColor: "black",
    color: "white",
    width : "25vw",
    textAlign: "center",
    marginBottom: "10px"
}


export default QuestionContainer;