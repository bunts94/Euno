import { EuknoReleasePage } from './app.po';

describe('eukno-release App', () => {
  let page: EuknoReleasePage;

  beforeEach(() => {
    page = new EuknoReleasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
