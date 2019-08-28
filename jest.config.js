module.exports = {
  bail: false,
  collectCoverage: true,
  collectCoverageFrom: [
    'generators/**/*.js',
    '!**/node_modules/**',
    '!**/.*'
  ],
  coverageReporters: [
    'text'
  ],
  coverageThreshold: {
    global: {
      /* eslint-disable no-magic-numbers */
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
      /* eslint-enable */
    }
  },
  verbose: true
};
