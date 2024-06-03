const express = require('express')

const path = require('path')

const port = 8081;

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
    return res.render('layout')
})

app.get('/form-basic', (req, res) => {
    return res.render('./pages/form-basic') 
})
app.get('/form-wizard', (req, res) => {
    return res.render('./pages/form-wizard')
})
app.get('/charts', (req, res) => {
    return res.render('./pages/charts')
})
app.get('/widgets', (req, res) => {
    return res.render('./pages/widgets')
})
app.get('/tables', (req, res) => {
    return res.render('./pages/tables')
})
app.get('/grid', (req, res) => {
    return res.render('./pages/grid')
})
app.get('/pages-buttons', (req, res) => {
    return res.render('./pages/pages-buttons')
})

app.get('/icon-material', (req, res) => {
    return res.render('./pages/icon-material')
})

app.get('/icon-fontawesome', (req, res) => {
    return res.render('./pages/icon-fontawesome')
})

app.get('/pages-elements', (req, res) => {
    return res.render('./pages/pages-elements')
})
app.get('/index2', (req, res) => {
    return res.render('./pages/index2')
})
app.get('/pages-gallery', (req, res) => {
    return res.render('./pages/pages-gallery')
})
app.get('/pages-calendar', (req, res) => {
    return res.render('./pages/pages-calendar')
})

app.get('/pages-invoice', (req, res) => {
    return res.render('./pages/pages-invoice')
})

app.get('/pages-chat', (req, res) => {
    return res.render('./pages/pages-chat')
})

app.get('/authentication-login', (req, res) => {
    return res.render('./pages/authentication-login')
})


app.get('/authentication-register', (req, res) => {
    return res.render('./pages/authentication-register')
})


app.listen(port, (err) => {
    if (err) {
        console.log("server is not started!");
        return false
    }
    console.log("server started at http://localhost:" + port)
})
