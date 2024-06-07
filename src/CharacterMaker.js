import React, { PureComponent } from 'react';

import StartButton from './StartButton.js';
import Questions from './Questions.js';
import Character from './Character.js';
import ResetButton from './ResetButton.js';

import { CharacterContext, character } from './AppContext';
import './CharacterMaker.css';

class CharacterMaker extends PureComponent {
  state = {
    sex: character.sex,
    race: character.race,
    profession: character.profession,
    hasBegin: character.hasBegin,
  };

  handleToggleHasBegin = () => {
    this.setState((prevState) => ({
      hasBegin: !prevState.hasBegin,
    }));
  };

  handleToggleAnswer = (e) => {
    const question = e.target.attributes.question.nodeValue;
    const answer = e.target.attributes.answer.nodeValue;
    this.setState({
      [question]: answer,
    });
  };

  handleToggleReset = () => {
    this.setState({
      sex: null,
      race: null,
      profession: null,
      hasBegin: false,
    });
  };

  render() {
    const { sex, race, profession, hasBegin } = this.state;

    const condition = sex !== null && race !== null && profession !== null;
    return (
      <CharacterContext.Provider
        value={{
          sex: sex,
          race: race,
          profession: profession,
          hasBegin: hasBegin,
          toggleHasBegin: this.handleToggleHasBegin,
          toggleAnswer: this.handleToggleAnswer,
          toggleReset: this.handleToggleReset,
        }}
      >
        <div className="page-wrapper">
          <h1>
            {condition ? 'Its your character!' : 'Create your character!'}
          </h1>
          <div className="content-wrapper">
            {!hasBegin ? <StartButton /> : null}
            <Questions />
            {condition ? <Character /> : null}
          </div>

          {condition ? <ResetButton /> : null}
        </div>
      </CharacterContext.Provider>
    );
  }
}

export default CharacterMaker;
