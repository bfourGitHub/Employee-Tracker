const connection = require("./connection");

module.exports = {

    getDepartments() {

        return connection.query("SELECT * FROM department");

    },
    getRoles() {

        return connection.query("SELECT * FROM role");

    },
    getEmployees() {

        return connection.query("SELECT * FROM employee");

    },
    insertDepartment(data) {

        return connection.query("INSERT INTO department SET ?",
            {
                name: data.name
            });

    },
    insertRole(data) {

        return connection.query("INSERT INTO role SET ?",
            {
                department_id: data.department_id,
                title: data.title,
                salary: data.salary
            });

    },
    insertEmployee(data) {

        return connection.query("INSERT INTO employee SET ?",
            {
                first_name: data.first_name,
                last_name: data.last_name,
                role_id: data.role_id,
                manager_id: data.manager_id

            });

    },
    updateEmpRole(data) {
        return connection.query("UPDATE employee SET ? WHERE ?",
            [
                {
                    role_id: data.role_id
                },
                {
                    id: data.id
                }
            ]);
    },
    deleteDepartments(data) {

        return connection.query("DELETE FROM department WHERE ?",
        {
            id: data.id
        });

    },
    deleteRoles(data) {

        return connection.query("DELETE FROM role WHERE ?",
        {
            id: data.id
        });

    },
    deleteEmployees(data) {

        return connection.query("DELETE FROM employee WHERE ?",
        {
            id: data.id
        });

    }
}