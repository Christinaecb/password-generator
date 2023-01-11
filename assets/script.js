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
// Where I generate passwords based on the prompts. Added console.log click to confirm button is working
function generatePassword() {
console.log("Click!")
}

// Where I get prompts from relating to character length, upper/lowercase and special characters
function getPrompts(){
  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters"));

  if(isNaN(characterLength || characterLength <8 || characterLength > 128)) {
      alert("Character length must be a number between 8 - 128. Please try again");
      return false;
  }
// If they want lowercase letters. Puts the lowercase letters in the choiceArr
  if (confirm("Would you like to include lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Would you like to include uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("Would you like to include special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if (confirm("Would you like to include numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }



}








