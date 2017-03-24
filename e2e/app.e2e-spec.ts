import { NgCLIstartPage } from './app.po';

describe('ng-clistart App', () => {
  let page: NgCLIstartPage;

  beforeEach(() => {
    page = new NgCLIstartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
