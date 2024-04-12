const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { sequelize, conectarBaseDeDatos } = require('./config/connection');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


const sessionStore = new SequelizeStore({
    db: sequelize
});


sessionStore.sync();


app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


conectarBaseDeDatos()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor iniciado en el puerto ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Error al conectar con la base de datos:', error);
    });


app.get('/', (req, res) => {
    res.render('index');
});
