// Assignment Code
var generateBtn = document.querySelector("#generate");

// added variables
var passwordLength;
var Upper;
var Lower;
var conNumber;
var Special;
var userChoice;

// alphabet so password generates all letters 
var Lower = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// uppercase
var letters = "abc";
var moreLetters = letters.toUpperCase();
console.log(letters);
console.log(moreLetters);




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
  alert("Required value");
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
  
  Special = confirm("Do you want to include special characters?");
  console.log("Special character " + Special);

  conNumber = confirm("Do you want to include numbers? ");
  console.log("Number " + conNumber);
 } };

// chose nothing
if (!Lower && !Upper && !Special && !conNumber);
userChoice = alert("Choose a criteria");

// 1 true 
 if (Lower) {
  userChoice = lowerCase;
  console.log(userChoice);
}
else if (Upper) {
  userChoice = blankUpper.concat(upperCase);
  console.log (userChoice);
}
else if (Special){
  userChoice = special;
  console.log(userChoice);
}
else if (conNumber) {
  userChoice = numbers;
  console.log(userChoice);
}


// 2 true options
else if (Lower && Upper) {
  userChoice = lowerCase.concat(upperCase);
  console.log(userChoice);
}

else if (Lower && conNumber) {
  userChoice = lowerCase.concat (numbers);
  console.log(userChoice);
}
else if (Lower && Special) {
  userChoice = lowerCase.concat(special);
  console.log(userChoice);
}
else if (Upper && conNumber) {
  userChoice = upperCase.concat(numbers);
  console.log(userChoice);
}
else if (Upper && Special) {
  userChoice =  upperCase.concat(special);
  console.log(userChoice);
}
else if (conNumber && Special) {
  userChoice = numbers.concat(special);
  console.log(userChoice);
}

// 3 true
else if (Lower && Upper && conNumber) {
  userChoice = lowerCase.concat(upperCase, numbers);
  console.log(userChoice);
}
else if (Lower && Upper && Special) {
  userChoice = lowerCase.concat(upperCase, special);
  console.log(userChoice);
}
else if (Lower && conNumber && Special) {
  userChoice = lowerCase.concat(numbers, special);
  console.log(userChoice);
}
else if (Upper && conNumber && Special) {
  userChoice = upperCase.concat(numbers, special);
  console.log(userChoice);
}
//  4 true
else if (Lower && Upper && Special && conNumber) {
  userChoice = lowerCase.concat(upperCase, special, numbers);
  console.log(userChoice);
};


// null for the password length
var passwordBlank = [];

// for loop for generator
for (var i = 0, i < passwordLength; i++) {
  var allChoices = userChoice[Math.floor(math.random() * userChoice.length)];
  passwordBlank.push(allChoices);
  console.log(allChoices);
}


{
// password is given
var password = passwordBlank.join("");
console.log("Your Password is: " + password);
return password;
}