const express = require('express');
const router = express.Router();

router.get('/add', (req,res) => {
    console.log('meme added!');
    res.send('your meme has been added');
});

module.exports = router;

