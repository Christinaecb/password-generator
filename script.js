// Global Variables
let characterLength = 8;
let choiceArr = [];

// Arrays for special characters, lower/uppercase characters and numbers
let specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '_', '-', '=', '+', '?', '/', '<', '>', '~', '|', '.'];
let lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Step 1 (Generates Button)
let generateBtn = document.querySelector("#generate");

// Step 2 (When "Clicked" run writePassword)
generateBtn.addEventListener("click", writePassword);

// Step 3 [Displays new password on screen (in on-screen box)]
function writePassword() {
  // Calls getPrompts
  let correctChoicePrompt = getPrompts(); // will return true or false
  let passwordText = document.querySelector("#password");
  // if true start generatePassword function
  if (correctChoicePrompt) {
    let newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {  // if false set passwordText.value to nothing
    passwordText.value = "";
  }
}

// Step 4 (Prompt the user for the password criteria)
function getPrompts() {
  // resets choice array (defaults to empty)
  choiceArr = [];
  
  // password length 8 - 128 prompt
  characterLength = parseInt(prompt("How many characters would you like your new password to be? (type 8 - 128)"));
    // if character number selection is not a number (NaN) OR less than 8 OR more than 128 return false
    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128 ) {
      alert("Character length has to be between 8 - 128 digits. Please try again and type the number, do NOT spell it. (Ex: 12 NOT 'twelve')");
      return false;
    }
    // Lowercase selection (if yes it adds lowerCaseArr to choiceArr, if no nothing is changed)
    if (confirm("Would you like lowercase letters in the password?")) {
      choiceArr = choiceArr.concat(lowerCaseArr);
    }
    // Uppercase selection (if yes it adds upperCaseArr to choiceArr, if no nothing is changed)
    if (confirm("Would you like uppercase letters in the password?")) {
      choiceArr = choiceArr.concat(upperCaseArr);
    }
    // Special characters selection (if yes it adds specialCharArr to choiceArr, if no nothing is changed)
    if (confirm("Would you like special characters in the password? (Ex: #, %, *, @)")) {
      choiceArr = choiceArr.concat(specialCharArr);
    }
    // Numbers selection (if yes it adds numberArr to choiceArr, if no nothing is changed)
    if (confirm("Would you like numbers in the password?")) {
      choiceArr = choiceArr.concat(numberArr);
    }
    return true;
}

// Step 5 (Password Generation)
function generatePassword() {
  // resets password value (defaults to an empty string to clear pass attempts)
  let password = "";
  // loop will run until i = the same value as characterLength (allows for repeat attempts without error, resetting to i = 0 each time)(this sequentially generates each character until done)
  for(let i = 0; i < characterLength; i++) {
    // random character selection math, create a variable named randomIndex, math.floor to make it an integer, math.random multiplied by choiceArr.length creates a random number within the range designated by choiceArr.length
    let randomIndex = Math.floor(Math.random() * choiceArr.length);
    // starts with default password value (an empty string) and adds new randomIndex (at this point, the completed password meeting inputed criteria)
    password = password + choiceArr[randomIndex];
  }
  // display generated password
  return password;
}
