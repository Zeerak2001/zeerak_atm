#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Kindly enter you ID: "
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter your Pin: "
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Saving", "Current"],
        message: "Select your account type",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select your transaction",
        when(answer) {
            return answer.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: ["1000", "2000", "4000", "5000"],
        message: "Select your amount",
        when(answer) {
            return answer.transactionType == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(answer) {
            return answer.transactionType == "Withdraw";
        },
    },
]);
if (answer.userID && answer.userPin) {
    const bal = Math.floor(Math.random() * 1000000);
    console.log(bal);
    const enterAmount = answer.amount;
    if (bal >= enterAmount) {
        const remaining = bal - enterAmount;
        console.log("Your remaining balance is ", remaining);
    }
    else {
        console.log("Insufficient Balance");
    }
}
