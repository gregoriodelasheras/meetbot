import { mockData } from './mock-data';

// Take events from Google Calendar API, remove duplicates and create a new array
export const extractLocations = (events) => {
  let extractLocations = events.map((event) => event.location);
  let locations = [...new Set(extractLocations)];
  return locations;
};

export const getEvents = async () => {
  return mockData;
};
