#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magenta(`<<<============>>>>========<<<<<<<===========>>>>============>>>`));
console.log(chalk.cyan(`******"Welcome to Tahira's Currency Convertor Application"******`));
console.log(chalk.magenta(`<<<============>>>>========<<<<<<<===========>>>>============>>>`));
const Currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    CAD: 1.36,
    JPY: 151.61,
    AUD: 1.52,
    CHF: 0.90
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.yellow("Enter From Currency"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "CAD", "JPY", "AUD", "CHF"],
    },
    {
        name: "to",
        message: chalk.blue("Enter to Currency"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "CAD", "JPY", "AUD", "CHF"],
    },
    {
        name: "amount",
        type: "number",
        message: chalk.magenta("Enter your amount"),
    },
]);
// console.log(user_answer);
let fromAmount = Currency[user_answer.from];
let toAmount = Currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(`Converted currency ${chalk.yellow(convertedAmount.toFixed(2))}`);
