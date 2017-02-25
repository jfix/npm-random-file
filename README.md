random-file
===========

Select a random file from a provided directory:

```
const rf = require('random-file')

const dir = '/tmp/whatever'
rf.randomFile(dir, (err, file) => {
  console.log(`The random file is: ${file}.`)
})
```

There are a couple of things that could be added:

* filter files by an extension
* recursively traverse a deeper directory structure
