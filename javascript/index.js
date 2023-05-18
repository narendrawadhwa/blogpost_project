// opening part B that is Post List
function openPostList() {
  window.location.href = "postslist.html"; 
}


//createpost

// Get the modal
var createPost = document.getElementById("newPost");

// Get the button that opens the modal
var btn = document.querySelector(".create-pst button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-button")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  createPost.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  createPost.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == createPost) {
    createPost.style.display = "none";
  }
}