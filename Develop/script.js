
// Assignment Code
var generateBtn = document.querySelector("#generate");

// added variables
var passwordLength;
var Upper;
var Lower;
var conNumber;
var sSpecial;
var userChoice;
var blankUpper = [];

// alphabet so password generates all letters 
var lowerCase = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// uppercase
for (let index = 0; index < lowerCase.length; index++) {
  const element = lowerCase[index];
  blankUpper.push(element.toUpperCase())
}



// special characters and numbers
var special = ["!", "?", "@", "<", ">", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "/", "=", "+", "-", "`", "~", "[", "]"]; 
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// start function
function generatePassword() {
  passwordLength = prompt ("Between 8 to 128 characters, how many would you like?");
  console.log("Password length " + passwordLength);


if (!passwordLength) {
  alert("Required value ");
  }

  
else if (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("Choose between 8 and 128 characters");
  console.log("Password length " + passwordLength);
}


else {
  Lower = confirm("Do you want to include lowercase letters?");
  console.log("Lowercase " + Lower);

  Upper = confirm("Do you want to include uppercase letters?");
  console.log("Uppercase " + Upper);
  
  sSpecial = confirm("Do you want to include special characters?");
  console.log("Special character " + sSpecial);

  conNumber = confirm("Do you want to include numbers? ");
  console.log("Number " + conNumber);
  };

// chose nothing
if (!Lower && !Upper && !sSpecial && !conNumber) {
userChoice = alert("Choose a criteria");
}
// 1 true 
 if (Lower) {
  userChoice = lowerCase;
  console.log(userChoice);
}
 if (Upper) {
  userChoice = blankUpper.concat(userChoice);
  console.log (userChoice);
}
 if (sSpecial) {
  userChoice = special.concat(userChoice);
  console.log(userChoice);
}
if (conNumber) {
  userChoice = numbers.concat(userChoice);
  console.log(userChoice);
}





// null for the password length
var passwordBlank = [];

// for loop for generator
for (var i = 0; i < passwordLength; i++) {
  var allChoice = userChoice[Math.floor(Math.random() * userChoice.length)];
  passwordBlank.push(allChoice);
  console.log(allChoice);
}


// password is given
var password = passwordBlank.join("");
console.log("Your Password is: " + password);
return password;
}