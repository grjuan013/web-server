const express = require('express')
const app = express()
var hbs  = require('hbs')

app.use(express.static('public'))
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) {});



app.get('/', (req, res) => {
    res.render('home',{
        titulo: 'Topicos Av',
        nombre: 'Juan Grijalba'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic',{
        titulo: 'Topicos Av',
        nombre: 'Juan Grijalba'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements',{
        titulo: 'Topicos Av',
        nombre: 'Juan Grijalba'
    })
})

app.listen(3000)