import React from 'react';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';
import { mount } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');
const locations = extractLocations(mockData);
let AppWrapper;
let NumberOfEventsWrapper;

// Feature 3: Specify number of events
defineFeature(feature, (test) => {
  // Scenario 1: When user hasn’t specified a number, 32 is the default number.
  test('When user hasn’t specified a number, 32 is the default number.', ({
    given,
    when,
    then,
  }) => {
    given(
      'user didn’t specify the number of events he/she wants to see',
      () => {
        AppWrapper = mount(<App />);
      },
    );

    when('application displays a list of events', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.Event')).toHaveLength(mockData.length);
    });

    then(
      'the user should be able to see a list with a maximum of 32 events.',
      () => {
        // Expect: mockData array has only 2 objects
        expect(AppWrapper.find('.Event')).toHaveLength(2);
      },
    );
  });

  // Scenario 2: User can change the number of events they want to see.
  test('User can change the number of events they want to see.', ({
    given,
    when,
    then,
  }) => {
    given(
      'user didn’t indicate the number of events he/she wants to see',
      () => {
        AppWrapper.update();
        expect(AppWrapper.find('.Event')).toHaveLength(2);
      },
    );

    when('user changes the number of event elements', () => {
      // change to 1 event element
      const eventNumber = { target: { value: 1 } };
      NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      NumberOfEventsWrapper.setState({ events: locations, eventCount: 1 });
      NumberOfEventsWrapper.find('.input-number-events').simulate(
        'change',
        eventNumber,
      );
      expect(AppWrapper.find('.input-number-events').props().value).toEqual(1);
      AppWrapper.update();
    });

    then(
      'the user should be able to see the number of event elements he/she specified.',
      () => {
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(1);
        AppWrapper.unmount();
      },
    );
  });
});
