import React, { PureComponent } from 'react';

import AnswerButton from './AnswerButton';

import { CharacterContext } from './AppContext';

import './Questions.css';

class Questions extends PureComponent {
  static contextType = CharacterContext;

  render() {
    const { sex, race, profession, hasBegin } = this.context;

    const sexQuestion = (
      <div className="question-wrapper">
        <h3>What sex are you?</h3>
        <div className="button-wrapper">
          <AnswerButton text="Male" question="sex" answer="male" />
          <AnswerButton text="Female" question="sex" answer="female" />
        </div>
      </div>
    );

    const raceQuestion = (
      <div className="question-wrapper">
        <h3>What race are you?</h3>
        <div className="button-wrapper">
          <AnswerButton text="Elf" question="race" answer="elf" />
          <AnswerButton text="Human" question="race" answer="human" />
          <AnswerButton text="Dwarf" question="race" answer="dwarf" />
        </div>
      </div>
    );

    const professionQuestion = (
      <div className="question-wrapper">
        <h3>What profession are you?</h3>
        <div className="button-wrapper">
          <AnswerButton text="Ranger" question="profession" answer="ranger" />
          <AnswerButton text="Mage" question="profession" answer="mage" />
          <AnswerButton text="Fighter" question="profession" answer="fighter" />
        </div>
      </div>
    );

    return (
      <div>
        {hasBegin && sex == null ? sexQuestion : null}
        {sex !== null && race == null ? raceQuestion : null}
        {race !== null && profession == null ? professionQuestion : null}
      </div>
    );
  }
}

export default Questions;
