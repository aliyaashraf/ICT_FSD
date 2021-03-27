//email validation
let email = document.getElementById("email");
let error = document.getElementById("error");
function validate() {
  let regexp = /^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
  if (regexp.test(email.value)) {
    return true;
  } else {
    return false;
  }
}
//password validation
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// Validate lowercase letters
var lowerCaseLetters = /[a-z]/g;
if (myInput.value.match(lowerCaseLetters)) {
  letter.classList.remove("invalid");
  letter.classList.add("valid");
} else {
  letter.classList.remove("valid");
  letter.classList.add("invalid");
}

// Validate capital letters
var upperCaseLetters = /[A-Z]/g;
if (myInput.value.match(upperCaseLetters)) {
  capital.classList.remove("invalid");
  capital.classList.add("valid");
} else {
  capital.classList.remove("valid");
  capital.classList.add("invalid");
}

// Validate numbers
var numbers = /[0-9]/g;
if (myInput.value.match(numbers)) {
  number.classList.remove("invalid");
  number.classList.add("valid");
} else {
  number.classList.remove("valid");
  number.classList.add("invalid");
}

// Validate length
if (myInput.value.length >= 8) {
  length.classList.remove("invalid");
  length.classList.add("valid");
} else {
  length.classList.remove("valid");
  length.classList.add("invalid");
}

function CheckPasswordStrength(password) {
  var password_strength = document.getElementById("password_strength");

  //TextBox left blank.
  if (password.length == 0) {
    password_strength.innerHTML = "";
    return;
  }

  //Regular Expressions.
  var regex = new Array();
  regex.push("[A-Z]"); //Uppercase Alphabet.
  regex.push("[a-z]"); //Lowercase Alphabet.
  regex.push("[0-9]"); //Digit.
  regex.push("[$@$!%*#?&]"); //Special Character.

  var passed = 0;

  //Validate for each Regular Expression.
  for (var i = 0; i < regex.length; i++) {
    if (new RegExp(regex[i]).test(password)) {
      passed++;
    }
  }

  //Validate for length of Password.
  if (passed > 2 && password.length > 8) {
    passed++;
  }

  //Display status.
  var color = "";
  var strength = "";
  switch (passed) {
    case 0:
    case 1:
      strength = "Poor";
      color = "red";
      break;
    case 2:
      strength = "Medium";
      color = "orange";
      break;
    case 3:
    case 4:
      strength = "Strong";
      color = "green";
      break;
    case 5:
      strength = "Very Strong";
      color = "darkgreen";
      break;
  }
  password_strength.innerHTML = strength;
  password_strength.style.color = color;
}
