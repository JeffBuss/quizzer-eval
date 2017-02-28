import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question';

require('axios-base-url')('http://localhost:3001');

export default class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: [],
      answerScores: {},
      textResponse: '',
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
      console.log('Tman codes next level backends, u prob fucked up fam');
    });
  }

  postScores(e) {
    axios.post('/scores', {
      score: this.totalScores(),
    })
    .then((response) => {
      this.setState({ textResponse: response.data.score })
    })
  }

  scoreAnswer(score, id) {
    const newScore = Object.assign(this.state.answerScores, {[id]: score});
    this.setState({ answerScores: newScore });
  }

  totalScores() {
    const scoreList = this.state.answerScores;
    return Object.values(scoreList).reduce((sum, i) => {
      return sum + i;
    }, 0);
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
                scoreAnswer={(score, id) => this.scoreAnswer(score, id)}
              />
            );
          })
          : <p>Loading questions...</p>}
          {this.state.textResponse}
        <button
          type="submit"
          onClick={(e) => this.postScores(e)}
        >Submit
        </button>
      </div>
    );
  }
}
