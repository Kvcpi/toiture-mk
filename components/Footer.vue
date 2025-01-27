<template>

  <head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
  </head>
  <footer class="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Première rangée : Logo, Coordonnées, Navigation et Réseaux sociaux -->
      <div class="flex flex-wrap justify-between items-center">
        <!-- Logo -->
        <div class="flex-shrink-0 w-full sm:w-auto text-center sm:text-left">
          <img src="assets/images/logo2.png" alt="logo-toituremk" class="w-40 h-auto brightness-150 mx-auto sm:mx-0" />
        </div>
        <!-- Coordonnées -->
        <div
          class="w-full sm:w-auto text-center sm:text-left mt-4 sm:mt-0 text-sm text-gray-300 backdrop-blur-md bg-white/10 p-4 rounded-lg shadow-md">
          <p>📍 Excelsiorlaan 71, 1930 Zaventem</p>
          <p>📞 <a href="tel:+32472870080" class="hover:text-orange-500 transition-all duration-300">0472 87 00 80</a>
          </p>
          <p>✉️ <a href="mailto:mk.construct2020@gmail.com"
              class="hover:text-orange-500 transition-all duration-300">mk.construct2020@gmail.com</a></p>
        </div>
        <!-- Navigation -->
        <div class="w-full sm:w-auto mt-4 sm:mt-0">
          <ul class="flex flex-wrap justify-center sm:justify-start space-x-6">
            <li>
              <NuxtLink to="/realisations"
                class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
                active-class="bg-orange-500 text-white">
                Réalisations
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact"
                class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
                active-class="bg-orange-500 text-white">
                Contact
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/privacy"
                class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
                active-class="bg-orange-500 text-white">
                Politique de Confidentialité
              </NuxtLink>
            </li>
          </ul>
        </div>
        <!-- Réseaux sociaux -->
        <div class="w-full sm:w-auto mt-4 sm:mt-0 text-center sm:text-left">
          <a href="https://www.facebook.com/people/LS-Construct-Klid/100077387097074/?_rdr" target="_blank"
            class="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-orange-500 transition-all duration-300 mx-auto sm:mx-0">
            <i class="fab fa-facebook-f text-lg text-white"></i>
          </a>
        </div>
      </div>

      <!-- Deuxième rangée : Copyright -->
      <div class="mt-6 text-center">
        <p class="text-sm text-gray-400">&copy; 2025 Tous droits réservés.</p>
      </div>
    </div>

    <!-- Effet lumineux en bas -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-transparent"></div>
  </footer>
</template>
