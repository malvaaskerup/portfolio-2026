
document.addEventListener('DOMContentLoaded', function () {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const prevZone = document.querySelector('.nav-prev');
  const nextZone = document.querySelector('.nav-next');

  let currentIndex = 0;

  function showSlide(index) {
    if (!slides.length) return;

    slides[currentIndex].classList.remove('active');
    // loopable index
    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
  }

  prevZone.addEventListener('click', function () {
    showSlide(currentIndex - 1);
  });

  nextZone.addEventListener('click', function () {
    showSlide(currentIndex + 1);
  });

  // Optional: keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      showSlide(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      showSlide(currentIndex + 1);
    }
  });

  // Ensure the first slide is visible on load
  if (slides.length) {
    slides.forEach((s, i) => s.classList.toggle('active', i === 0));
  }

  // Clicking the plain text of the folded-out about block closes it again
  // (same as clicking the name); clicking a link inside it still opens
  // that link normally instead of closing the block.
  const aboutToggle = document.getElementById('about-toggle');
  const aboutDetails = document.querySelector('.about-details');

  if (aboutToggle && aboutDetails) {
    aboutDetails.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;
      aboutToggle.checked = false;
    });
  }
});
