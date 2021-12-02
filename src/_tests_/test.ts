import { BrowserStorage } from '../index';

test('Browser Storage', () => {
  expect(BrowserStorage.cookieStorage).toBeTruthy();
  expect(BrowserStorage.localStorage).toBeTruthy();
  expect(BrowserStorage.sessionStorage).toBeTruthy();
});
