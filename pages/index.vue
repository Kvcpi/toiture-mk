<template>
  <div>
    <!-- Hero Section -->
    <header
      class="relative min-h-[80vh] md:h-screen flex items-center justify-center overflow-hidden"
    >
      <!-- Background image -->
      <div class="absolute inset-0 hero-background">
        <img
          src="/images/hero.webp"
          alt="hero-toiture-image"
          class="w-full h-full object-cover opacity-70"
        />
        <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div
        class="relative z-30 max-w-7xl mx-auto text-white px-4 sm:px-6 lg:px-8 py-12 flex flex-col justify-center items-center text-center"
      >
        <h1
          class="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-orange-500 tracking-wide leading-tight"
        >
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
        <p
          class="hero-subtitle text-lg sm:text-xl md:text-2xl text-white font-normal mb-6"
        >
          Votre partenaire de confiance pour tous vos travaux de rénovation et
          construction
        </p>
        <div class="CTA-button mt-8 md:mt-12 relative z-50">
          <a
            href="contact"
            class="inline-block px-6 py-3 bg-orange-500 text-white font-bold rounded-lg transition duration-300 ease-in-out"
          >
            <div>Contactez-nous</div>
          </a>
        </div>
      </div>

      <div
        class="hero-scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span class="text-white text-sm mb-2">Découvrir</span>
        <div
          class="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <div class="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </header>

    <!-- Section À propos -->
    <section class="py-12 md:py-16 bg-white relative overflow-hidden">
      <div
        class="about-bg-element absolute -right-20 -top-20 w-64 h-64 rounded-full bg-orange-100 opacity-20"
      ></div>
      <div
        class="about-bg-element absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-orange-100 opacity-20"
      ></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          class="about-title relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-orange-500 mb-6 md:mb-12 pb-4 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-16 md:after:w-24 after:h-1 after:bg-gray-800 dark:after:bg-orange-500"
        >
          À propos
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div class="space-y-6">
            <p
              class="about-text-1 leading-relaxed text-gray-600 text-base sm:text-lg"
            >
              Que vous ayez besoin de réparations, de rénovations ou de
              nouvelles installations, notre équipe dévouée est là pour vous
              offrir des solutions fiables et durables.
            </p>
            <p
              class="about-text-2 leading-relaxed text-gray-600 text-base sm:text-lg"
            >
              Depuis plusieurs années, nous mettons notre savoir-faire au
              service des particuliers et des entreprises, en nous assurant de
              répondre aux normes de sécurité et de durabilité les plus
              strictes.
            </p>
            <p
              class="about-text-3 leading-relaxed text-gray-600 text-base sm:text-lg"
            >
              Notre équipe travaille avec rigueur, professionnalisme et
              transparence, en respectant les délais convenus.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4 mt-6 md:mt-0">
            <div
              class="about-img-container-1 aspect-square overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src="/images/a-propos1.webp"
                alt="toiture-image-apropos1"
                class="about-img-1 w-full h-full object-cover transform transition-transform duration-500"
              />
            </div>
            <div
              class="about-img-container-2 aspect-square overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src="/images/a-propos2.webp"
                alt="toiture-image-apropos2"
                class="about-img-2 w-full h-full object-cover transform transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Nos Services -->
    <section
      class="bg-black text-white py-12 md:py-16 relative overflow-hidden"
    >
      <div
        class="service-bg-shape absolute top-0 left-0 w-full h-12 bg-white"
        style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 0)"
      ></div>
      <div
        class="service-bg-element absolute -right-20 top-40 w-40 h-40 rounded-full bg-orange-500 opacity-10"
      ></div>
      <div
        class="service-bg-element absolute -left-20 bottom-40 w-56 h-56 rounded-full bg-orange-500 opacity-10"
      ></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          class="services-title relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-center text-orange-500 mb-8 pb-4 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-16 md:after:w-24 after:h-1 after:bg-orange-500"
        >
          Nos services
        </h2>

        <div class="relative">
          <!-- Version mobile avec scroll -->
          <div
            class="md:hidden flex overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 space-x-4 scrollbar-hide"
          >
            <!-- Service 1 Mobile -->
            <div
              class="service-card-1 snap-center flex-none w-[85vw] sm:w-[45vw]"
            >
              <div
                class="bg-gray-900 rounded-xl p-4 h-full transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/20"
              >
                <div
                  class="aspect-video w-full mb-4 overflow-hidden rounded-lg"
                >
                  <img
                    src="/images/renovation.webp"
                    alt="Rénovation"
                    class="service-img-1 w-full h-full object-cover"
                  />
                </div>
                <h3 class="text-xl font-bold text-orange-500 mb-2">
                  Rénovation
                </h3>
                <p class="text-gray-300 text-sm sm:text-base">
                  Experts en rénovation de toitures de tous types : tuiles,
                  ardoises, zinc ou membrane EPDM. Nous diagnostiquons et
                  réparons les fuites, remplaçons les matériaux endommagés et
                  renforçons la structure existante. Garantie décennale sur nos
                  travaux.
                </p>
              </div>
            </div>

            <!-- Service 2 Mobile -->
            <div
              class="service-card-2 snap-center flex-none w-[85vw] sm:w-[45vw]"
            >
              <div
                class="bg-gray-900 rounded-xl p-4 h-full transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/20"
              >
                <div
                  class="aspect-video w-full mb-4 overflow-hidden rounded-lg"
                >
                  <img
                    src="/images/construction.webp"
                    alt="Construction"
                    class="service-img-2 w-full h-full object-cover"
                  />
                </div>
                <h3 class="text-xl font-bold text-orange-500 mb-2">
                  Construction
                </h3>
                <p class="text-gray-300 text-sm sm:text-base">
                  Construction de toitures sur-mesure pour maisons
                  individuelles, bâtiments collectifs et locaux professionnels.
                  Nous utilisons des matériaux certifiés et respectons les
                  normes RT2020. Installation de fenêtres de toit et création de
                  lucarnes incluses.
                </p>
              </div>
            </div>

            <!-- Service 3 Mobile -->
            <div
              class="service-card-3 snap-center flex-none w-[85vw] sm:w-[45vw]"
            >
              <div
                class="bg-gray-900 rounded-xl p-4 h-full transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/20"
              >
                <div
                  class="aspect-video w-full mb-4 overflow-hidden rounded-lg"
                >
                  <img
                    src="/images/isolation.webp"
                    alt="Isolation"
                    class="service-img-3 w-full h-full object-cover"
                  />
                </div>
                <h3 class="text-xl font-bold text-orange-500 mb-2">
                  Isolation
                </h3>
                <p class="text-gray-300 text-sm sm:text-base">
                  Isolation thermique et phonique complète : combles, rampants
                  et toiture. Utilisation de matériaux écologiques (laine de
                  bois, ouate de cellulose). Eligible aux aides de l'État
                  MaPrimeRénov'. Économies d'énergie garanties jusqu'à 30%.
                </p>
              </div>
            </div>
          </div>

          <!-- Version desktop avec grid -->
          <div class="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Service 1 Desktop -->
            <div class="service-card-1 group">
              <div
                class="bg-gray-900 rounded-xl p-4 h-full transform transition-all duration-300 group-hover:scale-105 group-hover:bg-gray-800 shadow-lg hover:shadow-orange-500/20"
              >
                <div
                  class="aspect-video w-full mb-4 overflow-hidden rounded-lg"
                >
                  <img
                    src="/images/renovation.webp"
                    alt="Rénovation"
                    class="service-img-1 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3
                  class="text-xl font-bold text-orange-500 mb-2 group-hover:text-orange-400"
                >
                  Rénovation
                </h3>
                <p class="text-gray-300 text-base">
                  Experts en rénovation de toitures de tous types : tuiles,
                  ardoises, zinc ou membrane EPDM. Nous diagnostiquons et
                  réparons les fuites, remplaçons les matériaux endommagés et
                  renforçons la structure existante. Garantie décennale sur nos
                  travaux.
                </p>
              </div>
            </div>

            <!-- Service 2 Desktop -->
            <div class="service-card-2 group">
              <div
                class="bg-gray-900 rounded-xl p-4 h-full transform transition-all duration-300 group-hover:scale-105 group-hover:bg-gray-800 shadow-lg hover:shadow-orange-500/20"
              >
                <div
                  class="aspect-video w-full mb-4 overflow-hidden rounded-lg"
                >
                  <img
                    src="/images/construction.webp"
                    alt="Construction"
                    class="service-img-2 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3
                  class="text-xl font-bold text-orange-500 mb-2 group-hover:text-orange-400"
                >
                  Construction
                </h3>
                <p class="text-gray-300 text-base">
                  Construction de toitures sur-mesure pour maisons
                  individuelles, bâtiments collectifs et locaux professionnels.
                  Nous utilisons des matériaux certifiés et respectons les
                  normes RT2020. Installation de fenêtres de toit et création de
                  lucarnes incluses.
                </p>
              </div>
            </div>

            <!-- Service 3 Desktop -->
            <div class="service-card-3 group">
              <div
                class="bg-gray-900 rounded-xl p-4 h-full transform transition-all duration-300 group-hover:scale-105 group-hover:bg-gray-800 shadow-lg hover:shadow-orange-500/20"
              >
                <div
                  class="aspect-video w-full mb-4 overflow-hidden rounded-lg"
                >
                  <img
                    src="/images/isolation.webp"
                    alt="Isolation"
                    class="service-img-3 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3
                  class="text-xl font-bold text-orange-500 mb-2 group-hover:text-orange-400"
                >
                  Isolation
                </h3>
                <p class="text-gray-300 text-base">
                  Isolation thermique et phonique complète : combles, rampants
                  et toiture. Utilisation de matériaux écologiques (laine de
                  bois, ouate de cellulose). Eligible aux aides de l'État
                  MaPrimeRénov'. Économies d'énergie garanties jusqu'à 30%.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="second-CTA-button mt-8 flex justify-center md:mt-12 relative z-50">
          <a
            href="contact"
            class="inline-block px-6 py-3 bg-orange-500 text-white font-bold rounded-lg transition duration-300 ease-in-out"
          >
            <div>Contactez-nous</div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useNuxtApp } from "#app";

