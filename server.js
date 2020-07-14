const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const PORT = process.env.PORT || 3001;

const app = express();
const passport = require('./passport/setup');
const routes = require('./routes');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/medCheck', { useNewUrlParser: true });

// Define middleware here
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Express Session
app.use(
  session({
    secret: 'very secret this is',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  }),
);

// Passport middleware
app.use(passport.initialize());

app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  // app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  });
}

// Define API routes here
// Define any API routes before this runs

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
