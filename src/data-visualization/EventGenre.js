import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

// Create a pie chart to compare the number of event genres.
const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);

  const chartColors = ['#FF004D', '#FFA300', '#00E436', '#29ADFF', '#7A09FA'];

  /*
    Listen changes in the events prop that are passed to the component,
    and then forces a rendering by setting state.
  */
  useEffect(() => {
    const getData = () => {
      // Create an array with the event genres from the API to visualize.
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];

      /*
        Get the event array, extract the summary and count how many
        of each genre appear in the event summaries.
      */
      const data = genres.map((genre) => {
        const value = events.filter(({ summary }) =>
          summary.split(' ').includes(genre),
        ).length;
        return { name: genre, value };
      });
      return data.filter((data) => data.value !== 0);
    };

    setData(() => getData());
  }, [events]);

  return (
    <ResponsiveContainer width='100%' height={400}>
      <PieChart>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          labelLine={false}
          outerRadius={80}
          fill='#8884d8'
          dataKey='value'
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={chartColors[index % chartColors.length]}
            />
          ))}
        </Pie>
        <Legend align='center' />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
