jest.mock('./index.js');
const showCounter = require('./index.js');

describe('Adding a new show', () => {
  test('Adding show counter', () => {
    expect(showCounter()).toEqual(1);
    showCounter();
    showCounter();
    showCounter();
    showCounter();
    expect(showCounter()).toEqual(6);
  });
});