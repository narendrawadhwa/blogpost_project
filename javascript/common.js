// Sign Up
// Get the modal
var modal = document.getElementById("myModal");
var form = document.getElementById("my-form");

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
  form.reset();


}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    form.reset();
  }
}





//signin button
// Get the modal
var modals = document.getElementById("myModals");
var forms = document.getElementById("signinForm");


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
  forms.reset();

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modals) {
    modals.style.display = "none";
    forms.reset();
  }
}



//when clicking on not a member sign up button
function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  modals.style.display="none";
  forms.reset();  
}




