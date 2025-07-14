// Function to extract filename from URL
function getFilename(url) {
    return url.substring(url.lastIndexOf('/') + 1);
}

// Get the current URL's filename
var currentFilename = getFilename(window.location.href);

// Get all nav links
var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Loop through each nav link
navLinks.forEach(function(link) {
    // Get the filename part of the href attribute of the link
    var linkFilename = getFilename(link.getAttribute('href'));

    // Check if the link's filename matches the current URL's filename
    if (linkFilename === currentFilename) {
        // Add the 'active' class to the parent nav-item
        link.parentNode.classList.add('active');
    } else {
        // Optionally, ensure other nav-items are not marked active
        link.parentNode.classList.remove('active');
    }
});