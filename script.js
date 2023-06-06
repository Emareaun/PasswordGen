// Get references to the #generate, #password, and #alert elements
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var alertBtn = document.querySelector("#alert");

// Generate password function
function generatePassword() {
  // Get the length of the password
  var length = prompt("Enter the length of the password (8-128): ");

  // Get the character types to include in the password
  var charTypes = prompt("Enter the character types to include (lowercase, uppercase, numeric, special): ");

  // Validate the input
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid length for the password");
    return;
  }

  var chars = "";
  if (charTypes.includes("lowercase")) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (charTypes.includes("uppercase")) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (charTypes.includes("numeric")) {
    chars += "0123456789";
  }
  if (charTypes.includes("special")) {
    chars += "!@#$%^&*()-_=+[{]}\\|;:\'\",<.>/?";
  }

  // Generate a random password of the specified length
  var password = "";
  for (var i = 0; i < length; i++) {
    var charIndex = Math.floor(Math.random() * chars.length);
    var char = chars[charIndex];

    password += char;
  }

  // Display the password in an alert
  alert("Your password is: " + password);

  // Write the password to the page
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// Add event listener to alert button
alertBtn.addEventListener("click", function() {
  alert("Your password is: " + passwordText.value);
});