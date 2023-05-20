// Sign Up
// Get the modal
var modal = document.getElementById("myModal");
var form = document.getElementById("my-form");
var msg =document.getElementById("message");

// Get the button that opens the modal
var btn = document.querySelector(".signup button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  msg.style.display = "block";

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  form.reset();
  msg.style.display = "none";


}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    form.reset();
    msg.style.display = "none";
  }
}




//this function is for validating details of signup form
function validateDetails(event) {
  event.preventDefault(); // Prevent form submission

  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirm-password");
  var username = document.getElementById("username");
  var name = document.getElementById("name");
  var messageField = document.getElementById("message");

  // Define the regular expression patterns
  var passwordPattern = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  var usernamePattern = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
  var namePattern = /^[a-zA-Z]+$/;

  if (!namePattern.test(name.value)) {
    name.classList.add("error"); // Add error class to name input
    password.classList.remove("error"); // Remove error class from password input
    confirmPassword.classList.remove("error"); // Remove error class from confirm password input
    username.classList.remove("error"); // Remove error class from username input
    messageField.innerHTML = "Name must contain only alphabets."
  }
   else if (!usernamePattern.test(username.value)) {
    username.classList.add("error"); // Add error class to username input
    password.classList.remove("error"); // Remove error class from password input
    confirmPassword.classList.remove("error"); // Remove error class from confirm password input
    name.classList.remove("error"); // Remove error class from name input
    messageField.innerHTML = "Username must be a combination of letters and numbers.";
  }
   else if (password.value !== confirmPassword.value) {
    password.classList.add("error"); // Add error class to password input
    confirmPassword.classList.add("error"); // Add error class to confirm password input
    username.classList.remove("error"); // Remove error class from username input
    name.classList.remove("error"); // Remove error class from name input
    messageField.innerHTML = "Password and Confirm Password must match." ;
  } 
   else if (!passwordPattern.test(password.value)) {
    password.classList.add("error"); // Add error class to password input
    confirmPassword.classList.remove("error"); // Remove error class from confirm password input
    username.classList.remove("error"); // Remove error class from username input
    name.classList.remove("error"); // Remove error class from name input
    messageField.innerHTML = "Password must be at least 8 characters long and contain special characters.";
  } 
  else {
    password.classList.remove("error"); // Remove error class from password input
    confirmPassword.classList.remove("error"); // Remove error class from confirm password input
    username.classList.remove("error"); // Remove error class from username input
    name.classList.remove("error"); // Remove error class from name input
    messageField.innerHTML = "Thank you for your details! You have successfully signed up";
    messageField.style.color = "blue"; // Set the color of the message to blue

}
}





//signin button
// Get the modal
var modals = document.getElementById("myModals");
var forms = document.getElementById("signinForm");
var mesg = document.getElementById("messageForsignin");


// Get the button that opens the modal
var btn = document.querySelector(".signin button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modals.style.display = "block";
  msg.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modals.style.display = "none";
  forms.reset();
  mesg.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modals) {
    modals.style.display = "none";
    forms.reset();
  mesg.style.display = "none";
  }
}

//when clicking on not a member sign up button
function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  modals.style.display="none";
  forms.reset();
  mesg.style.display = "none";
  
}




//this function is for checking signin details
function checkDetails(event) {
  event.preventDefault(); // Prevent form submission

  var password = document.getElementById("passwords");
  var username = document.getElementById("usernames");
  var message = document.getElementById("messageForsignin");

  // Define the regular expression patterns
  var passwordPattern = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  var usernamePattern = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;

   if (!usernamePattern.test(username.value)) {
    username.classList.add("error"); // Add error class to username input
    password.classList.remove("error"); // Remove error class from password input
    message.innerHTML = "Username must be a combination of letters and numbers.";
  }
   else if (!passwordPattern.test(password.value)) {
    password.classList.add("error"); // Add error class to password input
    username.classList.remove("error"); // Remove error class from username input
    message.innerHTML = "Password must be at least 8 characters long and contain special characters.";
  } 
  else {
    password.classList.remove("error"); // Remove error class from password input
    username.classList.remove("error"); // Remove error class from username input
    message.innerHTML = "Thank you for your details! You have successfully logged in";
    message.style.color = "blue"; // Set the color of the message to blue

    // Delay before closing the signin modal
  }
}