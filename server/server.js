const express = require('express');
const app = express();
const PORT = 5002;

app.use(express.static('server/public'));
app.use(express.urlencoded());
// Variables and functions



// GET & POST request



//Listen to the port. (LAST)
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});