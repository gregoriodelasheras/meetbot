import axios from 'axios';
import { mockData } from './mock-data';
import NProgress from 'nprogress';

// Check the token's validity
const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`,
  )
    .then((res) => res.json())
    .catch((error) => error.json());

  return result;
};

// Remove the code from the URL once it is no longer in use
const removeQuery = () => {
  if (window.history.pushState && window.location.pathname) {
    var newurl =
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname;
    window.history.pushState('', '', newurl);
  } else {
    newurl = window.location.protocol + '//' + window.location.host;
    window.history.pushState('', '', newurl);
  }
};

// When the token doesn't exist or is invalid, get a new one
const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code);
  const { access_token } = await fetch(
    `https://6w6p3q6fx5.execute-api.eu-central-1.amazonaws.com/dev/api/token/${encodeCode}`,
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => error);

  access_token && localStorage.setItem('access_token', access_token);

  return access_token;
};

// Get Access Token
export const getAccessToken = async () => {
  const accessToken = localStorage.getItem('access_token');
  const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || tokenCheck.error) {
    // Then App checks for an authorization code
    await localStorage.removeItem('access_token');
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get('code');
    if (!code) {
      // The user is automatically redirected to the Google Authorization Screen
      const results = await axios.get(
        'https://6w6p3q6fx5.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url',
      );
      const { authUrl } = results.data;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
};

// Take events from Google Calendar API, remove duplicates and create a new array
export const extractLocations = (events) => {
  let extractLocations = events.map((event) => event.location);
  let locations = [...new Set(extractLocations)];
  return locations;
};

// If use localhost, return the mock data. Otherwise, use the real API
export const getEvents = async () => {
  NProgress.start();

  if (window.location.href.startsWith('http://localhost')) {
    NProgress.done();
    return mockData;
  }

  if (!navigator.onLine) {
    const events = localStorage.getItem('lastEvents');
    NProgress.done();
    return JSON.parse(events);
  }

  const token = await getAccessToken();

  if (token) {
    removeQuery();
    const url = `https://6w6p3q6fx5.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/${token}`;
    const result = await axios.get(url);
    if (result.data) {
      var locations = extractLocations(result.data.events);
      localStorage.setItem('lastEvents', JSON.stringify(result.data));
      localStorage.setItem('locations', JSON.stringify(locations));
    }
    NProgress.done();
    return result.data.events;
  }
};
