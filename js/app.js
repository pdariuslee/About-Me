'user strict'

console.log('connected');

var userName = prompt('Hello! What\'s your name?');

alert('Welcome ' + userName + " to my \"About Me Page\"");

alert("Let's see how much you read/know about me");

// prompt user with 5 yes or no questions

// with user input that accept y/n or yes/no

// while taking into consideration case sensitivity by normalizing the user input so that it can be validated

var doesUserCook = prompt('I like to cook food?(y/n)');

var foodSushi = prompt('I don\'t like sushi?(y/n)');

var foodAdobo = prompt('I like adobo(y/n)');

var placeJapan = prompt('I\'ve never been to Japan?(y/n)');

var actSkyDive = prompt('Do you think I\'ve done skydiving before?(y/n)');