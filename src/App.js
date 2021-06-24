import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './nprogress.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './data-visualization/EventGenre';
import EventNumbers from './data-visualization/EventNumbers';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { WarningAlert } from './Alert';

// Material-UI
import { Grid, Card, Link } from '@material-ui/core';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // Saves the API events.
      events: [],
      // Extract and save event locations.
      locations: [],
      // When the app starts, show all cities.
      currentLocation: 'all',
      // When the app starts, show the maximum number of events (32).
      numberOfEvents: 32,
      // Determine when to render the Welcome Screen.
      showWelcomeScreen: undefined,
    };
  }

  async componentDidMount() {
    this.mounted = true;

    /*
      - Get token from local storage and check if it is valid or not.
      - If no token is present or invalid, users can enter a new authorization
        code when they login.
      - This code will be used to get a new token after getEvents() is executed.
      - The app will be relaunched with the code parameter in the URL search
        field after the site domain and will make a new mount for the App component.
    */
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });

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

    // If internet connection is available + code or token, load API data.
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((data) => {
        if (this.mounted) {
          this.setState({
            events: data.events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(data.events),
          });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  // Allow to update the data to display after loading the app or filtering.
  updateEvents = (location, eventCount) => {
    this.mounted = true;
    // Loads the city and number of events that were selected before the last update.
    const { currentLocation, numberOfEvents } = this.state;

    /*
      If the location is changed, the events are filtered according to the currently
      selected city, then saved in an array, and then the array is reduced by
      dividing by the number of current events.
    */
    if (location) {
      getEvents().then((res) => {
        const locationEvents =
          location === 'all'
            ? res.events
            : res.events.filter((event) => event.location === location);
        const events = locationEvents.slice(0, numberOfEvents);
        if (this.mounted) {
          this.setState({
            events: events,
            locations: res.locations,
            currentLocation: location,
          });
        }
      });
    } else {
      /*
        If the number of events to be displayed is changed, the events are
        filtered according to the current city, then stored in an array and
        then the array is reduced by dividing it by the new number of events
        indicated by the user.
      */
      getEvents().then((res) => {
        const locationEvents =
          currentLocation === 'all'
            ? res.events
            : res.events.filter((event) => event.location === currentLocation);
        const events = locationEvents.slice(0, eventCount);
        if (this.mounted) {
          this.setState({
            events: events,
            locations: res.locations,
            numberOfEvents: eventCount,
          });
        }
      });
    }
  };

  render() {
    const {
      locations,
      numberOfEvents,
      events,
      warningText,
      showWelcomeScreen,
    } = this.state;

    // true = show welcome screen || false = hide welcome screen.
    if (showWelcomeScreen === undefined) return <div className='App' />;

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

          {/* Footer. */}
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
        <WelcomeScreen
          showWelcomeScreen={showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;
