 document.addEventListener("DOMContentLoaded", function () {
      // Display the modal on load
      showAboutUsModal();

      // Close the modal after 10 seconds
      setTimeout(function () {
        closeAboutUsModal();
      }, 10000);
    });

    function showAboutUsModal() {
      // Show the modal and apply blurred background effect
      document.body.classList.add('blurred');
      var modal = document.getElementById("aboutUsModal");
      modal.style.display = "block";
    }

    function closeAboutUsModal() {
      // Close the modal and remove blurred background effect
      document.body.classList.remove('blurred');
      var modal = document.getElementById("aboutUsModal");
      modal.style.display = "none";
    }