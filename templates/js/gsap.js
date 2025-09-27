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

export const initGSAP = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return; // Exit if user prefers reduced motion
    // Animation GSAP
    gsap.fromTo(
      '.animate-text',
      {
        opacity: 0, // État initial
        y: 50, // Décalage vertical initial
        scale: 0.8, // Légère réduction de taille
      },
      {
        opacity: 1, // État final
        y: 0, // Retour à la position normale
        scale: 1, // Taille normale
        duration: 1.5, // Durée de l'animation (1,5 seconde)
        ease: 'power2.out', // Courbe d'animation douce
      }
    );
  } 
}
