// Import and require mysql2
const mysql = require("mysql2");
const inquirer = require("inquirer");
const { up } = require("inquirer/lib/utils/readline");
require("dotenv").config();

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: process.env.DB_PASSWORD,
    database: "c12employees_db",
  },
  console.log(`Connected to the classlist_db database.`)
);

// Query database
db.query("SELECT * FROM students", function (err, results) {
  console.log(results);
});

// view all departments
viewAllDepartments = () => {
  db.query("SELECT * FROM department", function (err, results) {
    console.table(results);
    mainMenu();
  });
};

// view all roles
viewAllRoles = () => {
  db.query("SELECT * FROM role", function (err, results) {
    console.table(results);
    mainMenu();
  });
};

// view all employees
viewAllEmployees = () => {
  db.query("SELECT * FROM employee", function (err, results) {
    console.table(results);
    mainMenu();
  });
};

// add a department
addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department_name",
        message: "What is the name of the department you would like to add?",
      },
    ])
    .then((data) => {
      db.query("INSERT INTO department SET ?", data, function (err, results) {
        console.table(results);
        mainMenu();
      });
    });
};

// add a role
addRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of the role you would like to add?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary of the role you would like to add?",
      },
      
    ])
    .then((data) => {
      db.query("INSERT INTO role SET ?", data, function (err, results) {
        console.table(results);
        mainMenu();
      });
    });
}

// add an employee
addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the first name of the employee you would like to add?",
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the last name of the employee you would like to add?",
      },
      {
        type: "input",
        name: "role_id",
        message: "What is the role id of the employee you would like to add?",
      },
      {
        type: "input",
        name: "manager_id",
        message: "What is the manager id of the employee you would like to add?",
      },
    ])
    .then((data) => {
      db.query("INSERT INTO employee SET ?", data, function (err, results) {
        console.table(results);
        mainMenu();
      });
    });
}

// update an employee role
updateEmployeeRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "employee_id",
        message: "What is the id of the employee you would like to update?",
      },
      {
        type: "input",
        name: "role_id",
        message: "What is the id of the role you would like to update?",
      },
    ])
    .then((data) => {
      db.query(
        "UPDATE employee SET role_id = ? WHERE id = ?",
        [data.role_id, data.employee_id],
        function (err, results) {
          console.table(results);
          mainMenu();
        }
      );
    });
};

//create a function: give user a list of options to choose from
mainMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "mainMenu",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Exit",
        ],
      },
    ])
    .then((data) => {
      switch (data.mainMenu) {
        case "View all departments":
          viewAllDepartments();
          break;
        case "View all roles":
          viewAllRoles();
          break;
        case "View all employees":
          viewAllEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an employee role":
          updateEmployeeRole();
          break;
        case "Exit":
          db.end();
          break;
      }
    });
};

mainMenu();
