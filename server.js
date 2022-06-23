const inquirer = require("inquirer");
const db = require("./db/connection");

// Question prompt
const questPrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "select",
        message: "Welcome, what would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View employees",
          "Add department",
          "Add a role",
          "Add an employee",
          "Update an employee",
        ],
      },
    ])
    .then((choice) => {
      const { select } = choice;

      if (select === "View all departments") viewDep();
      if (select === "View all roles") viewRoles();
      if (select === "View employees") viewEmp();
      if (select === "Add department") addDep();
      if (select === "Add a role") addRole();
      if (select === "Add an employee") addEmp();
      if (select === "Update an employee") updateEmp();
    });
};

// View Dept
const viewDep = () => {
  const sql = `SELECT * FROM department`;
  db.query(sql, (err, res) => {
    if (err) throw err;
    console.log("Now viewing all departmenrs");
    console.table(res);
    questPrompt();
  });
};

// View all roles
const viewRoles = () => {
  const sql = `SELECT * FROM roles`;
  db.query(sql, (err, res) => {
    if (err) throw err;
    console.log("Now viewing all roles");
    console.table(res);
    questPrompt();
  });
};

// View all employee
const viewEmp = () => {
  const sql = `SELECT * FROM employee`;
  db.query(sql, (err, res) => {
    if (err) throw err;
    console.log("Now viewing employees");
    console.table(res);
    questPrompt();
  });
};

// Add department
const addDep = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "Please enter the department would you like to add?",
      },
    ])
    .then((data) => {
      const sql = `INSERT INTO department (dept_name) VALUES (?)`;
      db.query(sql, data.department, (err, res) => {
        if (err) throw err;
        console.table(res);
        questPrompt();
      });
    });
};

// Add role
const addRole = async () => {
  let deptChoices = await db.promise().query(`SELECT * FROM department`);
  let deptArray = [];
  for (let i = 0; i < deptChoices[0].length; i++) {
    deptArray.push(deptChoices[0][i].dept_name);
  }

  let userRole = await inquirer.prompt([
    {
      name: "title",
      type: "input",
      message: "Please enter the name of the new role",
    },
    {
      name: "salary",
      type: "input",
      message: "Please enter the salary for this role",
    },
    {
      name: "department",
      type: "list",
      choices: deptArray,
    },
  ]);
  const deptId = await db
    .promise()
    .query(
      "SELECT id FROM department WHERE dept_name = ?",
      userRole.department
    );

  db.query(`INSERT INTO roles SET ?`, {
    title: userRole.title,
    salary: userRole.salary,
    dept_id: deptId[0][0].id,
  });

  console.log(`${userRole.title} was successfully added`);
  questPrompt();
};

// Add employee
const addEmp = async () => {
  let empChoice = await db.promise().query(`SELECT * FROM roles`);
  let roleArray = [];
  for (let i = 0; i < empChoice[0].length; i++) {
    roleArray.push(empChoice[0][i].title);
  }
  let newEmployee = await inquirer.prompt([
    {
      name: "firstName",
      type: "input",
      message: "Please enter employee's first name",
    },
    {
      name: "lastName",
      type: "input",
      message: "Please enter employee's last name",
    },
    {
      name: "employee",
      type: "list",
      choices: roleArray,
    },
    {
      name: "managerId",
      type: "input",
      message: "Please enter the manager ID for employee",
    },
  ]);
  const empRoleID = await db
    .promise()
    .query("SELECT id FROM roles WHERE title = ?", newEmployee.employee);
  await db.promise().query(`INSERT INTO employee SET ? `, {
    first_name: newEmployee.firstName,
    last_name: newEmployee.lastName,
    role_id: empRoleID[0][0].id,
    manager_id: newEmployee.managerId,
  });
  console.log(
    `${newEmployee.firstName} + ${newEmployee.lastName} was successfully added`
  );
  questPrompt();
};

// Update role
updateEmp = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Which employee would you like to update?",
        name: "emUp",
      },
      {
        type: "input",
        message: "Which role do you want to update to?",
        name: "updateRole",
      },
    ])
    .then((data) => {
      const sql = `UPDATE employee SET role_id=? WHERE first_name= ?`;
      db.query(sql, [data.updateRole, data.emUp], (err, res) => {
        if (err) throw err;
        console.table(res);
        questPrompt();
      });
    });
};

questPrompt();
