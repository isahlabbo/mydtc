// Hero animation and interactivity

document.addEventListener('DOMContentLoaded', function() {
  // Animate hero text
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) {
    heroTitle.classList.add('animate-hero-title');
  }

  // Animate hero background shapes with green, orange, and brown
  const hero = document.querySelector('.hero');
  const colors = ['rgba(18, 188, 80, 0.50)', 'rgba(250, 147, 3, 0.50)', 'rgba(139,69,19,0.50)']; // green, orange, brown, higher opacity
  if (hero) {
    for (let i = 0; i < 8; i++) {
      const shape = document.createElement('div');
      shape.className = 'hero-shape';
      shape.style.left = Math.random() * 100 + '%';
      shape.style.animationDelay = (Math.random() * 0.8) + 's';
      shape.style.background = colors[i % colors.length];
      hero.appendChild(shape);
    }
  }

  // Button hover effect
  document.querySelectorAll('.hero .btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => btn.classList.add('btn-glow'));
    btn.addEventListener('mouseleave', () => btn.classList.remove('btn-glow'));
  });
});
