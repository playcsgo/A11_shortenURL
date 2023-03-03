const express = require('express')
const router = express.Router()
const shortenURLModle = require('../../models/shortenURL-model')

router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router