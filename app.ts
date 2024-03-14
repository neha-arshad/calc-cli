// !/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";

const stop = () => {
	return new Promise((res) => {
		setTimeout(res, 1000);
	})
};

async function wellcome() {
	let rainbow_title = chalkanimation.rainbow("Lets, Start Calculation");  // start
	await stop();
	rainbow_title.stop(); // stop after 1sc

}
console.log(` 
 _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|`);

// call function 
await wellcome();

// jo calculator wala console.log hy wo pehlay hy
// phir welcome wala function invoke hua hy clear?gsah

async function Ask_question() {


	const answers = await inquirer
		.prompt([
			/* Pass your questions in here */
			{
				type: "list",
				name: "operator",
				message: "Which operation you want to perform? \n ",
				choices: ["Addition", "Subbtraction", "Multiplication", "Division"]
			},
			{
				type: "number",
				name: "num1",
				message: chalk.bgGreen("Enter yor 1st number:")
			},
			{
				type: "number",
				name: "num2",
				message: chalk.bgBlueBright("Enter your 2nd number:")
			}
		]);

	if
		(answers.operator == "Addition") {
		console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2} `)
	}
	else if
		(answers.operator == "Subbtraction") {
		console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2} `)
	}
	else if
		(answers.operator == "Division") {
		console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`)
	}
	else if
		(answers.operator == "Multiplication") {
		console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`)
	}

}



//Ask_question();//
async function againStart() {
	do {
		await Ask_question();
		var again = await inquirer
			.prompt({
				type: "input",
				name: "restart",
				message: "Do you want to continue? press y or n"
			})
	} while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "YES")
}
againStart();



