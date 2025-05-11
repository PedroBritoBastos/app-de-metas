const app = require('./src/app');
const databaseConnection = require('./src/database/mongodb');

app.listen(3000, () => {
  console.log("escutando");
  databaseConnection();
});