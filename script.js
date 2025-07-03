// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Scroll spy
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;
    if (top >= offset && top < offset + height) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Modal logic
function openModal() {
  document.getElementById('modal').style.display = 'flex';
}
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Contact form validation
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert('❌ Please fill in all fields.');
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    alert('⚠️ Please enter a valid email address.');
  } else {
    alert(`✅ Message sent! (Not really, just a frontend demo 😉)\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    this.reset();
  }
});
