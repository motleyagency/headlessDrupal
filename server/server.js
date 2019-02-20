import path from 'path';
import fs from 'fs';

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App'

import ssr from './middlewares/ssr';

const app = express();
const PORT = process.env.PORT || 3000;

// const router = express.Router();

app.use('/',
  express.static(path.resolve(__dirname, '..', 'build'), { index: false, maxAge: '1d' })
);

app.use('/', ssr);

// app.use(router);

app.listen(PORT, () => {
  console.log(`APP LISTENING ON PORT ${PORT}`)
});

export default app;
