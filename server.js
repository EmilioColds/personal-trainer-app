const express = require('express');
const session = require('express-session');
const withAuth = require('./utils/auth');
const exphbs = require('express-handlebars').engine;
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//////////////////////////////////////////////////
// Código de branch Handlebars para visualizar

const app = express();
const PORT = 3003;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('homepage', { layout : 'main' });
});

app.get('/routine', withAuth, (req, res) => { //AGREGAR withAuth
    res.render('routine', { layout : 'main' });
});

app.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/routine');
    } else {
        res.render('login');
    }
});

app.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/routine');
    } else {
        res.render('signup');
    }
});

app.get('/questionnaire', withAuth, (req, res) => { //AGREGAR withAuth
    res.render('questionnaire', { layout : 'main' });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

/////////////////////////////////////////////////////////