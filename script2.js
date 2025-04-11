// Fade-In On Scroll
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});

// Contact Form Validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("form-msg");

  if (!name || !email || !message) {
    msg.textContent = "Please fill in all fields.";
    msg.className = "text-red-500 text-sm text-center";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    msg.textContent = "Enter a valid email address.";
    msg.className = "text-red-500 text-sm text-center";
  } else {
    msg.textContent = "Thank you! We’ll get back to you soon.";
    msg.className = "text-green-500 text-sm text-center";
    this.reset();
  }
});

// Dark Mode Toggle
document.getElementById("darkToggle").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

// Mobile Menu Toggle
document.getElementById("mobile-menu-button").addEventListener("click", () => {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});
