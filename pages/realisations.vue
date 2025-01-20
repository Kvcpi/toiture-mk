<template>
  <div>
    <!-- En-tête de page -->
    <div class="bg-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-orange-500">Nos Réalisations</h1>
      </div>
    </div>

    <!-- Galerie photos -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Image 1 -->
        <div class="group relative">
          <img 
            src="/assets/images/construction.jpg" 
            alt="Description image 1" 
            class="w-full sm:h-48 md:h-64 lg:h-80 object-cover rounded-lg shadow-lg"
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
            src="/assets/images/construction.jpg" 
            alt="Description image 2" 
            class="w-full sm:h-48 md:h-64 lg:h-80 object-cover rounded-lg shadow-lg"
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
            src="/assets/images/construction.jpg" 
            alt="Description image 3" 
            class="w-full sm:h-48 md:h-64 lg:h-80 object-cover rounded-lg shadow-lg"
          />
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg flex items-center justify-center">
            <div class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 class="text-xl font-bold">Projet 3</h3>
              <p>Description du projet 3</p>
            </div>
          </div>
        </div>

        <!-- Ajoute plus de blocs ici pour chaque image -->
      </div>
    </div>
  </div>
</template>
