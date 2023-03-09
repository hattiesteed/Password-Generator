// Assignment Code
var generateBtn = document.querySelector("#generate");

// added variables
var passwordLength;
var Upper;
var Lower;
var conNumber;
var Special;

// alphabet so password generates all letters 
var Lower = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// uppercase
var letters = "abc";
var moreLetters = letters.toUpperCase();
console.log(letters);
console.log(moreLetters);




// special characters
var special = ["!", "?", "@", "<", ">", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "/", "=", "+", "-", "`", "~", "[", "]"]; 







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  var passwordLength = 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






{
// password is given
var password = passwordBlank.join("");
console.log("Your Password is: " + password);
return password;
}