// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
}

module.exports = config

// Or async function
module.exports = async () => {
  return {
    'collectCoverage': true,
    'collectCoverageFrom': [
      'src/**',
      '!src/@types/**',
      '!**/*.d.ts',
      '!**/node_modules/**',
      '!**/*.test.js',
      '!**/__mocks__/**',
      '!**/*.stories.js',
      '!**/*.styles.*',
      '!**/index.*',
      '!**/*.snap',
      '!**/*.json'
    ],
    'coverageDirectory': '<rootDir>/coverage/',
    'coverageReporters': [
      'lcov'
    ],
    'coverageThreshold': {
      'global': {
        'branches': 0,
        'functions': 0,
        'lines': 0,
        'statements': 0
      }
    },
    'globalSetup': '<rootDir>/jest/global.setup.js',
    'setupFiles': [
      '<rootDir>/jest/jest.setup.js'
    ],
    'testMatch': [
      '<rootDir>/src/**/__tests__/**/*.{js,jsx,tsx,ts,mjs}',
      '<rootDir>/src/**/*.(spec|test).{js,jsx,tsx,ts,mjs}'
    ],
    'testEnvironment': 'jsdom',
    'transform': {
      '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    'transformIgnorePatterns': [
      '<rootDir>/node_modules/'
    ],
    'verbose': false,
    'globals': {}
  }
}
