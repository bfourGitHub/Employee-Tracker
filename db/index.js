const connection = require("./connection");

module.exports = {
    
    getDepartments() {

        return connection.query( "SELECT * FROM department" );

    },
    getRoles() {

        return connection.query( "SELECT * FROM role" );

    },
    getEmployees() {

        return connection.query( "SELECT * FROM employee" );

    },
    insertRole( data ) {

        return connection.query ( "INSERT INTO role SET ?", 
        {
            department_id: data.department_id,
            title: data.title,
            salary: data.salary
        });

    }
} 