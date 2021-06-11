import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './App.css';
import './nprogress.css';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { WarningAlert } from './Alert';

class App extends Component {
  constructor() {
    super();

    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 5,
    };
  }

  componentDidMount() {
    this.mounted = true;

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

  // Get the total number of events happening in each city
  getData = () => {
    const { locations, events } = this.state;
    // Filter the events by each location to get the length of the resulting array
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location,
      ).length;
      const city = location.split(', ').shift();
      return { city, number };
    });
    return data;
  };

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
    return (
      <div className='App'>
        <img
          src={logo}
          alt='Logo'
          className='logo-web'
          width='300'
          height='100'
        />
        <h1>Meetbot</h1>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          updateEvents={this.updateEvents}
        />
        <WarningAlert text={this.state.warningText} />

        <ResponsiveContainer height={400}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis type='category' dataKey='city' name='city' />
            <YAxis type='number' dataKey='number' name='number of events' />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill='#8884d8' />
          </ScatterChart>
        </ResponsiveContainer>

        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
