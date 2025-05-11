const express = require("express");
const router = express.Router();
const noteController = require('../controllers/NoteController');

router.post('/notes/create', noteController.createNote);
router.get('/notes', noteController.getAll);
router.get('/notes/:id', noteController.getNoteById);

module.exports = router;