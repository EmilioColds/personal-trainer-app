const express = require('express');
const session = require('express-session');
const path=require("path");

const exphbs = require('express-handlebars').engine;
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { sequelize } = require('./config/connection'); // Import Sequelize connection. Checar que esto matchee
const apiRoutes = require('./controllers/api');
const homeRoutes = require('./controllers/homeRoutes');


const app = express();
const PORT = 3003;


//session checar que coincida
const sess = {
    secret: process.env.SESSION_SECRET || 'Super secret',
    cookie: { maxAge: 15 * 60 * 1000 }, //Session will expire after 15 minutes
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));
// Configure Handlebars as the view engine
app.engine('handlebars', exphbs({defaultLayout:"main"}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Mount main router
app.use('/', homeRoutes);
app.use('/api', apiRoutes);

// Sync Sequelize models with the database and start the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch(error => {
    console.error('Database connection error:', error);
});