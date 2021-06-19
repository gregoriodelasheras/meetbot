import React, { Component } from 'react';
import { InfoAlert } from './Alert';

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
        infoText:
          'Sorry, we can not find the city you are looking for. Please try another city.',
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
        <h3>Please enter a city:</h3>
        <input
          type='text'
          className='city'
          placeholder='Search events by city here'
          value={query}
          onChange={this.handleInputChanged}
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
            <b>See all cities</b>
          </li>
        </ul>
        <InfoAlert text={infoText} />
      </div>
    );
  }
}

export default CitySearch;
