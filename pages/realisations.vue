<template>
  <div class="min-h-screen bg-dark-blue">
    <div class="max-w-7xl mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-dark mb-12 text-center">
        Nos réalisations
      </h1>

      <!-- État de chargement -->
      <div v-if="isLoading" class="text-center py-8">
        <p class="text-white">Chargement des images...</p>
      </div>

      <!-- Message d'erreur -->
      <div v-else-if="error" class="text-center py-8">
        <p class="text-red-500">Une erreur est survenue lors du chargement des images.</p>
      </div>

      <!-- Grid d'images -->
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="group cursor-pointer"
          @click="openLightbox(index)"
        >
          <div class="relative w-full h-40 sm:h-48 md:h-64">
            <img
              :src="image"
              :alt="`Réalisation ${index + 1}`"
              class="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <!-- Lightbox -->
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 bg-black/95 z-50 flex items-center justify-center px-4 sm:px-8"
        @click="closeLightbox"
      >
        <div class="relative flex items-center justify-center w-full h-full">
          <!-- Flèche gauche -->
          <button
            @click.stop="prevImage"
            class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white text-4xl sm:text-6xl hover:text-orange-500"
          >
            ‹
          </button>

          <!-- Image affichée -->
          <img
            :src="images[currentImageIndex]"
            class="max-h-[80vh] max-w-full sm:max-w-[90vw] object-contain"
            @click.stop
          />

          <!-- Flèche droite -->
          <button
            @click.stop="nextImage"
            class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white text-4xl sm:text-6xl hover:text-orange-500"
          >
            ›
          </button>
        </div>

        <!-- Bouton de fermeture -->
        <button
          @click="closeLightbox"
          class="absolute top-2 sm:top-4 right-2 sm:right-4 text-white text-3xl sm:text-4xl hover:text-orange-500"
        >
          ×
        </button>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <a
        href="https://www.facebook.com/people/LS-Construct-Klid/100077387097074/?_rdr"
        target="_blank"
        class="inline-flex items-center justify-center px-6 py-3 text-white font-semibold bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300 space-x-2 mb-6"
      >
        <i class="fab fa-facebook-f text-lg"></i>
        <span>Voir plus sur Facebook</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Liste statique des images
const images = [
  '/realisations/WhatsApp Image 2025-02-13 at 21.31.18.jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.31.18 (1).jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.28.49.jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.28.49 (5).jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.28.49 (4).jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.28.49 (3).jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.28.49 (2).jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.28.49 (1).jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.24.05.jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.24.05 (6).jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.24.05 (5).jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.24.05 (4).jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.24.05 (3).jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.24.05 (2).jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.24.05 (1).jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.24.04.jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.11.35.jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.11.34.jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.11.34 (2).jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.11.34 (1).jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.11.33.jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.11.33 (2).jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.11.33 (1).jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.11.32.jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.11.31.jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.11.31 (2).jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.11.31 (1).jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.11.30.jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.11.30 (2).jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.11.30 (1).jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.11.29.jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.11.11.jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.11.11 (1).jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.11.10.jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.11.10 (1).jpeg',
  '/realisations/WhatsApp Image 2025-02-13 at 21.11.05.jpeg'
]

// État du lightbox
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

// Fonctions du lightbox
function openLightbox(index) {
  currentImageIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = 'auto'
}

function nextImage() {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length
}

function prevImage() {
  currentImageIndex.value =
    currentImageIndex.value === 0
      ? images.length - 1
      : currentImageIndex.value - 1
}

// Gestion du clavier
function handleKeydown(e) {
  if (!lightboxOpen.value) return
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'Escape') closeLightbox()
}

// Cycle de vie du composant
onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'auto'
})
</script>