module.exports = {
    bail: true,
    collectCoverage: true,
    collectCoverageFrom: [
        'generators/**/*.js',
        '!**/node_modules/**'
    ],
    coverageReporters: [
        'text'
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    },
    verbose: false
};
