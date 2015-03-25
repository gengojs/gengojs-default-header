# gengojs-default-accept
The default accept plugin for gengojs, the best i18n library for Express, Koa, Hapi.*

This module is a "plugified" version of [gengojs-accept](https://github.com/iwatakeshi/gengojs-accept) for the upcoming [gengojs](https://github.com/iwatakeshi/gengojs) **1.0.0**.

##About gengojs

gengojs **1.0.0** *will* be the successor of **0.3.63+** (since there maybe readme updates afterwards). This verion will be *completely* pluggable and pluggable as in replacing the parser, accept-header parser (aka accept), backends, localisation, and finally routers (where routers automatically route the data according to the path of the url etc). 

Sounds awesome right? If you think about it, it's not your typical "Oh I'm stuck with what I've got" i18n library, because this is a fully customizable library. 

At, the moment, I would love to have some help in creating an open standard API for communicating between plugins. If you would like to join the conversation please see the [GitHub issues](https://github.com/iwatakeshi/gengojs/issues/16).

__*__ The next version will also be able to support arbitrary frameworks due to it's architecture (for the lack of a better term). It will also be easy to create native wrappers for those frameworks. Also, because *gengojs-default-accept* is powered by *gengojs-accept*, it will be simple to extend or even create your own plugin for other frameworks. Check out the next gengojs aka the core of gengojs at the [Github](https://github.com/iwatakeshi/gengojs-core/blob/master/index.js) page.

