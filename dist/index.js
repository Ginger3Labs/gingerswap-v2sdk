
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./sdkmy.cjs.production.min.js')
} else {
  module.exports = require('./sdkmy.cjs.development.js')
}
