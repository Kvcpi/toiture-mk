<template>
  <div class="min-h-screen bg-dark-blue">
    <div class="max-w-7xl mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-dark mb-12 text-center">
        Nos réalisations
      </h1>

      <!-- Grid d'images -->
      <div
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="group cursor-pointer"
          @click="openLightbox(index)"
        >
          <img
            :src="image"
            class="w-full h-40 sm:h-48 md:h-64 object-cover rounded-lg"
          />
        </div>
      </div>

      <!-- Lightbox -->
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 bg-black/95 z-50 flex items-center justify-center px-4 sm:px-8"
        @click="closeLightbox"
        @touchstart="startTouch"
        @touchend="endTouch"
      >
        <div
          class="relative flex items-center justify-center w-full h-full"
          @click.stop
        >
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
        <!-- Icône Facebook -->
        <span>Voir plus sur Facebook</span>
      </a>
    </div>
  </div>
</template>

<script setup>
const images = ref([]);
const lightboxOpen = ref(false);
const currentImageIndex = ref(0);
let touchStartX = 0;

// Chargement automatique des images
onMounted(async () => {
  try {
    const loadedImages = await $fetch("/api/images"); // Charger les images depuis l'API Nitro
    images.value = loadedImages;
  } catch (error) {
    console.error("Erreur chargement images:", error);
  }
});

function openLightbox(index) {
  currentImageIndex.value = index;
  lightboxOpen.value = true;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightboxOpen.value = false;
  document.body.style.overflow = "auto";
}

function nextImage() {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
}

function prevImage() {
  currentImageIndex.value =
    currentImageIndex.value === 0
      ? images.value.length - 1
      : currentImageIndex.value - 1;
}

// Gestion des touches clavier
onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (!lightboxOpen.value) return;
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "Escape") closeLightbox();
  });
});

// Gestion du swipe tactile pour changer d'image
function startTouch(e) {
  touchStartX = e.touches[0].clientX;
}

function endTouch(e) {
  let touchEndX = e.changedTouches[0].clientX;
  let deltaX = touchStartX - touchEndX;

  if (deltaX > 50) nextImage(); // Swipe gauche → image suivante
  if (deltaX < -50) prevImage(); // Swipe droite → image précédente
}
</script>
