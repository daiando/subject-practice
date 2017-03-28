import { browser, element, by } from 'protractor';

export class SubjectPracticePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('testapp-root h1')).getText();
  }
}
