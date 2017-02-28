import React, { Component } from 'react';

export default class Answers extends Component {
  render() {
    const { answer, index, id, scoreAnswer, score } = this.props;
    return (
      <div>
        <input
          key={index}
          type="radio"
          name={id}
          onChange={() => scoreAnswer(answer.score)}
        />
        {answer.title}
      </div>
    );
  }
}
