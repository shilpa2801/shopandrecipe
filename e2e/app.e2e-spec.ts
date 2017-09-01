import { ShopandrecipePage } from './app.po';

describe('shopandrecipe App', () => {
  let page: ShopandrecipePage;

  beforeEach(() => {
    page = new ShopandrecipePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
