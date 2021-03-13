const { createPromptModule } = require("inquirer");
const inquirer = require("inquirer");
const db = require("./db");
const connection = require("./db/connection");




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
                "ADD_DEPARTMENTS",
                "ADD_ROLES",
                "ADD_EMPLOYEES",
                "QUIT"
            ]
        })
        .then((res) => {

            switch (res.action) {

                case "VIEW_DEPARTMENTS":
                    viewDepartments();
                    break;

                case "VIEW_ROLES":
                    viewRoles();
                    break;

                case "VIEW_EMPLOYEES":
                    viewEmployees();
                    break;

                case "ADD_DEPARTMENTS":
                    addDepartment();
                    break;
    
                case "ADD_ROLES":
                    addRoles();
                    break;
    
                case "ADD_EMPLOYEES":
                    addEmployees();
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
    db.getDepartments().then((results) => {
        console.table(results);
        askForAction();
    });

}

function createRole() {

    db.getDepartments().then((department) => {

        const departmentChoices = department.map((department) => ({
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

function addDepartment() {
    console.log("Department Added!");
    askForAction();
}

function addRoles() {
    console.log("Role Added!");
    askForAction();
}

function addEmployees() {
    console.log("Employee Added!");
    askForAction();
}

function viewEmployees() {
    
    db.getEmployees().then((results) => {
        console.table(results);
        askForAction();
    });

}

function viewRoles() {

    db.getRoles().then((results) => {
        console.table(results);
        askForAction();
    });
    
}

askForAction();

