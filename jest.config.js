const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

const esModules = ['.*\\.mjs$'].join('|'); // in case of es modules include here.

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverage: true,
  coverageReporters: ['html'],
  collectCoverageFrom: ["src/**/*.ts"],
  coverageDirectory: 'coverage/app',
  coveragePathIgnorePatterns: [
    "<rootDir>/src/main.ts",
    "<rootDir>/src/polyfills.ts",
    ".module.ts",
    "<rootDir>/src/__test__/*",
    "<rootDir>/src/environments/*"
  ],
  moduleNameMapper: Object.assign(pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/src',
  }), {
  }),
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  maxWorkers: '50%',
  cacheDirectory: '<rootDir>/.cache',
};
