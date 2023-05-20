// opening part B that is Post List
function openPostList() {
  window.location.href = "../upgrad_project/html/postslist.html"; 
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







function countWords() {
  var textarea = document.getElementById("myTextarea");
  var wordCount = document.getElementById("wordCount");
  
  // Split the textarea value by whitespace to count words
  var words = textarea.value.trim().split(/\s+/);
  
  // Display the word count or 0 if there is no input
  var count = textarea.value.trim() !== "" ? words.length : 0;
  wordCount.textContent = "Word Count: " + count;
}

function showWarningMessage() {
  var textarea = document.getElementById("myTextarea");
  var warningMessage = document.getElementById("warningMessage");
  
  // Split the textarea value by whitespace to count words
  var words = textarea.value.trim().split(/\s+/);
  
  // Check if the word count is below the minimum limit (e.g., 10)
  if (words.length < 10) {
    warningMessage.textContent = "Word count is below the minimum limit!";
    warningMessage.style.display = "block"; // Display the warning message
  } else if (words.length > 100) {
    warningMessage.textContent = "Word count has exceeded the maximum limit!";
    warningMessage.style.display = "block"; // Display the warning message
  } else {
    warningMessage.style.display = "none"; // Hide the warning message
    form.style.display = "none";

  }
}



