<template>
  <div>
    <!-- En-tête de page -->
    <div class="bg-gray-900 py-16 relative overflow-hidden">
      <!-- Éléments de fond -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-transparent"></div>
        <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-600/20 to-transparent"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="flex flex-col items-center text-center">
          <div class="relative inline-block">
            <h1 class="contact-title inline-block text-4xl md:text-5xl font-bold text-white mb-4 opacity-0">
              Contact
              <div class="title-line absolute -bottom-2 left-0 w-0 h-1 bg-orange-500 shadow-glow"></div>
            </h1>
            <!-- Effet de brillance derrière le titre -->
            <div class="absolute -inset-x-6 -inset-y-4 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-500/20 blur-xl -z-10"></div>
          </div>
          <p class="contact-subtitle max-w-2xl text-white text-lg opacity-0 font-medium">
            Nous sommes à votre écoute pour tous vos projets
          </p>
        </div>
      </div>

      <!-- Éléments décoratifs -->
      <div class="absolute left-0 bottom-0 w-32 h-32 transform translate-y-1/2 -translate-x-1/2 hidden md:block">
        <div class="absolute inset-0 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>
      </div>
      <div class="absolute right-0 top-0 w-24 h-24 transform -translate-y-1/2 translate-x-1/2 hidden md:block">
        <div class="absolute inset-0 bg-orange-500 rounded-full opacity-20 animate-pulse" style="animation-delay: 1s"></div>
      </div>
    </div>

    <!-- Section formulaire et informations -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative -mt-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Informations de contact -->
        <div class="bg-white rounded-xl shadow-xl p-8 transform hover:-translate-y-1 transition-all duration-300 contact-info opacity-0">
          <h2 class="text-2xl font-bold mb-8 text-orange-500">Nos coordonnées</h2>
          <div class="space-y-6">
            <div class="flex items-center space-x-4 contact-item opacity-0">
              <div class="bg-orange-100 p-4 rounded-full">
                <i class="fa-solid fa-location-dot text-orange-500 text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">Adresse</h3>
                <a href="https://www.google.com/maps?q=Excelsiorlaan+71,+1930+Zaventem" 
                   target="_blank"
                   class="hover:text-orange-500 transition-all duration-300">
                  Excelsiorlaan 71, 1930 Zaventem
                </a>
              </div>
            </div>
            
            <div class="flex items-center space-x-4 contact-item opacity-0">
              <div class="bg-orange-100 p-4 rounded-full">
                <i class="fa-solid fa-phone text-orange-500 text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">Téléphone</h3>
                <a href="tel:+32472870080" 
                   class="hover:text-orange-500 transition-all duration-300">
                   0472 87 00 80
                </a>
              </div>
            </div>
            
            <div class="flex items-center space-x-4 contact-item opacity-0">
              <div class="bg-orange-100 p-4 rounded-full">
                <i class="fa-regular fa-paper-plane text-orange-500 text-xl"></i>
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">Email</h3>
                <a href="mailto:mk.construct2020@gmail.com"
                   class="hover:text-orange-500 transition-all duration-300">
                   mk.construct2020@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Formulaire de contact -->
        <form @submit.prevent="handleSubmit" class="bg-white rounded-xl shadow-xl p-8 space-y-6 transform hover:-translate-y-1 transition-all duration-300 contact-form opacity-0">
          <h2 class="text-2xl font-bold mb-8 text-orange-500">Envoyez-nous un message</h2>
          
          <div class="form-group opacity-0">
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
            <input 
              type="text" id="name" name="name" v-model="name"
              class="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300" 
              required
            />
          </div>

          <div class="form-group opacity-0">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" id="email" name="email" v-model="email"
              class="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300" 
              required
            />
          </div>

          <div class="form-group opacity-0">
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
            <input 
              type="tel" id="phone" name="phone" v-model="phone"
              class="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300" 
              required
            />
          </div>

          <div class="form-group opacity-0">
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea 
              id="message" name="message" v-model="message" rows="4"
              class="block w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300" 
              required
            ></textarea>
          </div>

          <button type="submit" 
            class="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transform hover:-translate-y-1 transition-all duration-300 form-group opacity-0">
            Envoyer
            <i class="fa-solid fa-paper-plane ml-2"></i>
          </button>

          <div v-if="status === 'success'" class="mt-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center justify-center space-x-2">
            <i class="fa-solid fa-check-circle"></i>
            <p>Merci ! Votre message a bien été envoyé. Nous vous répondrons au plus vite.</p>
          </div>
          <div v-if="status === 'error'" class="mt-6 p-4 bg-red-100 text-red-700 rounded-lg flex items-center justify-center space-x-2">
            <i class="fa-solid fa-exclamation-circle"></i>
            <p>Une erreur est survenue. Veuillez réessayer.</p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'
import { useHead } from '#imports'

// SEO Metadata
useHead({
  title: 'Contact | Toiture MK - Expert en toiture à Zaventem',
  meta: [
    {
      name: 'description',
      content: 'Contactez Toiture MK pour vos projets de toiture à Zaventem. Devis gratuit, intervention rapide. Expert en rénovation, construction et isolation.'
    },
    {
      property: 'og:title',
      content: 'Contact | Toiture MK - Expert en toiture à Zaventem'
    },
    {
      property: 'og:description',
      content: 'Contactez Toiture MK pour vos projets de toiture à Zaventem. Devis gratuit, intervention rapide. Expert en rénovation, construction et isolation.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://toiture-mk.be/contact'
    }
  ]
})

const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const status = ref(null)

// Animations
onMounted(() => {
  const { $gsap } = useNuxtApp()
  
  if (!$gsap) return

  // Animation du titre et sous-titre
  const titleTimeline = $gsap.timeline({
    defaults: { ease: 'power3.out' }
  });

  titleTimeline
    .to('.contact-title', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'back.out(1.7)'
    })
    .to('.title-line', {
      width: '100%',
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5')
    .to('.contact-subtitle', {
      opacity: 1,
      y: 0,
      duration: 0.8
    }, '-=0.4');

  // Animation des cercles décoratifs
  const circles = document.querySelectorAll('.animate-pulse');
  circles.forEach((circle, index) => {
    $gsap.to(circle, {
      scale: 1.2,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: index * 0.5
    });
  });

  // Animation de la carte d'informations
  $gsap.to('.contact-info', {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 0.4,
    ease: 'power3.out'
  })

  // Animation des éléments de contact
  $gsap.to('.contact-item', {
    opacity: 1,
    x: 0,
    duration: 0.6,
    stagger: 0.2,
    delay: 0.6,
    ease: 'power3.out'
  })

  // Animation du formulaire
  $gsap.to('.contact-form', {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 0.4,
    ease: 'power3.out'
  })

  // Animation des champs du formulaire
  $gsap.to('.form-group', {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.8,
    ease: 'power3.out'
  })
})

const handleSubmit = async (event) => {
  status.value = null // Réinitialiser le statut

  try {
    const response = await fetch('https://formspree.io/f/xdkaeopa', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(event.target),
    })

    if (response.ok) {
      status.value = 'success'
      name.value = ''
      email.value = ''
      phone.value = ''
      message.value = ''
    } else {
      status.value = 'error'
    }
  } catch (error) {
    status.value = 'error'
  }
}
</script>

<style scoped>
.shadow-glow {
  box-shadow: 0 0 15px rgba(249, 115, 22, 0.4);
}
</style>
