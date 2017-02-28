import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question';

require('axios-base-url')('http://localhost:3001');

export default class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: [],
      scoreObj: {},
      totalScore: 0,
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

  postScore(e) {
    axios.post('/scores', {
      score: this.state.totalScore,
    })
    .then((response) => {
      this.setState({ textResponse: response.data.score });
    });
  }

  scoreAnswer(score, id) {
    const answerScores = Object.assign({}, this.state.scoreObj, { [id]: score });
    this.setState({ scoreObj: answerScores });
    this.totalScores();
  }

  totalScores(score) {
    const totalScore = Object.keys(this.state.scoreObj).reduce((sum, id) => {
      return sum + (this.state.scoreObj[id]);
    },0);
    this.setState({ totalScore });
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
          {this.state.totalScore}{this.state.textResponse}
        <button
          type="submit"
          onClick={(e) => this.postScore(e)}
        >Submit
        </button>
      </div>
    );
  }
}
