// Dependencies
const router = require('express').Router();
const storeData = require('../db/storeData');

// GET request
router.get('/notes', function (req, res) {
    storeData
        .retrieveNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

// POST request
router.post('/notes', (req, res) => {
    storeData
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

// Bonus: DELETE request
router.delete('/notes/:id', function (req, res) {
    storeData
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});

module.exports = router;