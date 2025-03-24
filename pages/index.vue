<template>
  <div>
    <!-- Hero Section -->
    <header class="relative min-h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
      <!-- Background image avec parallax -->
      <div class="absolute inset-0 hero-background" data-speed="0.5">
        <img src="/images/hero.webp" alt="hero-toiture-image" class="hero-image w-full h-full object-cover opacity-70" />
        <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div
        class="relative z-30 max-w-7xl mx-auto text-white px-4 sm:px-6 lg:px-8 py-12 flex flex-col justify-center items-center text-center">
        <h1
          class="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-orange-500 tracking-wide leading-tight">
          <span class="hero-letter inline-block">B</span>
          <span class="hero-letter inline-block">i</span>
          <span class="hero-letter inline-block">e</span>
          <span class="hero-letter inline-block">n</span>
          <span class="hero-letter inline-block">v</span>
          <span class="hero-letter inline-block">e</span>
          <span class="hero-letter inline-block">n</span>
          <span class="hero-letter inline-block">u</span>
          <span class="hero-letter inline-block">e</span>
          <span class="hero-letter inline-block">&nbsp;</span>
          <span class="hero-letter inline-block">c</span>
          <span class="hero-letter inline-block">h</span>
          <span class="hero-letter inline-block">e</span>
          <span class="hero-letter inline-block">z</span>
          <span class="hero-letter inline-block">&nbsp;</span>
          <span class="hero-letter inline-block">T</span>
          <span class="hero-letter inline-block">o</span>
          <span class="hero-letter inline-block">i</span>
          <span class="hero-letter inline-block">t</span>
          <span class="hero-letter inline-block">u</span>
          <span class="hero-letter inline-block">r</span>
          <span class="hero-letter inline-block">e</span>
          <span class="hero-letter inline-block">&nbsp;</span>
          <span class="hero-letter inline-block">M</span>
          <span class="hero-letter inline-block">k</span>
          <span class="hero-letter inline-block">&nbsp;</span>
          <span class="hero-letter inline-block">-</span>
          <span class="hero-letter inline-block">&nbsp;</span>
          <span class="hero-letter inline-block">M</span>
          <span class="hero-letter inline-block">k</span>
          <span class="hero-letter inline-block">&nbsp;</span>
          <span class="hero-letter inline-block">C</span>
          <span class="hero-letter inline-block">o</span>
          <span class="hero-letter inline-block">n</span>
          <span class="hero-letter inline-block">s</span>
          <span class="hero-letter inline-block">t</span>
          <span class="hero-letter inline-block">r</span>
          <span class="hero-letter inline-block">u</span>
          <span class="hero-letter inline-block">c</span>
          <span class="hero-letter inline-block">t</span>
        </h1>
        <p class="hero-subtitle text-lg sm:text-xl md:text-2xl text-white font-normal mb-6">
          Votre partenaire de confiance pour tous vos travaux de rénovation et
          construction
        </p>
        <div class="CTA-button mt-8 md:mt-12 relative z-50">
          <a href="contact"
            class="cta-link inline-block px-6 py-3 bg-orange-500 text-white font-bold rounded-lg transition duration-300 ease-in-out hover:bg-orange-600 relative overflow-hidden">
            <div class="relative z-10">Contactez-nous</div>
            <div class="cta-hover-effect absolute inset-0 bg-orange-600 transform scale-x-0 origin-left transition-transform duration-300"></div>
          </a>
        </div>
      </div>

      <div
        class="hero-scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span class="text-white text-sm mb-2">Découvrir</span>
        <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </header>

    <!-- Section À propos -->
    <section class="py-12 md:py-16 bg-white relative overflow-hidden">
      <div class="about-bg-element absolute -right-20 -top-20 w-64 h-64 rounded-full bg-orange-100 opacity-20"></div>
      <div class="about-bg-element absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-orange-100 opacity-20"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          class="about-title relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-orange-500 mb-6 md:mb-12 pb-4 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-16 md:after:w-24 after:h-1 after:bg-gray-800 dark:after:bg-orange-500">
          À propos
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div class="space-y-6">
            <p class="about-text-1 leading-relaxed text-gray-600 text-base sm:text-lg">
              Que vous ayez besoin de réparations, de rénovations ou de
              nouvelles installations, notre équipe dévouée est là pour vous
              offrir des solutions fiables et durables.
            </p>
            <p class="about-text-2 leading-relaxed text-gray-600 text-base sm:text-lg">
              Depuis plusieurs années, nous mettons notre savoir-faire au
              service des particuliers et des entreprises, en nous assurant de
              répondre aux normes de sécurité et de durabilité les plus
              strictes.
            </p>
            <p class="about-text-3 leading-relaxed text-gray-600 text-base sm:text-lg">
              Notre équipe travaille avec rigueur, professionnalisme et
              transparence, en respectant les délais convenus.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4 mt-6 md:mt-0">
            <div class="about-img-container-1 aspect-square overflow-hidden rounded-lg shadow-lg">
              <img src="/images/a-propos1.webp" alt="toiture-image-apropos1"
                class="about-img-1 w-full h-full object-cover transform transition-transform duration-500" />
            </div>
            <div class="about-img-container-2 aspect-square overflow-hidden rounded-lg shadow-lg">
              <img src="/images/a-propos2.webp" alt="toiture-image-apropos2"
                class="about-img-2 w-full h-full object-cover transform transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Nos Services -->
    <section class="services-section bg-black text-white py-16 relative">
      <div class="service-bg-shape absolute top-0 left-0 w-full h-12 bg-white"
        style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 0)">
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-12">
          Nos Services
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div class="service-card bg-gray-900 rounded-xl p-6 transform transition-all duration-300 hover:scale-105">
            <div class="aspect-video w-full mb-4 overflow-hidden rounded-lg">
              <img src="/images/renovation.webp" alt="Rénovation" class="w-full h-full object-cover" />
            </div>
            <h3 class="text-xl font-bold text-orange-500 mb-4">Rénovation</h3>
            <div class="h-1 w-16 bg-orange-500 mb-4"></div>
            <p class="text-gray-300">
              Experts en rénovation de toitures de tous types : tuiles,
              ardoises, zinc ou membrane EPDM. Nous diagnostiquons et
              réparons les fuites, remplaçons les matériaux endommagés et
              renforçons la structure existante.
            </p>
          </div>

          <!-- Service 2 -->
          <div class="service-card bg-gray-900 rounded-xl p-6 transform transition-all duration-300 hover:scale-105">
            <div class="aspect-video w-full mb-4 overflow-hidden rounded-lg">
              <img src="/images/construction.webp" alt="Construction" class="w-full h-full object-cover" />
            </div>
            <h3 class="text-xl font-bold text-orange-500 mb-4">Construction</h3>
            <div class="h-1 w-16 bg-orange-500 mb-4"></div>
            <p class="text-gray-300">
              Construction de toitures sur-mesure pour maisons
              individuelles, bâtiments collectifs et locaux professionnels.
              Nous utilisons des matériaux certifiés et respectons les
              normes RT2020.
            </p>
          </div>

          <!-- Service 3 -->
          <div class="service-card bg-gray-900 rounded-xl p-6 transform transition-all duration-300 hover:scale-105">
            <div class="aspect-video w-full mb-4 overflow-hidden rounded-lg">
              <img src="/images/isolation.webp" alt="Isolation" class="w-full h-full object-cover" />
            </div>
            <h3 class="text-xl font-bold text-orange-500 mb-4">Isolation</h3>
            <div class="h-1 w-16 bg-orange-500 mb-4"></div>
            <p class="text-gray-300">
              Isolation thermique et phonique complète : combles, rampants
              et toiture. Utilisation de matériaux écologiques. Eligible aux
              aides de l'État MaPrimeRénov'.
            </p>
          </div>
        </div>
      </div>

      <!-- Background elements -->
      <div class="service-bg-element absolute -right-20 top-40 w-40 h-40 rounded-full bg-orange-500 opacity-10"></div>
      <div class="service-bg-element absolute -left-20 bottom-40 w-56 h-56 rounded-full bg-orange-500 opacity-10"></div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useNuxtApp } from "#app";
