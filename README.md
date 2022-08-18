# NextCart design system

## Setup

If you want to fix a bug or develop a new component, you must set up the following dependencies first.

1. Run `yarn add --dev react@17.0.2 react-dom@17.0.2` to install react and react-dom as dev dependencies.
2. Run `yarn storybook`.
3. You must remove those dependencies after you finished your development _and_ if you want to build the design system to test the components on another application.

Unfortunately, we can't bundle react and react-dom as dev dependencies because of the react hooks call validation, you can see more [here](https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react).

## Building the components

Make sure you don't have `react` and `react-dom` listed in dev dependencies to do a clean build(`rm -rf node_modules && yarn`).

## Commands

`yarn build` - Generates a new bundle with the changes you've made to the code.

`yarn test` - Run all tests

`yarn storybook` - Run the local storybook on port 6006.
