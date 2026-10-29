// Toggle Mobile Menu
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  menuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });




  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      // Close mobile menu if open
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Back to Top Button
  const backToTopButton = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Gallery Filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryGrid = document.querySelector('.gallery-grid');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));

      // Add active class to clicked button
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');
      renderGallery(filter);
    });
  });

  // Form Submission to WhatsApp
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    const whatsappMessage = `مرحبا، أنا ${name}، رقم هاتفي: ${phone}، أرغب في طلب خدمة: ${service}، التفاصيل: ${message}`;

    window.open(`https://wa.me/+96560707610?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  });

  // Modal for Gallery Images
  window.openModal = function (img) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');

    modal.style.display = 'flex';
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

    setTimeout(() => {
      modal.classList.add('show');
    }, 10);
  }

  window.closeModal = function () {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');

    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  }

  // Close modal when clicking outside the image
  const modal = document.getElementById('modal');
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Animate sections on scroll
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));



  // Dynamic Gallery from config
  function renderGallery(filter) {
    if (!galleryGrid) return;
    const cfg = getConfig();
    const items = (cfg.gallery || []);
    const frag = document.createDocumentFragment();
    items.filter(it => filter === 'all' || !filter || it.category === filter)
      .forEach(it => {
        const wrap = document.createElement('div');
        wrap.className = `gallery-item ${it.category}`;
        wrap.setAttribute('data-category', it.category);
        wrap.innerHTML = `
          <img src="${it.src}" alt="${it.alt}" class="gallery-image" loading="lazy" onclick="openModal(this)">
          <div class="gallery-overlay">
            <h4>${it.title || ''}</h4>
            <p>${it.subtitle || ''}</p>
          </div>`;
        frag.appendChild(wrap);
      });
    galleryGrid.innerHTML = '';
    galleryGrid.appendChild(frag);
  }

})
