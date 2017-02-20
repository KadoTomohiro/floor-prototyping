import { FloorPrototypingPage } from './app.po';

describe('floor-prototyping App', function() {
  let page: FloorPrototypingPage;

  beforeEach(() => {
    page = new FloorPrototypingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
