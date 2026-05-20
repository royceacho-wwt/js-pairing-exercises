/**
 * Returns a greeting string for the given name.
 * @param {string} [name='Bob'] - The name to greet.
 * @returns {string} The greeting message.
 */
function greet(name = 'Bob') {
  return `Hello, ${name}!`;
}

module.exports = { greet };

