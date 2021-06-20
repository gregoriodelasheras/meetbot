import React, { Component } from 'react';

// Material-UI
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import UnfoldMore from '@material-ui/icons/UnfoldMore';

class Event extends Component {
  constructor() {
    super();

    this.state = {
      isCollapsed: true,
    };
  }

  // Allow user to show or hide the collapsed event information.
  handleToggleEvent = () => {
    this.setState({
      isCollapsed: this.state.isCollapsed === true ? false : true,
    });
  };

  // Display the collapsed information to the user.
  showCollapsedEvent = () => {
    const { event } = this.props;

    if (this.state.isCollapsed === false) {
      return (
        <div className='event-details'>
          <Box>
            <h3>About the event:</h3>
            <p className='event-description'>
              <em>{event.description}</em>
            </p>
            <Link
              href={event.htmlLink}
              color='secondary'
              className='event-link'
              target='_blank'
              rel='noreferrer'>
              See details on Google Calendar
            </Link>
          </Box>
        </div>
      );
    }
  };

  render() {
    const { event } = this.props;
    const startEvent = new Date(event.start.dateTime);
    const endEvent = new Date(event.end.dateTime);

    return (
      <div className='Event'>
        <Card>
          <Box py={2} px={4}>
            <h2 className='event-summary'>{event.summary}</h2>
            <p className='event-start-date'>
              <strong>Start: </strong>
              {startEvent.toLocaleString()} (Locale Time)
            </p>
            <p className='event-end-date'>
              <strong>End: </strong> {endEvent.toLocaleString()} (Locale Time)
            </p>
            <p className='event-location'>
              <strong>Location: </strong> {event.location}
            </p>
            <Box my={2}>
              <Button
                startIcon={<UnfoldMore />}
                variant='contained'
                color='secondary'
                onClick={this.handleToggleEvent}>
                Details
              </Button>
            </Box>
            {this.showCollapsedEvent()}
          </Box>
        </Card>
      </div>
    );
  }
}

export default Event;
