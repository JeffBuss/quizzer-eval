import React, { Component } from 'react';

export default class Answers extends Component {
  render() {
    const { answer, index, id } = this.props;
    return (
      <form>
        <input
          key={index}
          type="radio"
          name={id}
        />
        {answer.title}
      </form>
    );
  }
}
