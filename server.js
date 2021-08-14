const cTable = require('console.table');
const inquirer = require('inquirer');
const db = require('./db/connection');

const questions = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'selection',
            message: 'Welcome, what would you like to do?',
            choices: ['View all employees', 'View all roles', 'View departments', 'Update employee', 'Add employee', 'Add role', 'Add department']
        }
    ])
}