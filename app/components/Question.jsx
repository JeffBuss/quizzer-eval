import React, { Component } from 'react';
import Answer from './Answer';

export default class Question extends Component {
  render() {
    const { question } = this.props;
    return (
      <main key={question.id}>
        <h2>{question.title}</h2>
        <form>
          {question.answers.map((answer, index) => {
            return (
              <Answer
                key={index}
                id={question.id}
                answer={answer}
                scoreAnswer={(score) => this.props.scoreAnswer(score, question.id)}
              />
            );
          })}
        </form>
      </main>
    );
  }
}
