// Get all calendar day elements
const days = document.querySelectorAll('.day');

// Get the modal
const modal = document.getElementById('messageModal');

// Get the message content container and close button elements
const messageContent = document.getElementById('messageContent');
const closeModal = document.querySelector('.close');

// Get today's date
const today = new Date();
const currentDay = today.getDate();

// Iterate over each day element
days.forEach(day => {
  const dayNumber = parseInt(day.textContent); // Get the number from the day

  if (dayNumber < currentDay) {
    // Style past days
    day.style.backgroundColor = '#581818'; // Red for past days
    day.style.color = '#ffffff'; // Set the text color (e.g., white)
    day.style.cursor = 'pointer'; // Allow clicking
    
  } else if (dayNumber === currentDay) {
    // Style the current day
    day.style.backgroundColor = '#189e39'; // Green for today
    day.style.cursor = 'pointer'; // Allow clicking
  } else {
    // Style future days
    day.style.backgroundColor = '#d3d3d3'; // Gray for future days
    day.style.cursor = 'not-allowed'; // Prevent clicking
    day.addEventListener('click', () => {}); // Do nothing for future days
    return; // Skip further logic for future days
  }

  // Add click event for past and current days
  day.addEventListener('click', function () {
    const message = this.getAttribute('data-message');
    messageContent.innerHTML = ''; // Clear previous content

    if (message.startsWith('http')) {
      // If the message is a URL, display an image
      const img = document.createElement('img');
      img.src = message;
      img.alt = `Image for Day ${dayNumber}`;
      img.style.maxWidth = '80%'; // Responsive styling
      img.style.borderRadius = '10px'; // Optional styling
      messageContent.appendChild(img);
    } else if (message.includes('http')) {
      // If the message contains text and a link
      const [text, url] = message.split('http');
      const paragraph = document.createElement('p');
      paragraph.textContent = text.trim(); // Text before the link

      const link = document.createElement('a');
      link.href = `http${url.trim()}`;
      link.textContent = 'Click here to open';
      link.target = '_blank'; // Open link in a new tab
      messageContent.appendChild(paragraph);
      messageContent.appendChild(link);
    } else {
      // Otherwise, treat it as plain text
      const paragraph = document.createElement('p');
      paragraph.innerHTML = message; // This allows HTML tags to render
      messageContent.appendChild(paragraph);
    }

    // Show the modal
    modal.style.display = 'block';
  });
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
