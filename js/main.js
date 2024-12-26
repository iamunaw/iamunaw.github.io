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

// Header change on scroll
window.onscroll = function() {myFunction()};

var header_box = document.getElementById("header");

function myFunction() {
  if (window.pageYOffset > 115) {
    header_box.classList.add("sticky");
    header_box.classList.add("header-m");
  } else {
    header_box.classList.remove("sticky");
    header_box.classList.remove("header-m");
  }
}

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('show');
});