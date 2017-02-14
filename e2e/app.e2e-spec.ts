import { ExpencesTrackerPage } from './app.po';

describe('expences-tracker App', function() {
  let page: ExpencesTrackerPage;

  beforeEach(() => {
    page = new ExpencesTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
