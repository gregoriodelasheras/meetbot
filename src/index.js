import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Material-UI
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// Service Worker + Atatus.
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import * as atatus from 'atatus-spa';
atatus.config('e1684a1fb3644b0aae4c2db6df955548').install();

// React.StrictMode = Highlight potential problems with an application (development mode only).
ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Container maxWidth='md' py={2}>
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Enable the service worker.
serviceWorkerRegistration.register();

// Enables reporting with Web Vitals.
reportWebVitals();
