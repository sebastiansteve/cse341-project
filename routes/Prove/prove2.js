const express = require('express');
const router = express.Router();

const bookArray = [];

router.post('/addBook', (req, res, next) => {
    const newTitle = req.body.newTitle;
    const newSummary = req.body.newSummary;

    bookArray.push(newTitle);
    bookArray.push(newSummary);

    res.redirect('/prove2/');
});

router.get('/',(req, res, next) => {
    res.render('pages/prove2', {
        title: 'Week Prove 2',
        books: bookArray,
        path: '/prove2', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;