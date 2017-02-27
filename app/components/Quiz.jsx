import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question';

require('axios-base-url')('http://localhost:3001');

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: [],
      selectedAnswer: {},
      selectedScore: '',
      answer: '',
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

  fetchScores(e) {
    axios.post('/scores', {
      score: this.state.selectedScore
    })
    .then((response) => {
      this.setState({
        answer: response.data.score,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }


  scoreAnswer(score, index) {
    let currentAnswerScore = this.state.selectedAnswer;
    currentAnswerScore[index] = score;
    this.setState ({
      selectedScore: score,
    });
    this.totalScores(index);
  };

  totalScores(index) {
    const { selectedAnswer } = this.state;
    let total = Object.keys(selectedAnswer).reduce((sum, index) => {
      return sum + (selectedAnswer[index])
    }, 0);
    this.setState({
      selectedScore: total
    });
  };

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
                scoreAnswer={score => this.scoreAnswer(score, index)}
              />
            );
          })
          : <p>Loading questions...</p>}

        {this.state.selectedScore}
        {this.state.answer}
        <button
          type="submit"
          onClick={e => this.fetchScores(e)}
        >Submit
        </button>
      </div>
    );
  }
}

module.exports = Quiz;
