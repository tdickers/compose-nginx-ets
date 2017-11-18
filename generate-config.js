#!/usr/bin/env node
'use strict';

require('babel-polyfill');
const fs = require('fs');
const akamaiNginx = require('akamai-nginx');

const inFile = './json/simple_origin.json';
const outDir = './lua/';
const outFile = outDir + 'akamai.lua';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}
akamaiNginx.setLocalConfig(inFile, outFile);

// No variable support at the moment (2017-11-17/3.16.0) so sub using value map
akamaiNginx.setValueMap(
  new Map([['{{user.PMUSER_ORIGIN_HOSTNAME}}', 'www.site.test']])
);

akamaiNginx.generateConf();
