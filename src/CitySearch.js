import React, { Component } from 'react';
import { InfoAlert } from './Alert';

// Material-UI
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import LocationCityIcon from '@material-ui/icons/LocationCity';

class CitySearch extends Component {
  constructor() {
    super();

    this.state = {
      query: '',
      suggestions: [],
      showSuggestions: false,
    };
  }

  // Filter by city to give user search suggestions.
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });

    if (suggestions.length === 0) {
      this.setState({
        query: value,
        showSuggestions: false,
        infoText: 'Sorry, we can not find the city you are looking for.',
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: '',
      });
    }
  };

  // Select a city suggestion to display filtered data and then update events.
  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
      infoText: '',
    });

    this.props.updateEvents(suggestion, 0);
  };

  render() {
    const { query, showSuggestions, suggestions, infoText } = this.state;

    return (
      <div className='CitySearch'>
        <TextField
          id='city-search'
          type='text'
          variant='outlined'
          color='primary'
          label='Search events by city here'
          placeholder='E.g. "Berlin"'
          className='input-city'
          value={query}
          onChange={this.handleInputChanged}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <LocationCityIcon />
              </InputAdornment>
            ),
          }}
        />
        <ul
          className='suggestions'
          style={showSuggestions ? {} : { display: 'none' }}>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}>
              {suggestion}
            </li>
          ))}
          <li key='all' onClick={() => this.handleItemClicked('all')}>
            <strong>See all cities</strong>
          </li>
        </ul>
        <InfoAlert text={infoText} />
      </div>
    );
  }
}

export default CitySearch;
