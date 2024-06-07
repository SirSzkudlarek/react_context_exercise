import React, { PureComponent } from 'react';

import { CharacterContext } from './AppContext';

import './StartButton.css';

class StartButton extends PureComponent {
  static contextType = CharacterContext;
  render() {
    return (
      <button className="start-button" onClick={this.context.toggleHasBegin}>
        Begin Creation..
      </button>
    );
  }
}

export default StartButton;
