const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({

    host: 'localhost',

    // Your port, if not 3306
    port: 3306,

    // Your MySQL username
    user: 'root',

    // Your MySQL password (leave blank for class demonstration purposes; fill in later)
    password: 'Salpointe234',

    // Name of database
    database: 'employeeDB'

});

connection.connect((err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
});

connection.query = util.promisify( connection.query )


module.exports = connection;
