import React from 'react';
import App from '../App';
import Event from '../Event';
import { mockData } from '../mock-data';
import { mount, shallow } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');
let event = mockData[0];
let AppWrapper;
let EventWrapper;

// Feature 2: Show / Hide an event’s details
defineFeature(feature, (test) => {
  // Scenario 1: An event element is collapsed by default.

  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('user hasn’t opened an event item', () => {
      AppWrapper = mount(<App />);
    });

    when('application shows a list of events', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.Event')).toHaveLength(mockData.length);
    });

    then('the user should be able to see the list of collapsed events.', () => {
      EventWrapper = shallow(<Event event={event} />);
      expect(EventWrapper.state('isCollapsed')).toBeTruthy();
    });
  });

  // Scenario 2: User can expand an event to see its details.
  test('User can expand an event to see its details.', ({
    given,
    when,
    then,
  }) => {
    given('user hasn’t opened the event element', () => {
      EventWrapper = shallow(<Event event={event} />);
      expect(EventWrapper.state('isCollapsed')).toBeTruthy();
    });

    when('user opens the event element', () => {
      EventWrapper.find('.btn-toggle-event').at(0).simulate('click');
    });

    then(
      'the user should be able to see the details of the opening event.',
      () => {
        expect(EventWrapper.state('isCollapsed')).toBeFalsy();
      },
    );
  });

  // Scenario 3: User can collapse an event to hide its details.
  test('User can collapse an event to hide its details.', ({
    given,
    when,
    then,
  }) => {
    given('user has opened the event element', () => {
      expect(EventWrapper.state('isCollapsed')).toBeFalsy();
    });

    when('user presses the event element', () => {
      EventWrapper.find('.btn-toggle-event').at(0).simulate('click');
    });

    then(
      'the user should be able to close the details of the event element.',
      () => {
        expect(EventWrapper.state('isCollapsed')).toBeTruthy();
        AppWrapper.unmount();
      },
    );
  });
});
