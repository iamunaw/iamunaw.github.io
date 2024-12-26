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


  
  //版頭改變
  window.onscroll = function() {myFunction()};

  var header_box = document.getElementById("header");
  var sticky = header_box.offsetTop;

  function myFunction() {
    if (window.pageYOffset > 115) {
      $('header').addClass("header-m");
      header_box.classList.add("sticky");
    } else {
      $('header').removeClass("header-m");
      header_box.classList.remove("sticky");
    }
  }
  
