// JavaScript for loading header and footer dynamically
document.addEventListener("DOMContentLoaded", function () {
    // Function to load HTML content into a target element
    function loadContent(file, targetId) {
      fetch(file)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to load ${file}`);
          }
          return response.text();
        })
        .then(data => {
          document.getElementById(targetId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
    }
  
    // Load header
    loadContent('header.html', 'header');
  
    // Load footer
    loadContent('footer.html', 'footer');
  });