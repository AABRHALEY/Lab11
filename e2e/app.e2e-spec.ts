import { AngularLabPage } from './app.po';

describe('angular-lab App', () => {
  let page: AngularLabPage;

  beforeEach(() => {
    page = new AngularLabPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
