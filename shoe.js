let itemCount = document.getElementById("item-count");

const dialogBox = document.getElementById("dialogBox");
const closeDialogButton = document.getElementById("closeDialogButton");
document.addEventListener('DOMContentLoaded', function() {
    const clickableElements = document.querySelectorAll('.shoe-item-link');

    clickableElements.forEach(function(element) {
        element.addEventListener('click', function() {
            dialogBox.style.display = "block";
            let count = parseInt(itemCount.textContent); // Access textContent
            itemCount.textContent = count + 1; // Update text content

            setTimeout(function() {
                dialogBox.style.display = "none";
            }, 600); // Display the dialog box for 1 second (1000 milliseconds)
        });
    });
});

closeDialogButton.addEventListener("click", () => {
    dialogBox.style.display = "none";
});