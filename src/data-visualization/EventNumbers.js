import React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Create a scatter chart to show the number of upcoming events by city.
const EventNumbers = (props) => {
  const { locations, events } = props;

  // Get the total number of events happening in each city.
  const getData = () => {
    // Filter the events by each location to get the length of the resulting array.
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location,
      ).length;
      const city = location.split(', ').shift();
      return { city, number };
    });
    return data;
  };

  return (
    <ResponsiveContainer width='100%' height={400}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis type='category' dataKey='city' name='City' />
        <YAxis type='number' dataKey='number' name='Number of events' />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter data={getData()} fill='#FF004D' />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default EventNumbers;
