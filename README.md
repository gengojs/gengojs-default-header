# gengojs-default-header

The default accept plugin for gengo.js.

[![Build Status](https://travis-ci.org/iwatakeshi/gengojs-default-header.svg?branch=master)](https://travis-ci.org/iwatakeshi/gengojs-default-header)

This module is a plugified version of [gengojs-accept](https://github.com/iwatakeshi/gengojs-accept) for [gengo.js](https://github.com/iwatakeshi/gengojs).

An example usage with options is:

```js

var gengo = require('gengojs');
var header = require('gengojs-default-header');

/* In whatever framework you are using: */

// I'll use express for an example
// but it shouldn't matter

var app = require('express')();
app.use(gengo({
   // Specify the type
   // of option to modify
	header:{
		/* options */
	}
},/*header()*/));
```
The default header parser is already included in gengo.js so you should not have to require it.


##Options

```json
{
	"detect": {
	    "query": false,
	    "subdomain": false,
	    "url": false,
	    "cookie": false,
	    "header": true
  },
	"keys": {
	    "cookie": "locale",
	    "query": "locale"
  },
	"supported": ["en-US"],
	"default": "en-US"
}
```
## Internal API

* `getLocale()` returns the current locale.
* `setLocale(locale:String)` sets and returns the locale.
* `detectLocale()` detects and returns the requested locale.

**Example**:

```js
// Plugin ship
function ship(){
	// Context
	this.header.getLocale();
	this.header.setLocale('ja');
	this.header.detectLocale();
}
```

For more documentation on gengojs-accept, visit the [GitHub page](https://github.com/iwatakeshi/gengojs-accept).

## Dependencies

None

## Debug

Unix:

```bash
DEBUG=default-debug
```
Windows:

```bash
SET DEBUG=default-debug
```

## Contribute

Feel free to contribute or even fork the project. This plugin has been
written in ES6 and can be seen under `lib/index.js`.
If you would like to contribute to the header parser,
visit [gengojs-accept's GitHub page](https://github.com/iwatakeshi/gengojs-accept).
