import React, { Component } from 'react';

class NumberOfEvents extends Component {
  constructor() {
    super();

    this.state = {
      numberOfEvents: 32,
    };
  }

  handleInputChanged = (event) => {
    const value = event.target.value;

    this.setState({
      numberOfEvents: value,
    });

    this.props.updateEvents('', value);
  };

  render() {
    return (
      <div className='NumberOfEvents'>
        <h2>Please select a number of events:</h2>
        <input
          type='number'
          className='input-number-events'
          min='1'
          max='32'
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
