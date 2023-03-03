const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortenURLSchema = new Schema ({
  shortenURL: {type: String, required: true},
  originalURL: {type: String, required: true}
})

module.exports = mongoose.model('urlpair', shortenURLSchema)