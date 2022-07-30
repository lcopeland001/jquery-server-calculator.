const express = require('express');
const app = express();
const port =process.env.PORT || 5002
app.use(exrpess.static('server/public'));

// variables and functions

//GET & POST request