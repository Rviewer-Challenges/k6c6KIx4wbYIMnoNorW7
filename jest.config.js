// require('jest-preset-angular/ngcc-jest-processor');
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");

const esModules = [".*\\.mjs$"].join("|");

module.exports = {
  maxWorkers: '50%',
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
  moduleNameMapper: Object.assign(
    pathsToModuleNameMapper(compilerOptions.paths || {}, {
      prefix: '<rootDir>/src',
    })
  ),
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  cacheDirectory: '<rootDir>/.cache',
};


