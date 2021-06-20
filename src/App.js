import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './nprogress.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './data-visualization/EventGenre';
import EventNumbers from './data-visualization/EventNumbers';
import { getEvents, extractLocations } from './api';
import { WarningAlert } from './Alert';

// Material-UI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';

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
        <Grid container spacing={3}>
          <Grid item xs={12} p={5}>
            <img src={logo} alt='Logo' className='logo-web' />
          </Grid>

          <Grid item xs={12}>
            <Card>
              <h2>Let's look for events!</h2>

              {/* Alert to notify the user when using the app offline. */}
              <WarningAlert text={warningText} />

              {/* Display a city search to filter events by city. */}
              <CitySearch
                locations={locations}
                updateEvents={this.updateEvents}
              />

              {/* Display a number selector to specify how many events to view. */}
              <NumberOfEvents
                numberOfEvents={numberOfEvents}
                updateEvents={this.updateEvents}
              />
            </Card>
          </Grid>

          {/* Data Visualization (D3.js + Recharts). */}
          <Grid item xs={12}>
            <Card>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={6}>
                  <h3>Number of events per city</h3>
                  <EventNumbers locations={locations} events={events} />{' '}
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <h3>Themes of the events</h3>
                  <EventGenre events={events} />
                </Grid>
              </Grid>
            </Card>
          </Grid>

          {/* Display the list of filtered events. */}
          <Grid item xs={12}>
            <EventList events={events} />
          </Grid>

          {/* Footer */}
          <Grid item xs={12}>
            <p>
              Made with 💚 by{' '}
              <Link
                href='https://gregoriodelasheras.github.io/'
                color='secondary'
                target='_blank'
                rel='noreferrer'>
                Francisco Gregorio de las Heras
              </Link>
            </p>
            <p>
              Latest version:{' '}
              <Link
                href='https://github.com/gregoriodelasheras/meetbot/releases/latest'
                color='secondary'
                target='_blank'
                rel='noreferrer'>
                v.1.0.6
              </Link>
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
