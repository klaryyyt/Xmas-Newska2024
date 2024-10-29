// Get all calendar day elements
const days = document.querySelectorAll('.day');

// Get the modal
const modal = document.getElementById('messageModal');

// Get the message text and close button elements
const messageText = document.getElementById('messageText');
const closeModal = document.querySelector('.close');

// Get today's date
const today = new Date();
const currentDay = today.getDate();

// Iterate over each day element
days.forEach(day => {
  const dayNumber = parseInt(day.textContent); // Get the number from the day

  if (dayNumber < currentDay) {
    // For past days, set the background color to red and disable clicking
    day.style.backgroundColor = '#189e39'; // green color for past days
    day.style.cursor = 'not-allowed'; // indicate it's not clickable
    day.addEventListener('click', function () {
      // Nothing happens when you click past days
    });
  } else if (dayNumber === currentDay) {
    // For the current day, allow clicking to open the modal
    day.addEventListener('click', function () {
      // Get the message from the data attribute
      const message = this.getAttribute('data-message');
      
      // Display the message in the modal
      messageText.textContent = message;
      modal.style.display = 'block';
    });
  } else {
    // Future days are disabled until their day comes
    day.style.cursor = 'not-allowed'; // indicate it's not clickable
    day.style.backgroundColor = '#b1b3b1'; // grey color for future days
    day.addEventListener('click', function () {
      // Display nothing for future days
    });
  }
});

// Close the modal when the "x" is clicked
closeModal.addEventListener('click', function () {
  modal.style.display = 'none';
});

// Close the modal when clicking anywhere outside the modal
window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
