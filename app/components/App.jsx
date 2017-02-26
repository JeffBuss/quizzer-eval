import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Answers from './Answers';
import Question from './Question';
import QuestionList from './QuestionList';

export default class App extends Component {
  render() {
    return (
      <div>App component
        <Answers />
        <Question />
        <QuestionList />
      </div>
    );
  }
}
