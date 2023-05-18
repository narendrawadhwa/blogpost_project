
//main code//

let editMode = false;
let likeCount = 0;
const likeInfo = document.querySelector('.like-info');

function toggleEditMode() {
  const postTitle = document.querySelector('h2');
  const postText = document.querySelector('p');
  const editBtn = document.querySelector('.edit-btn');
  
  if (editMode) {
    postTitle.contentEditable = "false";
    postText.contentEditable = "false";
    editBtn.innerHTML = '<i class="fas fa-edit"></i>Edit';
    saveChanges(postTitle.innerText, postText.innerText);
  } else {
    postTitle.contentEditable = "true";
    postText.contentEditable = "true";
    editBtn.innerHTML = '<i class="fas fa-save"></i>Save';
  }
  
  editMode = !editMode;
}

function saveChanges(title, text) {
  // Code to save the changes to the server/database
}

function likePost() {
  const likeBtn = document.querySelector('.like-btn');
  
  if (likeBtn.innerText === 'Like') {
    likeCount++;
    likeInfo.innerText = likeCount === 1 ? '1 person likes this!' : `${likeCount} people like this!`;
    likeBtn.innerHTML = '<i class="fas fa-thumbs-up"></i>Liked!';
  }
}

function addComment() {
  const commentInput = document.querySelector('.comment-input');
  const commentText = commentInput.value.trim();
  
  if (commentText !== '') {
    const allComments = document.querySelector('.all-comments');
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerText = commentText;
    allComments.insertBefore(newComment, allComments.firstChild);
    commentInput.value = '';
  }
}








var originalTitle;
  var originalContent;

  function enableEditing() {
    var titleElement = document.getElementById("post-title");
    var textElement = document.getElementById("post-text");
    var editButton = document.getElementById("edit-btn");

    titleElement.contentEditable = true;
    textElement.contentEditable = true;
    titleElement.classList.add("editable");
    textElement.classList.add("editable");
    editButton.innerHTML = '<i class="fas fa-save"></i> Save';
    editButton.onclick = saveChanges;

    originalTitle = titleElement.innerText;
    originalContent = textElement.innerText;
  }

  function saveChanges() {
    var titleElement = document.getElementById("post-title");
    var textElement = document.getElementById("post-text");
    var editButton = document.getElementById("edit-btn");

    titleElement.contentEditable = false;
    textElement.contentEditable = false;
    titleElement.classList.remove("editable");
    textElement.classList.remove("editable");
    editButton.innerHTML = 'Edit <i class="fas fa-edit"></i> ';
    editButton.onclick = enableEditing;

    if (titleElement.innerText !== originalTitle) {
      titleElement.innerHTML = "UPDATED: " + titleElement.innerText;
    }

    if (textElement.innerText !== originalContent) {
      var updatedContent = "UPDATED: " + textElement.innerText;
      textElement.innerHTML = "<br>" + updatedContent;
    }
  }