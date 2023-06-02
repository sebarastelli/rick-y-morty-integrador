const PORT = 3001;
const server = require("./app");
const { conn } = require('./DB_connection');


server.listen(PORT, async() => {
    console.log('Server raised in port: ' + PORT);
    await conn.sync({force: false});
    console.log("entre a DB")
 });
