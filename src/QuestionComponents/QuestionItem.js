import React from 'react';

const QuestionItem = ({answer}) => {
    return(
            <button style={questionItemStyle} data-value={answer.value} key={answer.value} id={answer.id}>{answer.answer}</button>
    )
};

const questionItemStyle = {
    textAlign: "center",
    border: "2px solid gold",
    width: "20vw",
    borderRadius: "5px",
    marginBottom: "5px"
}

export default QuestionItem;
