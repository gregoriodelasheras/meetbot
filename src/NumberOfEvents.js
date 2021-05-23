import React, { Component } from 'react';

class NumberOfEvents extends Component {
  constructor() {
    super();

    this.state = {
      numberEvents: 32,
    };
  }

  handleNumberChanged = (event) => {
    const value = event.target.value;

    this.setState({
      numberEvents: value,
    });
  };

  render() {
    return (
      <div className='number-events'>
        <h2>Number of events</h2>
        <input
          type='number'
          className='input-number-events'
          min='1'
          max='32'
          value={this.state.numberEvents}
          onChange={this.handleNumberChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
