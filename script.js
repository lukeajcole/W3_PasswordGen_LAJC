// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var PSWD = "";
  var i;
  var specialChars = "!()-.?[]_`~;:@#$%^&*+=".split("");
  var normupChars= "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var normlowChars = "abcdefghijklmnopqrstuvwxyz".split("");
  
  var goodCriteria = false;

//Get Character Criteria and make sure its good
  while (!goodCriteria){
    var criteria = prompt("Enter the character(s) for the criteria you want to require:"
                          + "\nUPPERCase (U), lowercase(L), Special Character (S), Number (N)");
    
    // Make Criteria all uppercase
    criteria = criteria.toUpperCase();
    // Only continue is something is entered and it contains S, L, N, or U
    if (criteria == "" || criteria == null) {
      return;
    } else if (!criteria.includes("S") && !criteria.includes("U") && !criteria.includes("L") && !criteria.includes("N")){
      goodnumChar = false;
    } else {
      goodCriteria = true;
    }
  }

  
  //Make sure there is at least one of each selected char criteria in password.
  // Make a cleanCriteria that will later be used to randomize the addition of characters
  var cleanCriteria = "";

  if (criteria.includes("S")){
    PSWD = PSWD + specialChars[getRandomInt(specialChars.length)];
    cleanCriteria = cleanCriteria + "S"
  }
  if (criteria.includes("U")){
    PSWD = PSWD + normupChars[getRandomInt(normupChars.length)];
    cleanCriteria = cleanCriteria + "U"
  }
  if (criteria.includes("L")){
    PSWD = PSWD + normlowChars[getRandomInt(normlowChars.length)];
    cleanCriteria = cleanCriteria + "L"
  }
  if (criteria.includes("N")){
    PSWD = PSWD + getRandomInt(9);
    cleanCriteria = cleanCriteria + "N"
  }

  // Convert the cleanCriteria to an array
  cleanCriteria = cleanCriteria.split("");

//Get number of characters and make sure it's good
  var goodnumChar = false;
  while (!goodnumChar) {
    var numChar = parseInt(prompt("How many characters should the password have?", "0"));
    console.log(Number.isInteger(numChar));
    //Don't continue unless a number is entered between 0 and 36
    if (numChar == "" || numChar == null) {
      return;
    } else if (!Number.isInteger(numChar)) {
      goodnumChar = false;
     } else if (numChar <= 0 || numChar >= 36) {
      goodnumChar = false;
    } else {
      goodnumChar = true;
    }
  }

// Actually Generate the PSWD

  for (i=PSWD.length; i < numChar; i++){
    var selectRandom = getRandomInt(cleanCriteria.length);
    if (cleanCriteria[selectRandom] == "S") {
      PSWD = PSWD + specialChars[getRandomInt(specialChars.length)];
    } else if(cleanCriteria[selectRandom] == "U") {
      PSWD = PSWD + normupChars[getRandomInt(normupChars.length)];
    } else if(cleanCriteria[selectRandom] == "L") {
      PSWD = PSWD + normlowChars[getRandomInt(normlowChars.length)];
    } else if(cleanCriteria[selectRandom] == "N") {
      PSWD = PSWD + getRandomInt(9);
    }
  }
  console.log(PSWD.length);
  // Shuffle the string because of those first 4 that were added.
  return shuffleString(PSWD);
}

// Random Integer Generator

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// String Shuffler
function shuffleString (string) {
  var a = string.split(""),
      n = a.length;

  for(var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
  }
  return a.join("");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

