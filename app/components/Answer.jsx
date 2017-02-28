import React, { Component } from 'react';

export default class Answers extends Component {
  render() {
    const { answer, index, id } = this.props;
    return (
      <div>
        <input
          key={index}
          type="radio"
          name={id}
          onChange={() => console.log('radio')}
        />
        {answer.title}
      </div>
    );
  }
}
