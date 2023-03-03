//express
const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')

// handlebars
const exphbs = require('express-handlebars')
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

//method override
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

//static file
app.use(express.static('public'))

//body parser
app.use(express.urlencoded({ extended:true }))

//mongoose
require('./config/mongoose')


app.use(routes)
app.listen(port, () => {
  console.log(`express is runing on http://localhost${port}`)
})