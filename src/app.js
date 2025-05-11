const express = require('express');
const noteRoutes = require('./routes/noteRoutes');

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({
      extended: true
    }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/notes/create', noteRoutes);
  }
}

module.exports = new App().app;