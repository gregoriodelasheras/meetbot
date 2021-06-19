import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  constructor() {
    super();

    this.state = {
      numberOfEvents: 32,
    };
  }

  // Validate input number and update the number of events to display.
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });

    if (value < 1 || value > 32) {
      this.setState({
        errorText: 'Please select a number from 1 to 32 events',
      });
    } else {
      this.setState({
        errorText: '',
      });
      this.props.updateEvents('', value);
    }
  };

  render() {
    const { numberOfEvents, errorText } = this.state;

    return (
      <div className='NumberOfEvents'>
        <h3>Please select a number of events:</h3>
        <input
          type='number'
          className='input-number-events'
          min='1'
          max='32'
          value={numberOfEvents}
          onChange={this.handleInputChanged}
        />
        <ErrorAlert text={errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;
