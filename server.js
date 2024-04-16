const express = require('express');
const session = require('express-session');

const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { sequelize } = require('./config/connection'); // Import Sequelize connection. Checar que esto matchee
const router = require('./index.js'); // Import main router


const app = express();
const PORT = 3003;


// Configure Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));



// Mount main router
app.use(index);

// Sync Sequelize models with the database and start the server
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listening at http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });

