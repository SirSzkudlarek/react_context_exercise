import React, { PureComponent } from 'react';

import { CharacterContext } from './AppContext';

import './AnswerButton.css';

class AnswerButton extends PureComponent {
  static contextType = CharacterContext;

  render() {
    const { text, question, answer } = this.props;
    return (
      <>
        <button
          className="answer-button"
          onClick={this.context.toggleAnswer}
          question={question}
          answer={answer}
        >
          {text}
        </button>
      </>
    );
  }
}

export default AnswerButton;
