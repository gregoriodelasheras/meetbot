import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });

  // Feature 3: Specify number of events
  // Scenario 1: When user hasn’t specified a number, 32 is the default number.
  test('shallow city search instance should render a number of 32 by default', () => {
    expect(
      NumberOfEventsWrapper.find('.input-number-events').props().value,
    ).toEqual(32);
  });

  // Scenario 2: User can change the number of events they want to see.
  test('shallow city search instance should render text input', () => {
    expect(NumberOfEventsWrapper.find('.input-number-events')).toHaveLength(1);
  });

  test('shallow city search instance should change number of events when text input changes', () => {
    const eventNumber = { target: { value: 10 } };
    NumberOfEventsWrapper.find('.input-number-events').simulate(
      'change',
      eventNumber,
    );
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(10);
  });
});
