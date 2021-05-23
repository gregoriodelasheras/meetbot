import React, { Component } from 'react';

class Event extends Component {
  constructor() {
    super();

    this.state = {
      isCollapsed: true,
    };
  }

  handleToggleEvent = () => {
    this.setState({
      isCollapsed: this.state.isCollapsed === true ? false : true,
    });
  };

  showCollapsedEvent = () => {
    const { event } = this.props;

    if (this.state.isCollapsed === false) {
      return (
        <div className='event-details'>
          <h3>About event:</h3>
          <a
            href={event.htmlLink}
            className='event-link'
            target='_blank'
            rel='noreferrer'>
            See details on Google Calendar
          </a>
          <p className='event-description'>{event.description}</p>
          <p className='event-status'>{event.status}</p>
        </div>
      );
    }
  };

  render() {
    const { event } = this.props;

    return (
      <Event>
        <h2 className='event-summary'>{event.summary}</h2>
        <p className='event-start-date'>
          {event.start.dateTime}, {event.start.timeZone}
        </p>
        <p className='event-end-date'>
          {event.end.dateTime}, {event.end.timeZone}
        </p>
        <p className='event-location'>{event.location}</p>
        <button
          type='button'
          className='btn-toggle-event'
          onClick={this.handleToggleEvent}>
          Details
        </button>
        {this.showCollapsedEvent()}
      </Event>
    );
  }
}

export default Event;
