// Toggle Dark Mode
const themeToggle = document.getElementById('theme-toggle');

document.addEventListener('DOMContentLoaded', () => {
  const isDarkMode = localStorage.getItem('dark-mode') === 'true';
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }
});

themeToggle.addEventListener('click', () => {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', isDarkMode);
});

// Show Thank You Message on Form Submission
const contactForm = document.getElementById('contact-form');
const nameField = document.getElementById('name');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  const name = nameField.value.trim();
  if (name) {
    alert(`${name}, thank you for submitting your response!`);
  } else {
    alert('Thank you for submitting your response!');
  }

  // Clear all form fields after the popup
  contactForm.reset();
});
