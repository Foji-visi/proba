// Sticky header state
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Mobile nav
  const navToggle = document.getElementById('navToggle');
  const navClose = document.getElementById('navClose');
  const mobileNav = document.getElementById('mobileNav');
  navToggle.addEventListener('click', () => mobileNav.classList.add('open'));
  navClose.addEventListener('click', () => mobileNav.classList.remove('open'));
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal, .thread-step');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  revealEls.forEach(el => io.observe(el));
