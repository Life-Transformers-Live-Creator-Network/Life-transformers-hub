document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const navClose = document.getElementById('navClose');
  const navOverlay = document.getElementById('navOverlay');
  const body = document.body;
  
  function openMenu() {
    mobileNav.classList.add('active');
    navOverlay.classList.add('active');
    mobileMenuBtn.classList.add('active');
    body.classList.add('nav-open');
  }
  
  function closeMenu() {
    mobileNav.classList.remove('active');
    navOverlay.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
    body.classList.remove('nav-open');
  }
  
  mobileMenuBtn.addEventListener('click', function() {
    if (mobileNav.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
  
  navClose.addEventListener('click', closeMenu);
  
  navOverlay.addEventListener('click', closeMenu);
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
      closeMenu();
    }
  });
  
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.closest('.nav-item').classList.add('active');
    }
  });
});
