// import Express, method-override, routes, and Handlebars
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const routes = require('./routes/index')
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/public'))

// Links the server to our Router File
app.use('/', routes)
// this means, if the user goes to the root page, then do what's specified in routes (which is set to ./routes/index).

// Connect Mongoose to "sportstown"
const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})