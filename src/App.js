import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './App.css';
import './nprogress.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './data-visualization/EventGenre';
import EventNumbers from './data-visualization/EventNumbers';
import { getEvents, extractLocations } from './api';
import { WarningAlert } from './Alert';

class App extends Component {
  constructor() {
    super();

    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 32,
    };
  }

  componentDidMount() {
    this.mounted = true;

    // Enable alert for the user when the app has no internet connection.
    if (!navigator.onLine) {
      this.setState({
        warningText:
          'You are currently using the app offline. Events may be out of date.',
      });
    } else {
      this.setState({
        warningText: '',
      });
    }

    // If internet connection is available, loads API data.
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  // Allow to update the data to display after loading the app or filtering.
  updateEvents = (location, eventCount) => {
    this.mounted = true;

    getEvents().then((events) => {
      const locationEvents =
        location === 'all' && eventCount === 0
          ? events
          : location !== 'all' && eventCount === 0
          ? events.filter((event) => event.location === location)
          : events.slice(0, eventCount);
      if (this.mounted) {
        this.setState({
          events: locationEvents,
          numberOfEvents: eventCount,
        });
      }
    });
  };

  render() {
    const { locations, numberOfEvents, events, warningText } = this.state;

    return (
      <div className='App'>
        <img
          src={logo}
          alt='Logo'
          className='logo-web'
          width='300'
          height='100'
        />
        <h1>Choose a city to see its events</h1>

        {/* Display a city search to filter events by city. */}
        <CitySearch locations={locations} updateEvents={this.updateEvents} />

        {/* Display a number selector to specify how many events to view. */}
        <NumberOfEvents
          numberOfEvents={numberOfEvents}
          updateEvents={this.updateEvents}
        />

        {/* Alert to notify the user when using the app offline. */}
        <WarningAlert text={warningText} />

        {/* Data Visualization (D3.js + Recharts). */}
        <div className='data-vis-wrapper'>
          <h3>Themes of the events</h3>
          <EventGenre events={events} />

          <h3>Number of events per city</h3>
          <EventNumbers locations={locations} events={events} />
        </div>

        {/* Display the list of filtered events. */}
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
