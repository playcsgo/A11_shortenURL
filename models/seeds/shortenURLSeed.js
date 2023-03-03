const shortenURLModel = require('../shortenURL-model')
require('dotenv').config({ path: __dirname + '/../../.env' })
const db = require('../../config/mongoose')

db.once('open', () => {
  const test1 = { shortenURL: '123', originalURL:'123456789' }
  const test2 = { shortenURL: 'abc', originalURL:'abcdefghij'}
  shortenURLModel.create(test1)
  shortenURLModel.create(test2)
  console.log('done');
})