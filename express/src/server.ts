import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

dotenv.config();

/* SECTION: CORS */
const allowedOrigins = ['https://localhost:8080'];
const corsOptions = {
  origin: allowedOrigins,
};

/* SECTION: FIREBASE */
const firebaseConfig = {
  // ...
};

initializeApp(firebaseConfig);
const _db = getFirestore();

/* SECTION: SERVER SETUP */
const app = express();
app.use(cors(corsOptions));
app.use(morgan('tiny'));

/* SECTION: ROUTES */
app.get('/ping', (_req, res) => res.send('pong'));

app.listen(process.env.PORT || 8080);
