#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
let toDo = ["usama", "abdullah"];
async function createToDo(toDo) { }
do {
    let answer = await inquirer.prompt({
        type: "list",
        message: "Select an operation",
        name: "select",
        choices: ["add", "update", "view", "delete"],
    });
    if (answer.select == "add") {
        let addToDo = await inquirer.prompt({
            type: "input",
            message: chalk.bgGreenBright("Add items in your to do list:"),
            name: "todo",
        });
        toDo.push(addToDo.todo);
        toDo.forEach((todo) => console.log(chalk.green(todo)));
        // console.log(toDo);
    }
    if (answer.select == "update") {
        let updateToDo = await inquirer.prompt({
            type: "list",
            message: chalk.bgYellowBright("update items in your to do list:"),
            name: "todo",
            choices: toDo.map((item) => item),
        });
        let addToDo = await inquirer.prompt({
            type: "input",
            message: "add items in your to do list:",
            name: "todo",
        });
        let newToDo = toDo.filter((val) => val !== updateToDo.todo); // frist add then replace the value ;
        toDo = [...newToDo, addToDo.todo];
        toDo.forEach((todo) => console.log(chalk.yellow(todo)));
        // console.log(toDo);
    }
    if (answer.select == "view") {
        console.log(chalk.bgBlueBright("*** TO DO LIST ***"));
        console.log(chalk.greenBright(toDo));
        console.log(chalk.bgBlueBright("**********************"));
    }
    if (answer.select == "delete") {
        let deleteToDo = await inquirer.prompt({
            type: "list",
            message: chalk.bgRedBright("delete items in your to do list"),
            name: "todo",
            choices: toDo.map((item) => item),
        });
        let newToDo = toDo.filter((val) => val !== deleteToDo.todo);
        toDo = [...newToDo];
        toDo.forEach((todo) => console.log(chalk.red(todo)));
        // console.log(toDo);
    }
    createToDo(toDo);
} while (true);
