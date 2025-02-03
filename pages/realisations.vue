<template>
  <div>
    <!-- En-tête de page -->
    <div class="bg-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-orange-500 text-center">Nos Réalisations</h1>
      </div>
    </div>

    <!-- Galerie photos -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Image 1 -->
        <div class="group relative">
          <img 
            src="/assets/images/construction.webp" 
            alt="Description du projet 1" 
            class="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg flex items-center justify-center">
            <div class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 class="text-xl font-bold">Projet 1</h3>
              <p>Description du projet 1</p>
            </div>
          </div>
        </div>

        <!-- Image 2 -->
        <div class="group relative">
          <img 
            src="/assets/images/construction.webp" 
            alt="Description du projet 2" 
            class="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg flex items-center justify-center">
            <div class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 class="text-xl font-bold">Projet 2</h3>
              <p>Description du projet 2</p>
            </div>
          </div>
        </div>

        <!-- Image 3 -->
        <div class="group relative">
          <img 
            src="/assets/images/construction.webp" 
            alt="Description du projet 3" 
            class="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg flex items-center justify-center">
            <div class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 class="text-xl font-bold">Projet 3</h3>
              <p>Description du projet 3</p>
            </div>
          </div>
        </div>
        <div class="text-center mt-12">
            <a href="https://www.facebook.com/people/LS-Construct-Klid/100077387097074/?_rdr" target="_blank" class="inline-block bg-orange-500 text-white py-3 px-8 rounded-md hover:bg-orange-600 transition-all duration-300">
                Voir nos travaux sur Facebook <i class="fab fa-facebook-f ml-2"></i>
            </a>
        </div>
        <!-- Ajoute plus de blocs ici pour chaque image -->
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Améliorations de la mise en page */
.group:hover .text-white {
  opacity: 1;
}

.group:hover .transition-transform {
  transform: scale(1.05);
}
</style>
