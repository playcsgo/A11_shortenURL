const express = require('express')
const router = express.Router()
const shortenURLModle = require('../../models/shortenURL-model')

const characters = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "0","1","2","3","4","5","6","7","8","9"
]

router.post('/new', (req, res) => {
  inputURL = req.body.inputURL
  const database = {}
  let counter = 1
  let newURL = ''

  //如果沒有輸入則導回首頁
  if (!req.body.inputURL) {
    return res.redirect('/')
  }
  
  //先把資料抓下來, 為了要比對, 確保不出現一樣的短網址
  shortenURLModle.find({})
    .lean()
    .then(data => {
      data.forEach(data => {
        database[data.shortenURL] = data.originalURL
      })

      //做一個獨一無二的key
      while (counter > 0) {
        for (let i = 0; i < 5; i++) {
           newURL += characters[Math.floor(Math.random() * characters.length)]
         }
        if (newURL in database == false) {
          counter --
        }
      }
      // 如果資料庫已經有原始網站的資料了就使用資料庫資料, 沒有的話就配一個隨機短網址
      shortenURLModle.findOne({ originalURL: inputURL })
        .lean()
        .then(data => {
          return data ? data : shortenURLModle.create({ shortenURL: newURL, originalURL: inputURL })
        })
        .then(data => {
          const shortenURL = 'http://localhost:3000/shortenURL/' + data.shortenURL
          res.render('new', { shortenURL } )
        })
    })
})

//接收短網址, 找到原始網址, 重新導向
router.get('/:url', (req, res) => {
  const receivedURL = req.params.url
  shortenURLModle.findOne({ shortenURL: receivedURL })
    .lean()
    .then(data => {
      if (!data) {
        res.render('error')
      } else {
        const originalURL = data.originalURL
        res.redirect(originalURL)
      }
    })
})

module.exports = router