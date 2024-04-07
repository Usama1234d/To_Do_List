import inquirer from "inquirer";
// inquirer  -
// array     -
//function   -
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
            message: "add items in your list",
            name: "todo",
        });
        toDo.push(addToDo.todo);
        toDo.forEach(todo => console.log(todo));
        // console.log(toDo);
    }
    if (answer.select == "update") {
        let updateToDo = await inquirer.prompt({
            type: "list",
            message: "update items in your list",
            name: "todo",
            choices: toDo.map(item => item)
        });
        let addToDo = await inquirer.prompt({
            type: "input",
            message: "add items in your list",
            name: "todo",
        });
        let newToDo = toDo.filter(val => val !== updateToDo.todo); // frist add then replace the value ;
        toDo = [...newToDo, addToDo.todo];
        console.log(toDo);
    }
    if (answer.select == "view") {
        console.log("*** TO DO LIST ***");
        console.log(toDo);
        console.log("**********************");
    }
    if (answer.select == "delete") {
        let deleteToDo = await inquirer.prompt({
            type: "list",
            message: "delete your todo in the list",
            name: "todo",
            choices: toDo.map(item => item)
        });
        let newToDo = toDo.filter(val => val !== deleteToDo.todo);
        toDo = [...newToDo];
        console.log(toDo);
    }
} while (true);
createToDo(toDo);
