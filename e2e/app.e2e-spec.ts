import { NgD3DemoPage } from './app.po';

describe('ng-d3-demo App', () => {
  let page: NgD3DemoPage;

  beforeEach(() => {
    page = new NgD3DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
