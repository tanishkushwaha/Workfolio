const express = require('express')
const app = express()
const mongoose = require('mongoose')

const main = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/workfolio')
    console.log('DB connected!')
}
main().catch(err => console.log(err))

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const userModel = mongoose.model('users', userSchema)

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

app.post('/signup', (req, res) => {
    console.log(req.body)
    userModel.create({
        username: req.body.signup_user,
        email: req.body.signup_email,
        password: req.body.signup_password
    })
    res.redirect('/')
})

app.post('/create', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})


app.listen(3000, (err) => {
    if(err)
        console.log(err)
    else
        console.log('Server started!')
})