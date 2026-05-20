const { greet } = require('./hello');

describe('greet', () => {
  test('returns "Hello, World!" when no argument is provided', () => {
    expect(greet()).toBe('Hello, World!');
  });

  test('returns "Hello, World!" when called with "World"', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  test('returns a personalised greeting for a given name', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
  });

  test('returns a greeting for any non-empty string', () => {
    expect(greet('JavaScript')).toBe('Hello, JavaScript!');
  });
});

