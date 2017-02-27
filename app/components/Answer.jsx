import React, { Component } from 'react';

class Answers extends Component {
  render() {
    const { answer, index, id, score } = this.props;
    return (
      <form>
        <input
          key={index}
          type="radio"
          name={id}
          value={score}
          onChange={() => console.log('radio buttons')}
        />
        {answer.title}
      </form>
    );
  }
}

export default Answers;
