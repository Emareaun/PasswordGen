// Assignment code here
generateBtn.addEventListener("click", writePassword);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  
  var password = "";
  for (var i = 0; i < 12; i++) {
    
    var charIndex = Math.floor(Math.random() * chars.length);
    var char = chars[charIndex];

    password += char;
  }

  return password;
}