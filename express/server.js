const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const firebase = require('firebase/app');
require('firebase/firestore');

/* SECTION: CORS */
const allowedCORSDomains = [
  'http://localhost:3000',
];
const corsOptions = {
  origin(origin, callback) {
    if (allowedCORSDomains.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

/* SECTION: FIREBASE */
const firebaseConfig = {
  // ...
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/* SECTION: SERVER SETUP */
const app = express();
app.use(cors(corsOptions));
app.use(morgan('tiny'));

/* SECTION: ROUTES */
app.get('/ping', (_req, res) => res.send('pong'));

app.listen(process.env.PORT || 8080);
