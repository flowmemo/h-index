# h-index
calculate h-index, i10-index, and g-index of a given array.

[![Travis branch](https://img.shields.io/travis/flowmemo/h-index/master.svg?style=flat-square)](https://travis-ci.org/flowmemo/h-index)
[![npm](https://img.shields.io/npm/v/h-index.svg?style=flat-square)](https://www.npmjs.com/package/h-index)

## Usage
`$ npm install h-index`

```js
var hindex= require('h-index')
console.log(hindex([1, 11, 4, 6, 9, 4, 15]))
// { h: 4, i10: 2, g: 7, sum: 50}
```

## License
MIT © [flowmemo](http://weibo.com/flowmemo)