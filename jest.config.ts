module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'js', 'json', 'vue'],
  moduleDirectories: ['src', 'node_modules'],
  transform: {
    '^.+.vue$': 'vue-jest',
    '^.+.jsx?$': '<rootDir>/node_modules/babel-jest',
    '^.+.js$': '<rootDir>/node_modules/babel-jest',
  },
  testMatch: ['<rootDir>/**/*.test.ts'],
  verbose: true,
  // setupFiles: ['<rootDir>/jest.setup.js'],
  // globalSetup: '<rootDir>/jest.setup.js',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
