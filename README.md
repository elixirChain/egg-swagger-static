# egg-swagger-static

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-swagger-static.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-swagger-static
[travis-image]: https://img.shields.io/travis/eggjs/egg-swagger-static.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-swagger-static
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-swagger-static.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-swagger-static?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-swagger-static.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-swagger-static
[snyk-image]: https://snyk.io/test/npm/egg-swagger-static/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-swagger-static
[download-image]: https://img.shields.io/npm/dm/egg-swagger-static.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-swagger-static

<!--
Description here.
-->

## Install

```bash
$ npm i egg-swagger-static --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.swaggerStatic = {
  enable: true,
  package: 'egg-swagger-static',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
const swaggerPath = require('egg-swagger-static').getAbsoluteFSPath();

// exports.swaggerStatic = {
  // NOT USE.
// };

// Add config of the built-in plugin: egg-static
config.static = {
  maxAge: 31536000,
  prefix: '/swg',
  dir: swaggerPath,
};
```

## Add Api docs with the specification of **OpenAPI**
> Refer to template: [swagger.yml](swagger.yml).  
  Add api.yml or api.json in the root dir of project.  

## Visit Api Page
> Api Page: http://[SERVRT_IP]:[SERVRT_PORT]/swg/index.html

see [config/config.default.js](config/config.default.js) for more detail.  
see [egg-static](https://github.com/eggjs/egg-static) for more detail.  
see [OpenAPI](https://swagger.io/docs/specification/about/) for more detail. 

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
