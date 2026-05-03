document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");
  let gender = document.getElementById("gender");

  let valid = true;

  function showError(input, message) {
    input.nextElementSibling.innerText = message;
    valid = false;
  }

  function clearError(input) {
    input.nextElementSibling.innerText = "";
  }

  // Name
  if(name.value === "") showError(name, "Name required");
  else clearError(name);

  // Email
  if(email.value === "") showError(email, "Email required");
  else clearError(email);

  // Phone
  if(phone.value.length !== 10) showError(phone, "Enter valid 10-digit number");
  else clearError(phone);

  // Password
  if(password.value.length < 6) showError(password, "Min 6 characters");
  else clearError(password);

  // Confirm Password
  if(confirmPassword.value !== password.value) showError(confirmPassword, "Passwords not match");
  else clearError(confirmPassword);

  // Gender
  if(gender.value === "") showError(gender, "Select gender");
  else clearError(gender);

  if(valid) {
    alert("Registration Successful!");
  }
});