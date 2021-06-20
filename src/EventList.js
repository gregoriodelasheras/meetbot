import React, { Component } from 'react';
import Event from './Event';

// Material-UI
import Grid from '@material-ui/core/Grid';

class EventList extends Component {
  render() {
    const { events } = this.props;

    return (
      <ul className='EventList'>
        <h2>Meetbot has found the following events:</h2>
        <Grid container spacing={2}>
          {events.map((event) => (
            <Grid key={event.id} item xs={12} sm={12} md={6}>
              <li key={event.id}>
                <Event event={event} />
              </li>
            </Grid>
          ))}
        </Grid>
      </ul>
    );
  }
}

export default EventList;
