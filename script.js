var generate = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function generatePassword() {
  var length = prompt("Enter the length of the password (8-128): ");

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid length for the password");
    return;
  }

  var lowercaseChoice = confirm("Do you want to include lowercase letters?");
  
  var uppercaserChoice = confirm("Do you want to include uppercaser letters?");

  var numericChoice = confirm("Do you want to include numeric characters?");

  var specialChoice = confirm("Do you want to include special characters?");

  var chars = "";
  var password = "";

  if (!lowercaseChoice && !uppercaserChoice && !numericChoice && !specialChoice) {
    alert("You must select at least one character type");
    return;
  }

  if (lowercaseChoice) {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    chars += letters;
    password += letters[Math.floor(Math.random() * letters.length)];
  }
  if (uppercaserChoice) {
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    password += letters[Math.floor(Math.random() * letters.length)];
  }
  if (numericChoice) {
    var numbers = "0123456789";
    chars += "0123456789";
    password += numbers[Math.floor(Math.random() * numbers.length)];
  }
  if (specialChoice) {
    var special = "!@#$%^&*()-_=+[{]}\\|;:\'\",<.>/?";
    chars += "!@#$%^&*()-_=+[{]}\\|;:\'\",<.>/?";
    password += special[Math.floor(Math.random() * special.length)];
  }
  console.log(password);

  for (var i = password.length; i < length; i++) {
    var charIndex = Math.floor(Math.random() * chars.length);
    var char = chars[charIndex];

    password += char;
  }

  passwordText.value = password;
}

 generate.addEventListener("click", generatePassword);