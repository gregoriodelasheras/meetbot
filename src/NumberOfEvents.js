import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  constructor() {
    super();

    this.state = {
      numberOfEvents: 32,
    };
  }

  handleInputChanged = (event) => {
    const value = event.target.value;

    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: value,
        errorText: 'Please select a number from 1 to 32 events',
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: '',
      });
      this.props.updateEvents('', value);
    }
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
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;
