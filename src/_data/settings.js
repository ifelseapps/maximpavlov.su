require('dotenv').config()

module.exports = function () {
  return {
    mode: process.env.MODE || 'production',
  }
}
