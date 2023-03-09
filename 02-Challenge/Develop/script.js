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


function generatePassword() {
  passwordLength = prompt ("Between 8 to 128 characters, how many would you like?");
  console.log("Password length " + passwordLength);

if (!passwordLength) {
  alert("Required value");
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
  }


else if (passwordLength <8 || passwordLength > 128) {
  passwordLength = prompt("Choose between 8 and 128");
  console.log("Password lenth " + passwordLength);
  }
}





{
// password is given
var password = passwordBlank.join("");
console.log("Your Password is: " + password);
return password;
}