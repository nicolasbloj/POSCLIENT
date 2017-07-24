import { PosclientPage } from './app.po';

describe('posclient App', () => {
  let page: PosclientPage;

  beforeEach(() => {
    page = new PosclientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
