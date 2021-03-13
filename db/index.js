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
    insertDepartment( data ) {

        return connection.query ( "INSERT INTO department SET ?", 
        {
            name: data.name
        });

    },
    insertRole( data ) {

        return connection.query ( "INSERT INTO role SET ?", 
        {
            department_id: data.department_id,
            title: data.title,
            salary: data.salary
        });

    },
    insertEmployee( data ) {

        return connection.query ( "INSERT INTO employee SET ?", 
        {
            first_name: data.first_name,
            last_name: data.last_name,
            role_id: data.role_id,
            manager_id: data.manager_id
            
        });

    }
} 