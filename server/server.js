const express = require('express');
const app = express();
const PORT = 5002;

app.use(express.static('server/public'));
app.use(express.urlencoded());
// Variables and functions
let equationArray = [];
let operation = opButton();

function opButton() {

}

// GET & POST request
app.post('/equation', (req, res) =>{
    const eqIn = req.body
    if (operation === '+') {
        eqIn.calculation = eqIn.valueOne + eqIn.valueTwo;
    } else if (operation === '-') {
        euIn.calculation = eqIn.valueOne - eqIn.valueTwo;
    } else if (operation === '*') {
        eqIn.calculation = eqIn.valueOne * eqIn.valueTwo;
    } else if (operation === '/') {
        eqIn.calculation = eqIn.valueOne / eqIn.valueTwo;
    }
    equationArray.push(eqIn);
    res.sendStatus(201);
})


//Listen to the port. (LAST)
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});