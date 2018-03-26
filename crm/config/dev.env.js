'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_HOST:"http://devinner.yunxuetang.com.cn/crmbossapi/v1/"
});