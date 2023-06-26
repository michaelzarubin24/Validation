"use strict";
// 1) Get user : name , email , password , age
// 2) name must has at least 2 symbols
// 3) if name is valid -> check user email
// 4) email should include into it -> "@" symbol
// 5) password should be longer than 7 and * might
// include : numbers and strings
// 6) This case migth be acceed only if all conditions above
// is TRUE...age must be bigger than 18
// 7) If all above is true -> console -> Welcome!
// Otherwise -> Go out of here!

var isValidName = false;
var isValidMail = false;
var isValidPassword = false;
var isValidAge = false;

while (!isValidName) {
  let userName = prompt("What is your name?");
  if (userName.length >= 2) {
    isValidName = true;
  } else alert("Invalid name!");
  break;
}

if (isValidName === true) {
  while (!isValidMail) {
    let userMail = prompt("What is your email?");
    for (var i = 0; i < userMail.length; i++) {
      var symbol = userMail[i];
      if (symbol === "@") {
        isValidMail = true;
        break;
      }
    }
    if (symbol != "@") {
      alert("Invalid mail!");
      break;
    }
  }
}

if (isValidMail === true) {
  while (!isValidPassword) {
    let userPassword = prompt("Password");
    for (var i = 0; i < userPassword.length; i++) {
      var password = userPassword[i];
      if (userPassword.length > 7) {
        isValidPassword = true;
        break;
      }
    }
    if (password <= 7) {
      alert("Invalid password!");
      break;
    }
  }
}

if (isValidPassword === true) {
  while (!isValidAge) {
    let userAge = parseInt(prompt("How old are you?"));
    for (var i = 0; i < 18; i++) {
      var age = userAge[i];
      if (userAge >= 18) {
        isValidAge = true;
        alert("Welcome!");
        break;
      }
    }
    if (userAge < 18) {
      alert("You are too young for this shit!");
      break;
    }
  }
}
