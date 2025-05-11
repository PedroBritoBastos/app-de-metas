const Note = require('../models/NoteModel');

class NoteController {

  async createNote(req, res) {
    // getting the data sent from request
    const {
      title,
      content,
      deadline,
      createdAt
    } = req.body;

    /**
     * making validations 
     */
    if (!title) {
      res.status(400).json({
        msg: "Titulo é obrigatório."
      });
      return;
    }

    if (!deadline) {
      res.status(400).json({
        msg: "Data limite é obrigatória."
      });
      return;
    }

    /**
     * if valitations OK, then create a register
     */
    const note = new Note({
      title,
      content,
      deadline,
      createdAt
    });
    await note.save();
    res.json({
      msg: "nota criada com sucesso!"
    });
  }
}

module.exports = new NoteController();