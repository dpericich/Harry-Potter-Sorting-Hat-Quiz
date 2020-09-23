import React from 'react';
import {descriptions, images} from './Results';

const ResultsPage = ({name, resetQuiz, house}) => {

    const houseTheme = (house) => {
        switch (house) {
            case "Grffindor" :
                return gryffindorStyle;
            case "Ravenclaw" :
                return ravenclawStyle;
            case "Hufflepuff" :
                return hufflepuffStyle;
            default :
                return slytherinStyle
        }
    }
   

    return(
        <div style={houseTheme()}>
            <h1 style={{fontWeight: "800"}}>{name} you got {house}!</h1>
            <img src={images[house]} style={emblemStyle}/>
            <div style={descriptionStyle}>{descriptions[house]}</div>
            <button onClick={resetQuiz}>Sort Again!</button>
        </div>
    )
};

const emblemStyle = {
    border: "black 2px solid"
}

const descriptionStyle = {
    backgroundColor: "#f5f2d0",
    width: "75%",
    padding: "5px 10px",
    border: "black solid 2px"
}

const resultsPageStyle = {
    backgroundColor: "blue",
    height: "100vh",
    margin: "0 15vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    color: "black"
}

const gryffindorStyle = {
    backgroundColor: "#740001",
    height: "100vh",
    margin: "0 15vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    color: "#D3A625"
}

const hufflepuffStyle = {
    backgroundColor: "#FFDB00",
    height: "100vh",
    margin: "0 15vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    color: "black",
}

const ravenclawStyle = {
    backgroundColor: "#0E1A40",
    height: "100vh",
    margin: "0 15vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    color: "#5D5D5D"
}

const slytherinStyle = {
    backgroundColor: "#1A472A",
    height: "100vh",
    margin: "0 15vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    color: "#5D5D5D"
}


export default ResultsPage;