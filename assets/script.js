// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Added function to confirm button is being clicked
function generatePassword() {
  console.log("Click! ")




  
// The value being returned in password generator box
return "Generated Password"
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
