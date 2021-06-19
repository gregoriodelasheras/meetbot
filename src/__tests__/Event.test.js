import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

describe('<Event /> component', () => {
  let event, EventWrapper;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });

  // Feature 2: Show / Hide an event's details.
  // Scenario 1: An event element is collapsed by default.
  test('shallow event instance should render with prop', () => {
    expect(EventWrapper.instance().props.event).toEqual(event);
  });

  test('shallow event should render summary data', () => {
    expect(EventWrapper.find('.event-summary').text()).toBe(event.summary);
  });

  test('shallow event should render start-date data', () => {
    expect(EventWrapper.find('.event-start-date').text()).toBe(
      `${event.start.dateTime}, ${event.start.timeZone}`,
    );
  });

  test('shallow event should render end-date data', () => {
    expect(EventWrapper.find('.event-end-date').text()).toBe(
      `${event.end.dateTime}, ${event.end.timeZone}`,
    );
  });

  test('shallow event should render location data', () => {
    expect(EventWrapper.find('.event-location').text()).toBe(event.location);
  });

  // Scenario 2: User can expand an event to see its details.
  test('shallow event should render details button', () => {
    expect(EventWrapper.find('.btn-toggle-event')).toHaveLength(1);
  });

  test('shallow event should be collapsed by default', () => {
    expect(EventWrapper.state('isCollapsed')).toBeTruthy();
  });

  test('shallow event should show expanded details after click details button', () => {
    EventWrapper.find('.btn-toggle-event').simulate('click');
    expect(EventWrapper.state('isCollapsed')).toBeFalsy();
  });

  test('shallow event should render link after click details button', () => {
    expect(EventWrapper.find('.event-link').props().href).toBe(event.htmlLink);
  });

  test('shallow event should render description data after click details button', () => {
    expect(EventWrapper.find('.event-description').text()).toBe(
      event.description,
    );
  });

  test('shallow event should render status data after click details button', () => {
    expect(EventWrapper.find('.event-status').text()).toBe(event.status);
  });

  // Scenario 3: User can collapse an event to hide its details.
  test('shallow event should collapse an event details after click details button', () => {
    EventWrapper.find('.btn-toggle-event').simulate('click');
    expect(EventWrapper.state('isCollapsed')).toBeTruthy();
  });

  test('shallow event should delete expanded details in the DOM', () => {
    expect(EventWrapper.find('.event-details')).toHaveLength(0);
  });
});
