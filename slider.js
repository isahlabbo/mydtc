// Hero image slider with fade-in and typing effect
// To add more images, add to the slides array below
const slides = [
  {
    img: 'images/welcome.jpeg',
    desc: 'State-of-the-art CBT Facility with 300+ computers.'
  },
  {
    img: 'images/hall1.jpeg',
    desc: 'Accredited for JAMB, WAEC, and local exams.'
  },
  {
    img: 'images/hall2.jpeg',
    desc: 'Empowering the community with digital skills.'
  },
  {
    img: 'images/power.jpeg',
    desc: 'Un interrupted power supply.'
  },
  {
    img: 'images/registration.jpeg',
    desc: 'Mordern Equiped Registration Unit.'
  },
  {
    img: 'images/entrance.jpeg',
    desc: 'We are here for you'
  }
];

let current = 0;
let typingTimeout;

function showSlide(idx) {
  const imgDiv = document.getElementById('hero-slide-img');
  const descDiv = document.getElementById('hero-slide-desc');
  if (!imgDiv || !descDiv) return;
  // Fade out
  imgDiv.style.opacity = 0;
  setTimeout(() => {
    imgDiv.style.backgroundImage = `url('${slides[idx].img}')`;
    imgDiv.style.opacity = 1;
    // Typing effect
    typeText(descDiv, slides[idx].desc);
  }, 500);
}

function typeText(el, text) {
  el.textContent = '';
  let i = 0;
  function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      typingTimeout = setTimeout(type, 32);
    }
  }
  type();
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

document.addEventListener('DOMContentLoaded', function() {
  showSlide(current);
  setInterval(nextSlide, 5200);
});
