// plugins/aos.js
import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin(nuxtApp => {
  // Vérifier si l'on est dans un environnement client
  if (process.client) {
    // Initialisation de AOS
    AOS.init({
      duration: 800, // Durée des animations
      once: true,    // L'animation se fait uniquement la première fois
    });
  }
});
