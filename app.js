'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');

const indexRouter = require('./routes');

const app = express();
const port = process.env.PORT || 3000;
const corsConfig = {
  origin: process.env.CORS_ORIGIN || false,
};

/* ========== Middlewares ========== */

app.use(express.json());
app.use(cors(corsConfig));

/* ========== Routes ========== */

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port} ...`);
});
