const express = require("express");
const router = express.Router();
const noteController = require('../controllers/NoteController');

router.get('/notes/create', noteController.createNote);

module.exports = router;