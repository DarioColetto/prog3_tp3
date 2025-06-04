const Server = require('./server.js');
const { connectDB } = require('./models/sqlite/config/db.js');


connectDB(); // Solo esto, no llames a sequelize.sync({ force: true }) aquí

const server = new Server("ejs");
server.listen();