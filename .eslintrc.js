module.exports = {
  env: {
    es2020: true,
    node: true,
    'jest/globals': true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'jest'
  ],
  rules: {
    indent: ['error', 2]
  }
}
