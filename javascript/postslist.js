const overlay = document.querySelector('.overlay');
   const mod = document.querySelector('.mod');
   let postToDelete = null;

   function deletePost() {
    if (postToDelete) {
      const container = postToDelete.closest('.container');
      container.parentNode.removeChild(container);
  
      // Rearrange remaining posts
      const containers = document.querySelectorAll('.container');
      containers.forEach((container, index) => {
        container.style.order = index + 1;
      });
  
      const centerContainers = document.querySelectorAll('.center-container');
      centerContainers.forEach((centerContainer) => {
        centerContainer.classList.remove('center-container');
        centerContainer.classList.add('center-container-margin-change');
      });
    }
  
    closeConfirmationModal();
    clearConfirmationModal();
  }
 
  function openConfirmationModal(element) {
    postToDelete = element.closest('.container');
    overlay.classList.add('show');
  }
  
  function closeConfirmationModal() {
    overlay.classList.remove('show');
    const warningMessage = mod.querySelector('.overlay');
    warningMessage.style.display = 'none';
  }
  
  function clearConfirmationModal() {
    postToDelete = null;
  }
  


  function  openPost() {
    window.location.href = "post.html"; 
  }

