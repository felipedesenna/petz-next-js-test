const nextJest = require("next/jest")

const createJestConfig = nextJest({ dir: "./" })

const customJestConfig = {
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  modulePaths: [
    "<rootDir>/app/"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.js"
  ],
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "app/**/*.ts(x)?"
  ],
}

module.exports = createJestConfig(customJestConfig)
