const { createPromptModule } = require("inquirer");
const inquirer = require("inquirer");
const db = require("./db");
const connection = require("./db/connection")


function askForAction() {
    inquirer
        .prompt({
            message: "What would you like to do?",
            name: "action",
            type: "list",
            choices: [
                "VIEW_DEPARTMENTS",
                "VIEW_ROLES",
                "VIEW_EMPLOYEES",
                "CREATE_ROLE",
                "QUIT"
            ]
        })
        .then((res) => {

            switch (res.action) {

                case "VIEW_DEPARTMENTS":
                    break;

                case "VIEW_ROLES":
                    break;

                case "VIEW_EMPLOYEES":
                    break;

                case "CREATE_ROLE":
                    createRole();
                    break;

                default:
                    connection.end();

            }
        });
}

function viewDepartments() {

    // Must Promisify connection.query in connection and index.js needs to return connection.query in module.exports
    db.getDepartments.then((results) => {
        console.table(results);
        askForAction();
    });

}

function createRole() {

    db.getDepartments().then((departments) => {

        const departmentChoices = departments.map((department) => ({
            value: department.id,
            name: department.name
        }))

        inquirer.prompt([
            {
                message: "What department is this role for?",
                type: "list",
                name: "department_id",
                choices: departmentChoices
            }
        ]).then(res => {

            console.log(res);

        })

    })

}

askForAction();

