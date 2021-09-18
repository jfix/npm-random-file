select-random-file
==================

[![Build status](https://github.com/jfix/npm-random-file/actions/workflows/test.yml/badge.svg)](https://github.com/jfix/npm-random-file/actions)

Select a random file from a provided directory:

```
const randomFile = require('select-random-file')

const dir = '/tmp/whatever'
randomFile(dir, (err, file) => {
  console.log(`The random file is: ${file}.`)
})
```

There are a couple of things that could be added:

* filter files by an extension
* recursively traverse a deeper directory structure

Acknowledgements
----------------

Discussion on Stack Overflow was very useful: http://stackoverflow.com/questions/42425887/how-to-use-an-async-function-as-compare-function-of-array-filter
