import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question';

require('axios-base-url')('http://localhost:3001');

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: [],
    };
  }

  componentDidMount() {
    this.fetchQuizzes();
  }

  fetchQuizzes() {
    axios.get('/quizzes')
    .then((response) => {
      this.setState({
        quizzes: response.data.quizzes[0],
      });
    })
    .catch((error) => {
      console.log('Tman codes fyr backends, u prob fucked up fam');
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.quizzes.title}</h1>
        {this.state.quizzes.questions
          ? this.state.quizzes.questions.map((question, index) => {
            return (
              <Question
                question={question}
                key={question.id}
              />
            );
          })
          : <p>Loading questions...</p>}
        <button
          type="submit"
          onClick={() => console.log('submit button does a thing')}
        >Submit
        </button>
      </div>
    );
  }
}

export default Quiz;
