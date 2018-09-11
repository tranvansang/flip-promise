# Flip Promise [![Build Status](https://travis-ci.org/tranvansang/flip-promise.svg?branch=master)](https://travis-ci.org/tranvansang/flip-promise)
[![NPM](https://nodei.co/npm/flip-promise.png)](https://nodei.co/npm/flip-promise/)

To flip promise returning result

## Install

Via npm package manager

```bash
npm install --save flip-promise
#or with yarn
yarn add flip-promise
```

## Usage example:


```javascript
import flipPromise from 'flip-promise'

flipPromise(Promise.reject(1)).then(console.log) // print 1
flipPromise(flipPromise(2)).then(console.log) // print 2
flipPromise(3).catch(console.log) // print 3
flipPromise(Promise.resolve(4)).catch(console.log) // print 4
```
