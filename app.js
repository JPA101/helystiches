const express = require('express');
const path = require('path')

//epress app
const app = express();

app.use(express.urlencoded({ extended: false }))

//static ffile
app.use(express.static(path.join(__dirname, "public")))
    //eja
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const port = process.env.PORT || 3000;


//route 1
app.get('/', (req, res) => {
    res.render("index")

})

//route2
app.get('/index', (req, res) => {
    res.render("index")

})

//route 3
app.get('/services', (req, res) => {
    res.render("services")

})

//route4
app.get('/gellary', (req, res) => {
    res.render("gellary")

})

//route5
app.get('/about', (req, res) => {
    res.render("about")

})

//route6
app.get('/contact', (req, res) => {
    res.render("contact")

})


//route 2
app.post('/login', (req, res) => {
    if (req.body.color.trim().toUpperCase() === 'WHITE') {
        res.send('you are correct brother')
    } else {
        res.send('that is incorrect')
    }
})

//server port listener
app.listen(port, (req, res) => {
    console.log(`App listening to port ${port}`)
})