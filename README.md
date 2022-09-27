# NextCart design system

## Setup

If you want to fix a bug or develop a new component, you must set up the following dependencies first.

1. Run `yarn` to install dev dependencies.
2. Run `yarn storybook` to view all the components on Storybook.

## Building the components

Make sure you don't have `react` and `react-dom` listed in dev dependencies to do a clean build(`rm -rf node_modules && yarn`).

Unfortunately, we can't bundle react and react-dom as dev dependencies because of the react hooks call validation, you can see more [here](https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react).

## Commands

`yarn build` - Generates a new bundle with the changes you've made to the code.

`yarn test` - Run all tests

`yarn storybook` - Run the local storybook on port 6006.

## Using the design system with Next.js

Follow the step 3 from this [guide](https://stitches.dev/blog/using-nextjs-with-stitches#step-3-ssr). But instead of importing the `getCssText` method from stitches itself, import from `@next-cart-dev/design-system`
