/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    // Set to "node" for packages that do not use React/JSX
    testEnvironment: 'jsdom',
    testMatch: ['**/*.test.(ts|tsx)'],
    globals: {
      'ts-jest': {
        tsconfig: {
          jsx: 'react-jsx',
        },
      },
    },
  };