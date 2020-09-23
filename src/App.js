import React from 'react';
import './App.css';
import LoadingPage from './LoadingPage';
import backgroundimage from './hp-background.jpg'
import QuizPage from './QuizPage';
import ResultsPage from './ResultsComponents/ResultsPage';

import LoadingPageClean from './LoadingPage/LoadingPageClean'

class App extends React.Component {
  state = {name : "",
          isNameSubmitted : false,
          isQuizComplete : false,
          questionsAnswered: 0,
          count : 0,
          house : "Grffindor",
        }

  storeUserName = (e) => {
    this.setState({name: e.target.value})
    console.log(this.state.name)
  }

  submitUserName = () => {
    this.setState({isNameSubmitted: true})
    console.log(this.state.isNameSubmitted)
  }

  submitQuizAnswers =() => {
    this.setState({isQuizComplete: true})
  }

  resetQuiz = () => {
    this.setState({isNameSubmitted: false})
    this.setState({isQuizComplete: false})
  }

  render(){
    return (
      <div>
        <LoadingPageClean />
        {!this.state.isNameSubmitted && <LoadingPage 
                                  storeUserName={this.storeUserName} 
                                  userName={this.name} 
                                  submitUserName={this.submitUserName}/>}
        {this.state.isNameSubmitted && !this.state.isQuizComplete && <QuizPage name={this.state.name} submitQuizAnswers={this.submitQuizAnswers}/>}
        {this.state.isNameSubmitted && this.state.isQuizComplete && 
        <ResultsPage name={this.state.name} resetQuiz={this.resetQuiz} house={this.state.house}/>}
      </div>
    );
  }
}


export default App;
