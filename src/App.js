import React from 'react';
import './App.css';
import LoadingPage from './LoadingPage';
import backgroundimage from './hp-background.jpg'
import QuizPage from './QuizPage';

class App extends React.Component {
  state = {name : "",
          submit : true,
          quizStatus : false}

  storeUserName = (e) => {
    this.setState({name: e.target.value})
    console.log(this.state.name)
  }

  submitUserName = () => {
    this.setState({submit: !(this.state.submit)})
    console.log(this.state.submit)
  }

  render(){
    return (
      <div>
        {!this.state.submit && <LoadingPage 
                                  storeUserName={this.storeUserName} 
                                  userName={this.name} 
                                  submitUserName={this.submitUserName}/>}
        {this.state.submit && !this.state.quizStatus && <QuizPage />}
      </div>
    );
  }
}


export default App;
