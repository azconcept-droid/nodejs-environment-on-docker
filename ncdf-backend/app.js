'use strict';

const express = require('express');

// Constants
const PORT = 8090;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/api/v1', (req, res) => {
  res.status(200).json({
    status: 'Ok',
    message: "Welcome to ncdf backend robust api"
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
