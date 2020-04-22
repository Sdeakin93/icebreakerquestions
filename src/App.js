import React, { Component } from 'react';
import './App.css';
import GetQuestions from './components/Questions/GetQuestions';
import questions from '././components/Questions/questions.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      body: questions[0].body,
    };
  }
  randomQuestion() {
    const randomNumber = Math.floor(Math.random() * questions.length);
    return questions[randomNumber]; 
  }

  shuffleQuestions(array){
    return array.sort(()=>Math.random()-0.5)
  }

  handleClick = () => {
    const generateRandomQuestion = this.randomQuestion();
    this.setState({
      body: generateRandomQuestion.body
    });
    this.shuffleQuestions(questions)
  };

  render() {
    return (
      <div>
        <GetQuestions
          handleClick={this.handleClick}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;