const express = require('express');
const app = express();
const PORT = 5002;

app.use(express.static('server/public'));
app.use(express.urlencoded());
// Variables and functions
let equationArray = [];

// GET & POST request
app.post('/equation', (req, res) =>{
    const eqIn = req.body
    let valOne = Number(eqIn.valueOne);
    let valTwo = Number(eqIn.valueTwo);
    let theOp = eqIn.operationIn;
    if (theOp === '+') {
        eqIn.calculation = valOne + valTwo;
    } else if (theOp === '-') {
        eqIn.calculation = valOne - valTwo;
    } else if (theOp === '*') {
        eqIn.calculation = valOne * valTwo;
    } else if (theOp === '/') {
        eqIn.calculation = valOne / valTwo;
    }
    equationArray.push(eqIn);
    res.sendStatus(201);
    console.log(valOne, valTwo, 'Eq array:', equationArray,);
});

app.get('/equation', (req, res) => {
    res.send(equationArray);
});


//Listen to the port. (LAST)
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});