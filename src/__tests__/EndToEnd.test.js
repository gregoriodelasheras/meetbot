import puppeteer from 'puppeteer';

// Feature 1: Filter events by city
describe('filter events by city', () => {
  let browser, page;

  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.CitySearch');
  });

  afterAll(() => {
    browser.close();
  });

  // Scenario 1
  test('When user hasn’t searched for a city, show upcoming events from all cities', async () => {
    const upcomingEvents = await page.$('.Event');
    expect(upcomingEvents).toBeDefined();
  });

  // Scenario 2
  test('User should see a list of suggestions when they search for a city', async () => {
    const cityHandle = await page.$('.city');
    await cityHandle.type('ber');
    // page.$$(selector): the method runs document.querySelectorAll (arrays)
    const citySuggestions = await page.$$('.suggestions li');
    // Expected: "Berlin, Germany" and "See all cities"
    expect(citySuggestions).toHaveLength(2);
  });

  // Scenario 3
  test('User can select a city from the suggested list', async () => {
    // To do
  });
});

// Feature 2: Show / Hide an event's details
describe('show/hide an event details', () => {
  let browser, page;

  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.Event');
  });

  afterAll(() => {
    browser.close();
  });

  // Scenario 1
  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.Event .event__Details');
    expect(eventDetails).toBeNull();
  });
  // Scenario 2
  test('User can expand an event to see its details', async () => {
    await page.click('.Event .btn-toggle-event');
    const eventDetails = await page.$('.Event .event__Details');
    expect(eventDetails).toBeDefined();
  });
  // Scenario 3
  test('User can collapse an event to hide its details', async () => {
    await page.click('.Event .btn-toggle-event');
    const eventDetails = await page.$('.Event .event__Details');
    expect(eventDetails).toBeNull();
  });
});
