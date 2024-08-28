// script.js

document.addEventListener('DOMContentLoaded', function() {
    const socialMediaIcons = document.querySelectorAll('.social-media a');
  
    socialMediaIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            icon.style.transform = 'scale(1.1)';
            icon.style.transition = 'transform 0.3s';
        });
  
        icon.addEventListener('mouseout', function() {
            icon.style.transform = 'scale(1)';
        });
    });
  });
  