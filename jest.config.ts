const esModules = ["react-icons"].join("|")

module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePaths: ["<rootDir>/src/"],
  transform: {
    "^.+\.(ts|tsx)?$": "esbuild-jest"
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  moduleNameMapper: {
    "^.+\.svg$": "jest-svg-transformer"
  }
}