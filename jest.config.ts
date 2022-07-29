module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePaths: ["<rootDir>/src/"],
  transform: {
    "^.+\\.(ts|tsx)?$": "esbuild-jest"
  },
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer"
  }
}
