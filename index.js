const { createPromptModule } = require("inquirer");
const inquirer = require("inquirer");
const db = require("./db");
const connection = require("./db/connection");


function init() {
    lineBreak();
    console.log("Welcome to your Employee Managment System!");
    console.log("Here you can CREATE, VIEW and UPDATE employee information.");
    lineBreak();

    askForAction();
}

init();

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
                "CREATE_DEPARTMENT",
                "ADD_EMPLOYEES",
                "UPDATE_ROLES",
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

                case "CREATE_ROLE":
                    createRole();
                    break;

                case "CREATE_DEPARTMENT":
                    addDepartment();
                    break;

                case "ADD_EMPLOYEES":
                    addEmployees();
                    break;

                case "UPDATE_ROLES":
                    addRoles();
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

function createRole() {

    db.getDepartments().then((department) => {

        const departmentChoices = department.map((department) => ({
            value: department.id,
            name: department.name
        }))
        // const roleChoices = role.map((role) => ({
        //     value: role.id,
        //     name: role.title
        // }))


        inquirer.prompt([
            {
                message: "What department is this role for?",
                type: "list",
                name: "department_id",
                choices: departmentChoices
            },
            {
                message: "What ROLE would you like to add?",
                name: "title",
                type: "input"              
            },
            {
                message: "What SALARY would you like to assign to this new role?",
                name: "salary",
                type: "input"              
            }
           
        ]).then(res => {

            db.insertRole(res);
            console.log("New Role Added!");
            viewRoles();
            askForAction();
            
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

function lineBreak() {
    console.log(`=============================================================`);
};
