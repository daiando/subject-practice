import { SubjectPracticePage } from './app.po';

describe('subject-practice App', function() {
  let page: SubjectPracticePage;

  beforeEach(() => {
    page = new SubjectPracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('testapp works!');
  });
});
