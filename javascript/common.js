// Sign Up
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".signup button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



function validatePassword(event) {
  event.preventDefault(); // Prevent form submission
  
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirm-password");
  var messageField = document.getElementById("message");
  
  // Define the regular expression pattern
  var pattern = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  
  if (password.value !== confirmPassword.value) {
    password.classList.add("error"); // Add error class to password input
    confirmPassword.classList.add("error"); // Add error class to password input
    messageField.innerHTML = "Password and Confirm Password must match.";
  } else if (!pattern.test(password.value)) {
    password.classList.add("error"); // Add error class to password input
    messageField.innerHTML = "Password must be at least 8 characters long and contain special characters.";
  } else {
    password.classList.remove("error"); // Remove error class from password input
    messageField.innerHTML = "Password is valid. Form will be submitted.";
    
    // Here you can add code to submit the form or perform other actions
    document.getElementById("my-form").submit(); // Submit the form
    document.getElementById("my-form").reset(); // Reset the form
    document.getElementById("my-form").style.display = "none"; // Hide the form
  }
}

function removeErrorClass() {
  this.classList.remove("error"); // Remove error class on input
  var messageField = document.getElementById("message");
  messageField.innerHTML = ""; // Clear the message field
}





//signin button
// Get the modal
var modals = document.getElementById("myModals");

// Get the button that opens the modal
var btn = document.querySelector(".signin button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modals.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modals.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modals) {
    modals.style.display = "none";
  }
}

//when clicking on not a member sign up button
function openModal() {
  var modal = document.getElementById("myModal");

  modal.style.display = "block";
  modals.style.display= "none";
}