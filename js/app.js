'user strict'

var userName = prompt('Hello! What\'s your name?');

alert('Welcome ' + userName + " to my \"About Me Page\"");

alert("Let's see how much you read/know about me");

// -------------------------------- NOTES -------------------------------------
// prompt user with 5 yes or no questions
// with user input that accept y/n or yes/no
// while taking into consideration case sensitivity by normalizing the user input so that it can be validated

var counter = 0;

// ----- 1ST QUESTION -----
var cookAnswer = prompt('I like to cook food?(y/n)');
// add validation

cookAnswer = cookAnswer.toLowerCase();

if(cookAnswer === 'y' || cookAnswer === 'yes'){
  alert('Correct!');
  counter++;
  console.log('Q: like to cook food?');
  console.log('Answer: ' + cookAnswer + ' is Correct!');
  console.log('');
} else{
  alert('Wrong!');
  console.log('Q: like to cook food?');
  console.log('Answer: ' + cookAnswer + ' is Wrong!');
  console.log('');
}



// ----- 2ND QUESTION -----
var foodSushi = prompt('I don\'t like sushi?(y/n)');
// add validation

foodSushi = foodSushi.toLowerCase();

if(foodSushi === 'n' || foodSushi === 'no'){
  alert('Correct!');
  counter++;
  console.log('Q: I don\'t like sushi?');
  console.log('Answer: ' + foodSushi + ' is Correct!');
  console.log('');
} else{
  alert('Wrong!');
  console.log('Q: I don\'t like sushi?');
  console.log('Answer: ' + foodSushi + ' is Wrong!');
  console.log('');
}



// ----- 3RD QUESTION -----
var foodAdobo = prompt('I like adobo?(y/n)');
// add validation

foodAdobo = foodAdobo.toLowerCase();

if(foodAdobo === 'y' || foodAdobo === 'yes'){
  alert('Correct!');
  counter++;
  console.log('Q: I like adobo?');
  console.log('Answer: ' + foodAdobo + ' is Correct!');
  console.log('');
} else{
  alert('Wrong!');
  console.log('Q: I like adobo?');
  console.log('Answer: ' + foodAdobo + ' is Wrong!');
  console.log('');
}



// ----- 4TH QUESTION -----
var placeJapan = prompt('I\'ve never been to Japan?(y/n)');
// add validation

placeJapan = placeJapan.toLowerCase();

if(placeJapan === 'n' || placeJapan === 'no'){
  alert('Correct!');
  counter++;
  console.log('Q: I\'ve never been to Japan?');
  console.log('Answer: ' + placeJapan + ' is Correct!');
  console.log('');
} else{
  alert('Wrong!');
  console.log('Q: I\'ve never been to Japan?');
  console.log('Answer: ' + placeJapan + ' is Wrong!');
  console.log('');
}



// ----- 5TH QUESTION -----
var actSkyDive = prompt('Do you think I\'ve done skydiving before?(y/n)');
// add validation

actSkyDive = actSkyDive.toLowerCase();

if(actSkyDive === 'y' || actSkyDive === 'yes'){
  alert('Correct!');
  counter++;
  console.log('Q: Do you think I\'ve done skydiving before?');
  console.log('Answer: ' + actSkyDive + ' is Correct!');
  console.log('');
} else{
  alert('Wrong!');
  console.log('Q: Do you think I\'ve done skydiving before?');
  console.log('Answer: ' + actSkyDive + ' is Wrong!');
  console.log('');
}


//Final message
alert('You got ' + counter + ' out of 5 correct answers! ' + 'Thank you ' + userName + ' for visiting this page.');