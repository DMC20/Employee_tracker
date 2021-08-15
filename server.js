const cTable = require('console.table');
const inquirer = require('inquirer');
const db = require('./db/connection');

// Question prompt
function questPrompt () {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'selection',
            message: 'Welcome, what would you like to do?',
            choices: ['View all employees','View all roles', 'View departments', 'Update employee', 
                      'Add employee', 'Add role', 'Add department']
        }
    ])
    .then((choice) => {
        if (choice.selection === 'View all employees') {
            viewEmp();
        } else if (choice.selection === 'View all roles') {
            viewRoles();
        } else if (choice.selection === 'View departments') {
            viewDep();
        } else if (choice.selection === 'Update employee') {
            updateEmp();
        } else if (choice.selection === 'Add employee') {
            addEmp();
        } else if (choice.selection === 'Add role') {
            addrole();
        } else if (choice.selection === 'Add department') {
            addDep()
        };
    })
};

// View all employee
function viewEmp () {
    db.query(`SELECT * FROM employee`, (err, rows) => {
        if (err) throw err;
        console.log('Viewing employees');
        console.table(rows);
        questPrompt();
    });
};

// View all roles 
function viewRoles() {
    db.query(`SELECT * FROM roles`, (err, rows) => {
        if (err) throw err;
        console.log('Viewing all roles');
        console.table(rows);
        questPrompt();
    })
};

// View Dept
function viewDep () {
    db.query(`SELECT * FROM department`, (err, rows) => {
        if (err) throw err;
        console.log('Viewing all departmenrs');
        console.table(rows);
        questPrompt();
    })
};

questPrompt();