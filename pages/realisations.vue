<!-- pages/realisations.vue -->
<template>
    <div>
      <!-- En-tête de page -->
      <div class="bg-gray-900 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl font-bold text-white">Nos Réalisations</h1>
        </div>
      </div>
  
      <!-- Galerie photos -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Répétez ce bloc pour chaque image -->
          <div v-for="i in 9" :key="i" class="group relative">
            <img 
              :src="`/api/placeholder/400/300?text=Projet ${i}`"
              :alt="`Projet ${i}`"
              class="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <div class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 class="text-xl font-bold">Projet {{ i }}</h3>
                <p>Description du projet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>