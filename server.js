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

const userDetails = mongoose.Schema({
    job_title: String,
    first_name: String,
    last_name: String,
    email: String,
    phone: Number,
    country: String,
    city: String,
    address: String,
    postal_code: String,
    experience: String,
    school: String,
    degree: String,
    start_date: Date,
    end_date: Date,
    school_city: String,
    education_description: String,
    social_links: String,
    skills: String,
    hobbies: String
})

const userModel = mongoose.model('users', userSchema)
const userResumeModel = mongoose.model('user_details', userDetails)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/dummy_page', (req, res) => {
    res.render('dummy_page.ejs')
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
    userResumeModel.create({
        job_title: req.body.job_title,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        country: req.body.country,
        city: req.body.city,
        address: req.body.address,
        postal_code: req.body.postal_code,
        experience: req.body.experience,
        school: req.body.school,
        degree: req.body.degree,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        school_city: req.body.school_city,
        education_description: req.body.education_description,
        social_links: req.body.social_links,
        skils: req.body.skills,
        hobbies: req.body.hobbies
    })
    res.redirect('/')
})


app.listen(3000, (err) => {
    if(err)
        console.log(err)
    else
        console.log('Server started!')
})