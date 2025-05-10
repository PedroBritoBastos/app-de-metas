const express = require("express");
const router = express.Router();
const noteController = require('../controllers/NoteController');

router.get('/', noteController.createNote);

module.exports = router;