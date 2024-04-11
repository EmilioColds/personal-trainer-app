const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars').engine;
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//////////////////////////////////////////////////
// Código de branch Handlebars para visualizar

const app = express();
const PORT = 3001;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('main', { layout : 'main' });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

/////////////////////////////////////////////////////////