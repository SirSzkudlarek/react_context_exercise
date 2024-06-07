import React, { PureComponent } from 'react';

import { CharacterContext } from './AppContext';

import './ResetButton.css';

class ResetButton extends PureComponent {
  static contextType = CharacterContext;

  render() {
    return (
      <>
        <button className="reset-button" onClick={this.context.toggleReset}>
          Reset
        </button>
      </>
    );
  }
}

export default ResetButton;
