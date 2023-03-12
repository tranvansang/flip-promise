# Flip Promise [![Build Status](https://travis-ci.org/tranvansang/flip-promise.svg?branch=master)](https://travis-ci.org/tranvansang/flip-promise)
[![NPM](https://nodei.co/npm/flip-promise.png)](https://nodei.co/npm/flip-promise/)

![Codecov block](https://codecov.io/gh/tranvansang/flip-promise/branch/master/graphs/tree.svg)

A package to flip the returned promise.

## Install

Via npm package manager

```bash
npm install --save flip-promise
#or with yarn
yarn add flip-promise
```

## Usage
There is only one function from default import

```javascript
import flipPromise from 'flip-promise'
// or
const flipPromise = require('flip-promise').default
```

`flipPromise` takes one argument, return a new promise that will be resolved with error rejected by input promise, or be rejected with resolved result from input promise or the input argument value itself unless the input argument is a promise.

## Usage example:


```javascript
import flipPromise from 'flip-promise'

flipPromise(Promise.reject(1)).then(console.log) // print 1
flipPromise(flipPromise(2)).then(console.log) // print 2
flipPromise(3).catch(console.log) // print 3
flipPromise(Promise.resolve(4)).catch(console.log) // print 4
```

This is useful when writing test to make sure a promise being rejected.

Another example:

```javascript
const myPromise = Promise.reject(true)
expect(await flipPromise(myPromise)).to.be.true
```
