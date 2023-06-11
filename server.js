const express = require('express');
const axios = require('axios');//This imports the axios library for making HTTP requests
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

app.get('/', async (req, res) => {
    const randomIndex = Math.floor(Math.random() * 10);
    let personResponse = await axios(`https://swapi.dev/api/people/${randomIndex}`);
    const ejsVarObject = {
        pageName: "Home",
        content: "Here is a random person from an API!",
        personName: personResponse.data.name
        
    };
    res.render('home', ejsVarObject);
});

app.get('/about', (req, res) => {
    const ejsVarObject = {
        pageName: "About",
        content: "Welcome to the about page"
    };
    res.render('about', ejsVarObject);
});

app.get('/contact', (req, res) => {
    const ejsVarObject = {
        pageName: "Contact",
        content: "Get in touch with us."
    };
    res.render('contact', ejsVarObject);
});

app.listen(port, () => {
    console.log('Listening on port', port);
});