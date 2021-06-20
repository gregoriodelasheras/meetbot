import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

// Material-UI
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

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
        <TextField
          type='number'
          variant='outlined'
          color='primary'
          label='Number of events'
          className='input-number'
          value={numberOfEvents}
          onChange={this.handleInputChanged}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <PlaylistAddIcon />
              </InputAdornment>
            ),
            inputProps: {
              min: 1,
              max: 32,
            },
          }}
        />
        <ErrorAlert text={errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;
