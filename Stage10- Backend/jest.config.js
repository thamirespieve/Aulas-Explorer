module.exports = {
  bail: true,
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // The glob patterns Jest uses to detect test files
  testMatch: ['<rootDir>/src/**/*.spec.js']
}