import { useHead } from '#imports'

// SEO Metadata
useHead({
  title: 'Toiture Mk - Expert en toiture à Zaventem | Accueil',
  meta: [
    {
      name: 'description',
      content: 'Toiture Mk, votre expert en rénovation, construction et isolation de toiture à Zaventem. Plus de 10 ans d\'expérience, devis gratuit.'
    },
    {
      property: 'og:title',
      content: 'Toiture Mk - Expert en toiture à Zaventem | Accueil'
    },
    {
      property: 'og:description',
      content: 'Toiture Mk, votre expert en rénovation, construction et isolation de toiture à Zaventem. Plus de 10 ans d\'expérience, devis gratuit.'
    }
  ]
})

// Initialiser le router
const router = useRouter();

// Fonction de navigation vers la page de contact
const navigateToContact = () => {
  console.log("Navigation vers contact");
  try {
    router.push("/contact");
  } catch (error) {
    console.error("Erreur de navigation:", error);
    // Fallback en cas d'erreur
    window.location.href = "/contact";
  }
};

onMounted(() => {
  const { $gsap, $ScrollTrigger } = useNuxtApp();
  
  if (!$gsap || !$ScrollTrigger) {
    console.warn('GSAP ou ScrollTrigger non disponible');
    return;
  }

  // Détection du mobile
  const isMobile = window.innerWidth < 768;

  // Animation douce de l'image hero
  $gsap.to(".hero-image", {
    scale: isMobile ? 1.05 : 1.1,
    duration: 20,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  });

  // Animation du parallax au scroll (désactivé sur mobile)
  if (!isMobile) {
    $gsap.to("[data-speed]", {
      y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * $ScrollTrigger.maxScroll(window),
      ease: "none",
      scrollTrigger: {
        start: "top top",
        end: "bottom bottom",
        invalidateOnRefresh: true,
        scrub: true
      }
    });
  }

  // Animation du CTA
  const ctaLink = document.querySelector('.cta-link');
  const ctaHover = document.querySelector('.cta-hover-effect');
  
  if (ctaLink && ctaHover) {
    ctaLink.addEventListener('mouseenter', () => {
      $gsap.to(ctaHover, {
        scaleX: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    ctaLink.addEventListener('mouseleave', () => {
      $gsap.to(ctaHover, {
        scaleX: 0,
        duration: 0.3,
        ease: "power2.in"
      });
    });
  }

  // Animation de l'indicateur de scroll
  $gsap.to('.hero-scroll-indicator', {
    y: 10,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });

  // Animation des éléments de fond
  const bgElements = document.querySelectorAll('.about-bg-element, .service-bg-element');
  bgElements.forEach((element, index) => {
    $gsap.to(element, {
      rotation: 360,
      duration: 20 + index * 5,
      repeat: -1,
      ease: "none"
    });
  });

  // Animation des cartes de services au hover
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    const image = card.querySelector('img');
    const title = card.querySelector('h3');
    const line = card.querySelector('.h-1');
    
    card.addEventListener('mouseenter', () => {
      $gsap.to(image, {
        scale: 1.1,
        duration: 0.4,
        ease: "power2.out"
      });
      $gsap.to(title, {
        color: "#fff",
        duration: 0.3
      });
      $gsap.to(line, {
        width: "100%",
        duration: 0.4,
        ease: "power2.out"
      });
    });
    
    card.addEventListener('mouseleave', () => {
      $gsap.to(image, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      });
      $gsap.to(title, {
        color: "#f97316", // orange-500
        duration: 0.3
      });
      $gsap.to(line, {
        width: "4rem", // 16 en tailwind
        duration: 0.4,
        ease: "power2.in"
      });
    });
  });

  // Animation des images à propos au scroll
  const aboutImagesTimeline = $gsap.timeline({
    scrollTrigger: {
      trigger: ".about-img-container-1",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  aboutImagesTimeline
    .from(".about-img-container-1", {
      x: -50,
      y: 30,
      opacity: 0,
      rotation: -5,
      duration: 1,
      ease: "power3.out"
    })
    .from(".about-img-container-2", {
      x: 50,
      y: -30,
      opacity: 0,
      rotation: 5,
      duration: 1,
      ease: "power3.out"
    }, "-=0.7");

  // Nettoyage au démontage
  onUnmounted(() => {
    if ($ScrollTrigger) {
      $ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
    $gsap.killTweensOf("*");
    
    // Nettoyage des événements
    const ctaLink = document.querySelector('.cta-link');
    if (ctaLink) {
      ctaLink.removeEventListener('mouseenter', null);
      ctaLink.removeEventListener('mouseleave', null);
    }
    
    serviceCards.forEach(card => {
      card.removeEventListener('mouseenter', null);
      card.removeEventListener('mouseleave', null);
    });
  });
});
</script>

<style>
.services-section {
  position: relative;
  overflow: hidden;
}

.service-card {
  transition: all 0.3s ease;
}

.service-card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
</style>