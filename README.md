# gengojs-default-header

The default accept plugin for gengo.js, the best i18n library for Express, Koa, Hapi.*

[![Build Status](https://travis-ci.org/iwatakeshi/gengojs-default-header.svg?branch=master)](https://travis-ci.org/iwatakeshi/gengojs-default-header)

This module is a "plugified" version of [gengojs-accept](https://github.com/iwatakeshi/gengojs-accept) for the upcoming [gengo.js](https://github.com/iwatakeshi/gengojs) **1.0.0**.

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
The default header parser is already included in gengojs so you should not have to require it.


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