// Initialiser le router
const router = useRouter();
const { $gsap, $ScrollTrigger } = useNuxtApp();

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
    console.warn('GSAP ou ScrollTrigger n\'est pas disponible');
    return;
  }

  // S'assurer que nous sommes côté client
  if (process.client) {
    // Détection du mobile
    const isMobile = window.innerWidth < 768;

    // Animation du fond de la section Hero (réduite sur mobile)
    $gsap.to(".hero-background", {
      scale: isMobile ? 1.05 : 1.1,
      duration: 8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Animation du titre (lettre par lettre)
    const heroLetters = $gsap.utils.toArray(".hero-letter");
    $gsap.set(heroLetters, { opacity: 0, y: 50 });

    // Préparation de l'animation du bouton CTA
    $gsap.set(".CTA-button", {
      scale: 0.8,
      opacity: 0,
      rotationY: -15,
      transformOrigin: "center center",
    });

    // Animation de l'indicateur de défilement
    $gsap.to(".hero-scroll-indicator", {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Création des ScrollTriggers avec ajustements mobile
    const heroTimeline = $gsap.timeline({
      scrollTrigger: {
        trigger: "header",
        start: "top center",
        end: "bottom top",
        toggleActions: "restart none none reverse",
      }
    });

    // Animations du héro
    heroTimeline
      .to(heroLetters, {
        opacity: 1,
        y: 0,
        duration: 0.05,
        stagger: isMobile ? 0.02 : 0.03,
        ease: "back.out(3)",
      })
      .from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      }, "-=0.4")
      .to(".CTA-button", {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.2,
        ease: "elastic.out(1.2, 0.4)",
      }, "-=0.2")
      .to(".CTA-button", {
        scale: 1.05,
        duration: 0.8,
        repeat: 1,
        yoyo: true,
        ease: "power1.inOut",
      });

    // Effet parallaxe pour la section héro (réduit sur mobile)
    $ScrollTrigger.create({
      trigger: "header",
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const multiplier = isMobile ? 0.5 : 1;
        $gsap.to(".hero-title", {
          y: self.progress * 100 * multiplier,
          duration: 0.1,
          ease: "none",
        });
        $gsap.to(".hero-subtitle", {
          y: self.progress * 70 * multiplier,
          duration: 0.1,
          ease: "none",
        });
      },
    });

    // Animation des éléments d'arrière-plan (plus lent sur mobile)
    const bgDuration = isMobile ? 60 : 40;
    $gsap.to(".about-bg-element", {
      rotation: 360,
      duration: bgDuration,
      repeat: -1,
      ease: "none",
    });

    $gsap.to(".service-bg-element", {
      rotation: -360,
      duration: bgDuration,
      repeat: -1,
      ease: "none",
    });

    // Animation des sections About et Services
    ["about", "services"].forEach((section) => {
      const timeline = $gsap.timeline({
        scrollTrigger: {
          trigger: `.${section}-title`,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "restart none none reverse",
        }
      });

      timeline
        .from(`.${section}-title`, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        })
        .from(`.${section}-text-1, .${section}-text-2, .${section}-text-3`, {
          x: isMobile ? -20 : -50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        }, "-=0.4");
    });

    // Animation des images avec ajustements mobile
    [1, 2].forEach((num) => {
      $gsap.from(`.about-img-container-${num}`, {
        scrollTrigger: {
          trigger: `.about-img-container-${num}`,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "restart none none reverse",
        },
        x: isMobile ? 50 : 100,
        y: num === 1 ? (isMobile ? 25 : 50) : (isMobile ? -25 : -50),
        opacity: 0,
        rotation: num === 1 ? (isMobile ? 5 : 10) : (isMobile ? -5 : -10),
        duration: 1,
        ease: "power3.out",
        delay: num === 2 ? 0.2 : 0,
      });

      // Effet de zoom au scroll ajusté pour mobile
      $gsap.to(`.about-img-${num}`, {
        scrollTrigger: {
          trigger: `.about-img-container-${num}`,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        scale: isMobile ? 1.1 : 1.2,
        ease: "none",
      });
    });

    // Animation améliorée des cartes de service
    const serviceCards = [
      { selector: ".service-card-1", x: -100, y: 0, rotation: -5 },
      { selector: ".service-card-2", x: 0, y: 100, rotation: 0 },
      { selector: ".service-card-3", x: 100, y: 0, rotation: 5 },
    ];

    // Animation des cartes de service (mobile et desktop)
    serviceCards.forEach((card, index) => {
      // Animation principale de la carte
      $gsap.from(card.selector, {
        scrollTrigger: {
          trigger: card.selector,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "restart none none reverse",
        },
        x: isMobile ? 0 : card.x,
        y: isMobile ? 50 : card.y,
        rotation: isMobile ? 0 : card.rotation,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: index * (isMobile ? 0.3 : 0.2),
      });

      // Animation des éléments internes de la carte
      const timeline = $gsap.timeline({
        scrollTrigger: {
          trigger: card.selector,
          start: "top 80%",
          toggleActions: "restart none none reverse",
        }
      });

      timeline
        .from(`${card.selector} img`, {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        })
        .from(`${card.selector} h3`, {
          y: 20,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        }, "-=0.2")
        .from(`${card.selector} p`, {
          y: 20,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        }, "-=0.2");
    });

    // Animation des images des services avec ajustements mobile
    $gsap.utils.toArray([".service-img-1", ".service-img-2", ".service-img-3"]).forEach((img) => {
      $gsap.to(img, {
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        scale: isMobile ? 1.15 : 1.3,
        ease: "none",
      });
    });

    // Animation du second bouton CTA
    $gsap.set(".second-CTA-button", {
      scale: 0.8,
      opacity: 0,
      rotationY: -15,
      transformOrigin: "center center",
    });

    const secondButtonTimeline = $gsap.timeline({
      scrollTrigger: {
        trigger: ".second-CTA-button",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "restart none none reverse",
      }
    });

    secondButtonTimeline
      .to(".second-CTA-button", {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.2,
        ease: "elastic.out(1.2, 0.4)",
      })
      .to(".second-CTA-button", {
        scale: 1.05,
        duration: 0.8,
        repeat: 1,
        yoyo: true,
        ease: "power1.inOut",
      });

    // Gestion des événements tactiles et hover
    [".CTA-button", ".second-CTA-button"].forEach(selector => {
      const button = document.querySelector(selector);
      if (button) {
        const handleHoverEffect = (isHovering) => {
          $gsap.to(selector, {
            scale: isHovering ? 1.05 : 1,
            duration: 0.3,
            boxShadow: isHovering ? "0 6px 12px rgba(0,0,0,0.15)" : "0 2px 5px rgba(0,0,0,0.1)",
            ease: isHovering ? "power1.out" : "power1.in",
          });
        };

        if (isMobile) {
          button.addEventListener("touchstart", () => handleHoverEffect(true));
          button.addEventListener("touchend", () => handleHoverEffect(false));
        } else {
          button.addEventListener("mouseenter", () => handleHoverEffect(true));
          button.addEventListener("mouseleave", () => handleHoverEffect(false));
        }
      }
    });

    // Gestion du redimensionnement de la fenêtre
    const handleResize = () => {
      $ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    // Nettoyage des événements au démontage
    onUnmounted(() => {
      if ($ScrollTrigger) {
        $ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
      $gsap.killTweensOf("*");

      window.removeEventListener("resize", handleResize);

      // Supprimer les écouteurs d'événements
      [".CTA-button", ".second-CTA-button"].forEach(selector => {
        const button = document.querySelector(selector);
        if (button) {
          button.replaceWith(button.cloneNode(true));
        }
      });
    });
  }
});
</script>