const nextJest = require("next/jest")

const createJestConfig = nextJest({ dir: "./" })

const customJestConfig = {
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  modulePaths: [
    "<rootDir>/app/"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.js"
  ],
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "app/**/*.ts(x)?"
  ],
}

module.exports = createJestConfig(customJestConfig)
