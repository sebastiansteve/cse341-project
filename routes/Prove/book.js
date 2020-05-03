const express = require('express');
const router = express.Router();

const bookArray = [];
const summaryArray = [];

router.get('/book/:newTitle/:newSummary', (req, res, next) => {
    const newTitle = req.params.newTitle;
    const newSummary = req.params.newSummary;

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
});

module.exports = router;