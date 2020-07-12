'user strict'

// refactored to function

var userName = prompt('Hello! What\'s your name?');

function welcome(){
  
  alert('Welcome ' + userName + " to my \"About Me Page\"");

  alert("Let's see how much you know about me");
};



// -------------------------------- NOTES -------------------------------------
// prompt user with 5 yes or no questions
// with user input that accept y/n or yes/no
// while taking into consideration case sensitivity by normalizing the user input so that it can be validated

var counter = 0;

// refactoring to function
function doesDariusCook(){

  // ----- 1ST QUESTION -----
  var cookAnswer = prompt('Q1: I like to cook food?(y/n)');

  cookAnswer = cookAnswer.toLowerCase();

  if(cookAnswer === 'y' || cookAnswer === 'yes'){

    alert('Correct!');
    counter++;
    
  } else{

    alert('Wrong!');
    
  }
};



// refactoring to function
function doesDariusLikeSushi(){ 


  // ----- 2ND QUESTION -----
  var foodSushi = prompt('Q2: I don\'t like sushi?(y/n)');
  // add validation

  foodSushi = foodSushi.toLowerCase();

  if(foodSushi === 'n' || foodSushi === 'no'){

    alert('Correct!');
    counter++;
  
  } else{

    alert('Wrong!');
  
  }
};



// Refactoring to function
function doesDariusLikeAdobo(){
  // ----- 3RD QUESTION -----
  var foodAdobo = prompt('Q3: I ❤️ Adobo?(y/n)');
  // add validation

  foodAdobo = foodAdobo.toLowerCase();

  if(foodAdobo === 'y' || foodAdobo === 'yes'){

    alert('Correct!');
    counter++;
    
  } else{

    alert('Wrong!');
    
  }
};



// Refactoring to function
function hasDariusBeenToJapan(){
  // ----- 4TH QUESTION -----
  var placeJapan = prompt('Q4: I\'ve never been to Japan?(y/n)');

  placeJapan = placeJapan.toLowerCase();

  if(placeJapan === 'n' || placeJapan === 'no'){

    alert('Correct!');
    counter++;
  
  } else{

    alert('Wrong!');
    
  }
};



// Refactoring to function
function hasDariusSkydived(){
  // ----- 5TH QUESTION -----
  var actSkyDive = prompt('Q5: Do you think I\'ve done skydiving before?(y/n)');
  // add validation

  actSkyDive = actSkyDive.toLowerCase();

  if(actSkyDive === 'y' || actSkyDive === 'yes'){

    alert('Correct!');
    counter++;
 
  } else{
    
    alert('Wrong!');
    
  }
};



// Refactoring to function
function howManyCountriesVisited(){
  // ----- 6TH QUESTION -----
  var sixthAnswer = 0;
  for(var triesLeft = 4; triesLeft != 0; triesLeft--){
    sixthAnswer = prompt('Q6: Number of countries I have been so far?' + ' try left: ' + triesLeft);
    if(sixthAnswer === 4 || sixthAnswer === '4'){
      var triesLeft = 1;  
      alert('Wow! You\'re amazing');
      counter++;
    } else if(sixthAnswer > 4){
      alert('Wrong! It\'s Lower');
    } else if(sixthAnswer < 4){
      alert('Wrong! It\'s Higher');
    }  
  }

  // console.log('Number of countries I have been so far? Answer: 4');
  alert('Correct answer is 4');
};



// Refactoring to function
function whatCountriesVisited(){
  // ----- 7TH QUESTION -----
  var countriesIveBeen = ['philippines', 'japan', 'mexico', 'united states'];
  var triesLeft = 6;
 
  for(var attempt = 1; attempt <= 6; attempt++){
      var answer = prompt('Q7: Been to 4 countries so far. Guess at least one! Tries left: ' + triesLeft).toLowerCase();

      if(answer === countriesIveBeen[0] || answer === countriesIveBeen[1] || answer === countriesIveBeen[2] || answer === countriesIveBeen[3]){
          alert('Correct!');
          counter++;
          attempt = 6;
      } else{
          triesLeft--;
          alert('try again! tries left: ' + triesLeft);
      }
  }
 
  // console.log('So far I have been to: Philippines,' + ' Japan,' + ' Mexico,' + '  United States.');
  alert('So far I have been to: Philippines,' + ' Japan,' + ' Mexico,' + '  United States.')
};




//Final message
//Refactoring to function
function finalMessage(){
    alert('You got ' + counter + ' out of 7 correct answers! ' + 'Thank you ' + userName + ' for visiting this page.');
};


welcome();
doesDariusCook();
doesDariusLikeSushi();
doesDariusLikeAdobo();
hasDariusBeenToJapan();
hasDariusSkydived();
howManyCountriesVisited();
whatCountriesVisited();
finalMessage();