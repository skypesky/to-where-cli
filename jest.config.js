/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coverageDirectory: "coverage",
  clearMocks: true,
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  testMatch: ["**/tests/**/*.spec.ts"],
};
