const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/create', (req, res) => {
    res.render('create_resume.ejs')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

app.post('/create', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})


app.listen(3000)