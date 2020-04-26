// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");
  var valid = false;
  
  //get basic password info from user
  //check if input is valid
  while(valid === false) {
    var charNum = prompt("How many characters would you like your password to contain?");
    if(isNaN(charNum)){
      alert("Please enter an integer");
    } else if(charNum >= 8 && charNum <= 128) {
        valid = true;
        var password = generatePassword(charNum, specChar, numChar, lowCaseChar, upCaseChar);
    } else {
        alert("Please enter a number between 8 and 128");
    }; 
  };
  var specChar = confirm("Click OK for special characters");
  var numChar = confirm("Click OK for numeric characters");
  var lowCaseChar = confirm("Click OK for lowercase characters");
  var upCaseChar = confirm("Click OK for uppercase characters");

  var password = generatePassword(charNum, specChar, numChar, lowCaseChar, upCaseChar);

  passwordText.value = password;
}

//function to actually generate the password
function generatePassword(charNum, specChar, numChar, lowCaseChar, upCaseChar) {
  var password = "";
  var usedCharSets = "";
  var numVals = "1234567890";
  var specVals = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var upCaseVals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowCaseVals = "abcdefghijklmnopqrstuvwxyz";
  //a series of if statements that combine each string to the final string that will be used to generate the PW
  if(specChar === true){usedCharSets = usedCharSets + specVals};
  if(numChar === true){usedCharSets = usedCharSets + numVals};
  if(lowCaseChar === true){usedCharSets = usedCharSets + lowCaseVals};
  if(upCaseChar === true){usedCharSets = usedCharSets + upCaseVals};

  for(var i = 0; i < charNum; i++) {
    password = password + usedCharSets.charAt(Math.floor(Math.random() * Math.floor(usedCharSets.length - 1)));
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
