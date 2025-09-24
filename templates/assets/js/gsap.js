if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Run GSAP or vanilla JS animation
  // Split text into letters and wrap each in a span
  const text = document.querySelector('.animate-text');
const letterHover = document.querySelector('.animate-text span');

  const letters = text.textContent.split('');
  text.innerHTML = letters.map((letter) => `<span>${letter}</span>`).join('');

  // Animate each letter with GSAP
  gsap.from('.animate-text span', {
    opacity: 0,
    y: 50, // Slide up from 50px below
    rotate: 0, // Rotate each letter
    transformOrigin: 'center',
    duration: 0.8,
    stagger: 0.15, // Delay between each letter
    ease: 'power2.out',
    onComplete: () => console.log('Animation complete!'),
  });
  // Add a hover effect to animate letters back to their original position
  text.addEventListener('mouseenter', () => {
    gsap.to('.animate-text span', {
      y: 0,
      rotate: 180, // Rotate each letter
      transformOrigin: 'center',
      duration: 0.5,
      ease: 'power2.out',
    });
  });
  text.addEventListener('mouseleave', () => {
    gsap.to('.animate-text span', {
      y: 50,
      duration: 0.5,
      ease: 'power2.out',
    });
  });
} else {
  // Show text without animation
  document.querySelectorAll('.animate-text span').forEach((span) => {
    span.style.opacity = 1;
    span.style.transform = 'none';
  });
}

