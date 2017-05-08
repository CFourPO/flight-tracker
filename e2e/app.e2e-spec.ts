import { FlightTrackerPage } from './app.po';

describe('flight-tracker App', function() {
  let page: FlightTrackerPage;

  beforeEach(() => {
    page = new FlightTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
