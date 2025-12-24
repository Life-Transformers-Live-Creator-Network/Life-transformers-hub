document.addEventListener('DOMContentLoaded', function() {
  fetch('/includes/mobile-nav.html')
    .then(response => response.text())
    .then(html => {
      document.body.insertAdjacentHTML('afterbegin', html);
      
      const script = document.createElement('script');
      script.src = '/js/mobile-nav.js';
      document.body.appendChild(script);
    })
    .catch(error => {
      console.error('Error loading navigation:', error);
    });
});
