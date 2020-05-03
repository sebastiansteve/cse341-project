const express = require('express');
const router = express.Router();

const bookArray = [];
const summaryArray = [];

router.get('/',(req, res, next) => {
    res.render('pages/prove2', {
        title: 'Book Summary',
        path: '/prove2', // For pug, EJS
        titles: bookArray,
        summaries: summaryArray,
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.post('/book', (req, res, next) => {
    const newTitle = req.body.newTitle;
    const newSummary = req.body.newSummary;


    bookArray.push(newTitle);
    summaryArray.push(newSummary);

    res.redirect('/prove2/');
});

/* router.get('/book', (req, res, next) => {
    const newTitle = req.query.newTitle;
    const newSummary = req.query.newSummary;

    bookArray.push(newTitle);
    summaryArray.push(newSummary);

    res.render('pages/book', {
        title: 'Week Prove 2',
        titles: bookArray,
        summaries: summaryArray,
        path: '/book', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
}); */

module.exports = router;