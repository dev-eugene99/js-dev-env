# Javascript Starter Pack (July 2018) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Build Status](https://travis-ci.org/dev-eugene99/js-dev-env.svg?branch=master)](https://travis-ci.org/dev-eugene99/js-dev-env) 

An all-in-one, pre-configured NodeJS/Express starter project with scripting, transpiling, bundling, linting, testing, and CI built in.

## Background

Inspired by [Cory House](https://github.com/coryhouse)'s Pluralsight course on "[Building a JavaScript Development Environment](https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents)", this project is an updated version with a few key differences:

- `npm audit` is used instead of `nsp`.
- no longer using `open` package due to security concerns.
- various config changes with updated version of various packages.
- newer versions of most packages are used (i.e. babel, webpack etc)

## The Stack

This project is to help a NodeJS Javascript developer start off with a fully configured project ready for javascript development.

It has the following:

- Package Manager: `npm`
- Server: NodeJS + `expressJS`
- Sharing WIP: `localtunnel`
- Scripting: `npm scripts`
- Transpiling: `babel`
- Bundling: `webpack`
- Linting: `eslint`
- Testing: `mocha` + `chai` + `jsdom`
- CI: [travis-ci](https://travis-ci.org/) + [appveyor](https://www.appveyor.com/)
- Polyfill: [polyfill.io](https://polyfill.io/v2/docs/)
- Mock HTTP: `nock`
