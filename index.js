const express = require('express'); 
const memeRouter = require('./routers/memeRouter');

const app = express();
const port = 5000;


app.get('/home', (req, res) => {
    console.log('request at home');
    res.send('the wait is over');
});

app.listen(port, () => {
        console.log('Server started');
});



