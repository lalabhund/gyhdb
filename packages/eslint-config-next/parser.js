const {
  meta,
  parse,
  parseForESLint,
} = require('next/dist/compiled/babel/eslint-parser')
const { version } = require('./package.json')

module.exports = {
  meta,
  parse,
  parseForESLint,
  meta: {
    name: 'eslint-config-next/parser',
    version,
  },
}
