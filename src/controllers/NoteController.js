class NoteController {
  createNote(req, res) {
    res.json({
      msg: "create note"
    })
  }
}

module.exports = new NoteController();