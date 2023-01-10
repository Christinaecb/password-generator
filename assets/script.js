// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Added function to confirm button is being clicked
function generatePassword() {
  console.log("Click! ")

// Prompt the user for the password criteria
// Password length 8 < 128
// Lowercase, uppercase, numbers, special characters
var charset = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ",
     length = 8,
     retVal = ""
// Validate the input

// Display password on page
for (var i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
}



// The value being returned in password generator box
return retVal
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
