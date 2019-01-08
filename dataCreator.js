const readLine = require('readline-sync').question;

let themeList = ["1.kolkata", "2.paris"].join('\n');
let author = readLine("Enter the name of the author : ");
let date = readLine("Enter the date : ");
let title = readLine("Enter the title of your page : ");
let heading = readLine("Enter the heading for your article : ");
let description = readLine("Type your article here : ");
let themeNo = readLine("Choose the serial no. of theme - \n" + themeList + " \n : ");

let themes = {
	"1": "./styleSheets/kolkata1.css",
	"2": "./styleSheets/paris.css",
}

let jsonObject = {
	"title": title,
	"posts":
	{
		"title": heading,
		"author": author,
		"date": date,
		"description": description,
		"theme": themes[themeNo]
	}
}

console.log(JSON.stringify(jsonObject));