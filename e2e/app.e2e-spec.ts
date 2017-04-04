import { Carapp2Page } from './app.po';

describe('carapp2 App', () => {
  let page: Carapp2Page;

  beforeEach(() => {
    page = new Carapp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
