<template>
  <div>
    <!-- Pop-ups -->
    <div v-if="showPopup && !isMobile" class="fixed inset-0 bg-gray-700/50 flex items-center justify-center z-30">
      <div class="w-4/5 max-w-md bg-white p-6 rounded-lg shadow-lg text-center">
        <p class="text-gray-700">Déplacez le curseur sur l'image pour découvrir l'effet avant/après !</p>
        <button @click="closePopup" class="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors">
          Compris
        </button>
      </div>
    </div>

    <div v-if="showPopup && isMobile" class="fixed inset-0 bg-gray-700/50 flex items-center justify-center z-30">
      <div class="w-4/5 max-w-md bg-white p-6 rounded-lg shadow-lg text-center">
        <p class="text-gray-700">Cliquez sur l'image pour basculer entre avant/après !</p>
        <button @click="closePopup" class="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors">
          Compris
        </button>
      </div>
    </div>

    <!-- Contenu principal -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in projects" :key="index" class="relative">
          <div 
            @click="toggleImage(index)"
            @mouseenter="hoverImage(index, true)"
            @mouseleave="hoverImage(index, false)"
            class="relative w-full h-[500px] sm:h-[300px] overflow-hidden cursor-pointer"
          >
            <img 
              :src="project.before"
              :alt="`Avant ${project.title}`"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <img 
              :src="project.after"
              :alt="`Après ${project.title}`"
              :class="{
                'absolute inset-0 w-full h-full object-cover transition-opacity duration-300': true,
                'opacity-0': !project.showAfterImage && !project.isHovered,
                'opacity-100': project.showAfterImage || project.isHovered
              }"
            />
          </div>
          <div class="text-center mt-2">
            <h3 class="text-xl font-bold">{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showPopup = ref(true)
const isMobile = ref(false)
const projects = ref([
  {
    title: "Rénovation de toiture",
    description: "95m² tuiles noires",
    before: "/images/avant-toiture.jpg",
    after: "/images/apres-toiture.jpg",
    showAfterImage: false,
    isHovered: false
  },
  {
    title: "Ravalement de façade",
    description: "Peinture et enduit sur 150m²",
    before: "/images/construction.webp",
    after: "/images/isolation.webp",
    showAfterImage: false,
    isHovered: false
  },
  {
    title: "Aménagement extérieur",
    description: "Création d'une terrasse en bois",
    before: "/images/menuiserie.webp",
    after: "/images/renovation.webp",
    showAfterImage: false,
    isHovered: false
  }
])

onMounted(() => {
  checkDevice()
  if (localStorage.getItem("popupSeen") === "true") {
    showPopup.value = false
  }
  window.addEventListener('resize', checkDevice)
})

function checkDevice() {
  isMobile.value = window.innerWidth <= 768
}

function closePopup() {
  showPopup.value = false
  localStorage.setItem("popupSeen", "true") // Enregistre que l'utilisateur a fermé le popup
}

function toggleImage(index) {
  if (isMobile.value) {
    projects.value[index].showAfterImage = !projects.value[index].showAfterImage
  }
}

function hoverImage(index, state) {
  if (!isMobile.value) {
    projects.value[index].isHovered = state
  }
}
</script>
