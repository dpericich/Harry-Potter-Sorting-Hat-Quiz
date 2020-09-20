import React from 'react';
import './loadingPage.css';
import lightning from './lightning.png';

const LoadingPage = ({storeUserName, submitUserName, userName}) => {
    return(
        <section style={loadingPageStyle}>
            <h1 style={introStyle}>Welcome to the Magical World of Harry Potter!</h1>
            <img className="lightningBolt" src={lightning} alt="lightning bolt" />
            <div className="input-field">
                <div className="name-entrance">
                    <img src="../potion.png" alt="potion" style={textIconStyle}/>
                    <input style={inputStyle} type="text" placeholder="Enter your Name" value={userName} onChange={storeUserName}/>
                    <button onClick={submitUserName} style={submitStyle}>Submit</button>
                </div>
            </div>
        </section>
    )
};

const loadingPageStyle = {
    backgroundColor: "black",
    height: "100vh",
    margin: "0 15vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
}

const introStyle = {
    color: "white",
    fontSize: "2.5em",
    textAlign: "center",
    padding: "0 20px",
}

const textIconStyle ={
    width: "35px",
    height: "35px",
    position: "relative",
    top: "12px",
    left: "40px"
}

const inputStyle = {
    height: "40px",
    width: "30vw",
    borderRadius: "10px",
    padding: "2px 45px",
    fontSize: "25px",
    outline: "0",
    cursor: "pointer"

}

const submitStyle = {
    height: "47px",
    width: "100px",
    position: "relative",
    right: "100px",
    top: "-4px"
}

export default LoadingPage;