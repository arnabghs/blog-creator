const fs = require("fs");
const jsonData = fs.readFileSync("./data.json");

let data = JSON.parse(jsonData);


const withTags = function (tag, content, givenClass) {
	if (givenClass == undefined)
		return ["<", tag, "> ", content, " </", tag, ">"].join("");
	return ["<", tag, " class = '", givenClass, "'> ", content, " </", tag, ">"].join("");

}

const getHeading = withTags.bind(null, "h1");
const getDescription = withTags.bind(null, "p");
const getTitle = withTags.bind(null, "title");
const getAuthor = function (data) {
	return getDescription("Author : " + data.posts.author, "author_class");
}
const getDate = function (data) {
	return getDescription("Date : " + data.posts.date, "date_class")
}

const createHead = withTags.bind(null, "head");
const createBody = withTags.bind(null, "body");
const createHtml = withTags.bind(null, "html");


const createLink = function (cssFile) {
	return "<link rel='stylesheet' type='text/css' href='" + cssFile + "'/>";
}

const createFile = function (data) {
	let title = getTitle(data.title);
	let link = createLink(data.posts.theme);
	let head = createHead(title + '\n' + link);

	let date = getDate(data);
	let author = getAuthor(data);
	let heading = getHeading(data.posts.title, "heading_class");
	let description = getDescription(data.posts.description, "description_class");

	let bodyContent = [author, date, heading, description].join(" ");
	let body = createBody(bodyContent, "body_class");

	let file = createHtml(head + '\n' + body);
	return file;
}

console.log(createFile(data));