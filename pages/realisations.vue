<template>
  <div>
    <!-- Fenêtre contextuelle pour desktop -->
    <div v-if="showPopup && !isMobile" class="popup fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-30">
      <div class="bg-white p-6 rounded-lg shadow-lg text-center">
        <p class="text-gray-700">Déplacez le curseur sur l'image pour découvrir l'effet avant/après !</p>
        <button @click="closePopup" class="mt-4 bg-orange-500 text-white px-4 py-2 rounded">Compris</button>
      </div>
    </div>

    <!-- Message spécifique pour mobile -->
    <div v-if="isMobile && !showPopupMobile" class="mobile-popup fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-30">
      <div class="bg-white p-6 rounded-lg shadow-lg text-center">
        <p class="text-gray-700">Cliquez sur l'image pour découvrir l'effet avant/après !</p>
        <button @click="showPopupMobile = true" class="mt-4 bg-orange-500 text-white px-4 py-2 rounded">Compris</button>
      </div>
    </div>

    <!-- Contenu principal -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Projet 1 - Avant / Après -->
        <div class="group relative">
          <div class="before-after-container" 
               @mousemove="moveCursor" 
               @mouseenter="showCursor" 
               @mouseleave="hideCursor"
               @touchstart="startTouch" 
               @touchmove="moveTouch" 
               @touchend="endTouch"
               @click="toggleImage"
               :style="`--slider-position: ${sliderPosition}%`">
            <img src="/assets/images/avant-toiture.jpg" alt="Avant le projet" class="before-img" />
            <img src="/assets/images/apres-toiture.jpg" alt="Après le projet" class="after-img" />
          </div>
          <div class="text-center mt-2">
            <h3 class="text-xl font-bold">Rénovation de toiture</h3>
            <p>95m2 tuiles noires</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showPopup = ref(true)
const showPopupMobile = ref(false)  // Message mobile popup
const isMobile = ref(false)         // Vérification si l'utilisateur est sur mobile
const sliderPosition = ref(50)      // Position du curseur ou du doigt
const isCursorVisible = ref(false)

function closePopup() {
  showPopup.value = false
}

function moveCursor(event) {
  if (!isCursorVisible.value) return
  const container = event.target.closest('.before-after-container')
  const mouseX = event.clientX
  const containerWidth = container.offsetWidth
  sliderPosition.value = (mouseX / containerWidth) * 100
}

function showCursor() {
  isCursorVisible.value = true
}

function hideCursor() {
  isCursorVisible.value = false
}

let startTouchPos = 0
function startTouch(event) {
  startTouchPos = event.touches[0].clientX
}

function moveTouch(event) {
  const touchPos = event.touches[0].clientX
  const container = event.target.closest('.before-after-container')
  const containerWidth = container.offsetWidth
  const diff = touchPos - startTouchPos
  sliderPosition.value = ((startTouchPos + diff) / containerWidth) * 100
}

function endTouch() {
  startTouchPos = 0
}

function toggleImage() {
  if (isMobile.value) {
    sliderPosition.value = sliderPosition.value === 100 ? 0 : 100 // Si clic, on alterne
  }
}

onMounted(() => {
  isMobile.value = window.innerWidth <= 768  // Détecte si l'utilisateur est sur un appareil mobile
})
</script>

<style scoped>
.popup {
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup .bg-white {
  width: 80%;
  max-width: 400px;
}

.mobile-popup {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mobile-popup .bg-white {
  width: 80%;
  max-width: 400px;
}

.before-after-container {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.before-img,
.after-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out, width 0.3s ease; /* Transition plus fluide */
}

.after-img {
  opacity: 0;
  width: 0; /* L'image 'après' commence avec une largeur de 0% */
}

.before-after-container:hover .after-img,
.before-after-container:active .after-img {
  opacity: 1;
  width: 100%;  /* On agrandit l'image à 100% sur le survol ou clic */
}

.before-after-container {
  position: relative;
}

.before-after-container {
  cursor: pointer; /* Pour les desktop */
}

@media (max-width: 768px) {
  .before-after-container {
    height: 300px;
  }
  .before-img,
  .after-img {
    transition: none; /* Pas de transition sur mobile */
  }
}
</style>
