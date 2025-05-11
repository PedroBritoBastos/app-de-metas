const express = require("express");
const router = express.Router();
const noteController = require('../controllers/NoteController');

router.post('/notes/create', noteController.createNote);

module.exports = router;