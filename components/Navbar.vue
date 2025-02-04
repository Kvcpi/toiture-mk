<template>
  <nav class="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/">
            <img src="/images/logo2.png" alt="logo-toituremk" class="w-40 h-auto brightness-150" />
          </NuxtLink>
        </div>

        <!-- Menu mobile toggle -->
        <div class="flex md:hidden">
          <button @click="toggleMobileMenu"
            class="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-orange-500 transition-all duration-300">
            <i :class="menuIcon"></i>
          </button>
        </div>

        <!-- Navigation Links (Desktop) -->
        <div class="hidden md:block backdrop-blur-md bg-white/10 rounded-lg shadow-md p-2">
          <div class="flex items-center space-x-4">
            <NuxtLink to="/"
              class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition-all duration-300"
              active-class="bg-orange-500 text-white">
              Accueil
            </NuxtLink>
            <NuxtLink to="/realisations"
              class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition-all duration-300"
              active-class="bg-orange-500 text-white">
              Réalisations
            </NuxtLink>
            <NuxtLink to="/contact"
              class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition-all duration-300"
              active-class="bg-orange-500 text-white">
              Contact
            </NuxtLink>
          </div>
        </div>

        <!-- Contact rapide (Desktop) -->
        <div class="hidden md:block">
          <div class="flex items-center space-x-4">
            <a href="tel:+32472870080" class="text-sm hover:text-orange-500 transition-all duration-300">
              📞 0472 87 00 80
            </a>
            <a href="https://www.facebook.com/people/LS-Construct-Klid/100077387097074/?_rdr" target="_blank"
              class="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-orange-500 transition-all duration-300">
              <i class="fab fa-facebook-f text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Menu mobile -->
    <div v-show="mobileMenuOpen"
      class="md:hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 transition-all duration-500 transform ease-in-out opacity-100">
      <div class="px-4 pt-2 pb-4 space-y-3">
        <NuxtLink to="/"
          class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition-all duration-300"
          active-class="bg-orange-500 text-white">
          Accueil
        </NuxtLink>
        <NuxtLink to="/realisations"
          class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition-all duration-300"
          active-class="bg-orange-500 text-white">
          Réalisations
        </NuxtLink>
        <NuxtLink to="/contact"
          class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition-all duration-300"
          active-class="bg-orange-500 text-white">
          Contact
        </NuxtLink>
        <!-- Contact info dans le menu mobile -->
        <div class="pt-4 border-t border-gray-700">
          <a href="tel:+32472870080" class="block px-3 py-2 text-sm hover:text-orange-500 transition-all duration-300">
            📞 0472 87 00 80
          </a>
          <a href="https://www.facebook.com/people/LS-Construct-Klid/100077387097074/?_rdr" target="_blank"
            class="block px-3 py-2 text-sm hover:text-orange-500 transition-all duration-300">
            <i class="fab fa-facebook-f mr-2"></i> Facebook
          </a>
        </div>
      </div>
    </div>

    <!-- Effet lumineux en bas -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-transparent"></div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
      menuIcon: 'fa-solid fa-trowel-bricks', // Icône pour l'ouverture
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      this.menuIcon = this.mobileMenuOpen ? 'fa-solid fa-trowel' : 'fa-solid fa-trowel-bricks';
    }
  }
}
</script>

<style scoped>
/* Transition d'ouverture/fermeture du menu mobile */
.md:hidden {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.md:hidden[v-cloak] {
  transform: translateY(-100%);
  opacity: 0;
}

/* Transition lors de la fermeture */
.md:hidden:not([v-cloak]) {
  transform: translateY(0);
  opacity: 1;
}
</style>
