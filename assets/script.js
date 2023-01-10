// Assignment code here
var characterLength = 8;
var choiceArr = [];

// Array for special characters, upper and lower case characters and numbers
var specialCharArr = ['!','@','#','$','%','^','&','*','(',')','_','-','=','+',];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numberArr = ['1','2','3','4','5','6','7','8','9','0',];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

}

// Where I get information from
function getPrompts(){
  
}



