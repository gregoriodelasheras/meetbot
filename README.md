<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://gregoriodelasheras.github.io/meetbot/">
    <img src="https://user-images.githubusercontent.com/77192223/120223527-02784a80-c242-11eb-8c56-b6d50c3f5405.png" alt="Logo" width="600">
  </a>
  <p align="center">
    Just another Serverless Progressive Web App (PWA) with React that uses the Google Calendar API to fetch upcoming events.
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#dependencies">Dependencies</a></li>
    <li><a href="#dev-dependencies">Dev Dependencies</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<p align="center">
  <img src="https://user-images.githubusercontent.com/77192223/123265148-0757b380-d4fb-11eb-8440-d469cede912a.png" alt="App Screenshot">
</p>

### Objective:

- Build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

### User Stories:

- As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.
- As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
- As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
- As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.
- As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.
- As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

### Scenarios "Given-When-Then" (using Gherkin):

- Feature 1: Filter events by city

```
Scenario 1: When user hasn't searched for a city, show upcoming events from all cities.

    Given user hasn’t searched for any city
    When user opens the app
    Then the user should see a list of all upcoming events.
```

```
Scenario 2: User should see a list of suggestions when they search for a city.

    Given main page is open
    When user starts typing in the city textbox
    Then the user should see a list of cities (suggestions) that match what they’ve typed.
```

```
Scenario 3: User can select a city from the suggested list.

    Given user was typing “Berlin” in the city textbox
    And the list of suggested cities is showing
    When user selects a city (e.g., “Berlin, Germany”) from the list
    Then their city should be changed to that city (i.e., “Berlin, Germany”)
    And the list of suggestions should disappear
    And the user should receive a list of upcoming events in that city
```

- Feature 2: Show / Hide an event's details

```
Scenario 1: An event element is collapsed by default.

    Given user hasn't opened an event item
    When application shows a list of events
    Then the user should be able to see the list of collapsed events
```

```
Scenario 2: User can expand an event to see its details.

    Given user hasn't opened the event element
    When user opens the event element
    Then the user should be able to see the details of the opening event
```

```
Scenario 3: User can collapse an event to hide its details.

    Given user has opened the event element
    When user presses the event element
    Then the user should be able to close the details of the event element
```

- Feature 3: Specify number of events

```
Scenario 1: When user hasn’t specified a number, 32 is the default number.

    Given user didn't specify the number of events he/she wants to see
    When application displays a list of events
    Then the user should be able to see a list with a maximum of 32 events
```

```
Scenario 2: User can change the number of events they want to see.

    Given user didn't indicate the number of events he/she wants to see
    When user changes the number of event elements
    Then the user should be able to see the number of event elements he/she specified
```

- Feature 4: Use the app when offline

```
Scenario 1: Show cached data when there’s no internet connection

Given application didn't have access to the internet
When user is in the application
Then the application should display the cache data
```

```
Scenario 2: Show error when user changes the settings (city, time range).

Given application didn't have access to the internet
When user changes event filter settings
Then the application should display an error message to the user
```

- Feature 5: Data visualization

```
Given user has selected a city
When user presses the name of the city
Then the user can see a chart with the number of events that are to take place in the selected city
```

### Key Features:

- Filter events by city.
- Show / Hide event details.
- Specify number of events.
- Use the app when offline.
- Add an app shortcut to the home screen.
- View a chart showing the number of upcoming events by city.

### Kanban Board:

The development of this application was organized through a Kanban board. You can see the board by [following this link](https://trello.com/b/IgS6acUm/achievement-4-project-meetbot).

## Built With

- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)
- [Recharts](https://recharts.org/)
- [Jest](https://jestjs.io/)
- [Puppeteer](https://github.com/puppeteer/puppeteer)
- [Amazon Web Services (AWS)](https://aws.amazon.com/)
- [Google Cloud Platform (GCP)](https://console.cloud.google.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Dependencies

- atatus-spa
- axios
- nprogress
- material-ui
- nprogress
- react
- recharts
- web-vitals
- workbox

## Dev Dependencies

- enzyme
- enzyme-adapter-react-16
- jest-cucumber
- puppeteer
- eslint

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Francisco Gregorio de las Heras: [LinkedIn](https://www.linkedin.com/in/francisco-gregorio-de-las-heras/)

Project Link: [https://gregoriodelasheras.github.io/meetbot/](https://gregoriodelasheras.github.io/meetbot/)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Itua Akhator](https://github.com/iakhator)
- [Vinh-Tuong Mai](https://github.com/mvtuong)
