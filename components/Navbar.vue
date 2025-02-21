<template>
  <nav class="relative bg-white text-black dark:bg-black dark:text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/">
            <img src="/images/oviota_rouge_svg.svg" alt="logo-oviota" class="w-40 h-auto brightness-150" />
          </NuxtLink>
        </div>

        <!-- Menu mobile toggle -->
        <div class="flex md:hidden">
          <button @click="toggleMobileMenu"
            class="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-orange-500 transition-all duration-300">
            <i class="fa-solid fa-trowel-bricks"></i> <!-- Icône d'ouverture seule -->
          </button>
        </div>

        <!-- Navigation Links (Desktop) -->
        <div class="hidden md:flex items-center space-x-6">
          <NuxtLink to="/" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#fe0a44] hover:text-white transition-all duration-300" active-class="bg-[#fe0a44] text-white">Home</NuxtLink>
          <NuxtLink to="/pricing" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#fe0a44] hover:text-white transition-all duration-300" active-class="bg-[#fe0a44] text-white">Pricing</NuxtLink>
          
          <!-- Dropdown Informations -->
          <div class="relative" @mouseenter="openDropdown = 'informations'" @mouseleave="closeDropdown">
            <button class="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#fe0a44] hover:text-white transition-all duration-300">Informations</button>
            <div v-if="openDropdown === 'informations'" class="absolute bg-black text-white rounded-lg shadow-md p-2 mt-2 w-56 z-50" @mouseenter="cancelCloseDropdown" @mouseleave="closeDropdown">
              <NuxtLink to="/company" class="block px-4 py-2 hover:bg-gray-800 rounded-md">Company</NuxtLink>
              <NuxtLink to="/ecology" class="block px-4 py-2 hover:bg-gray-800 rounded-md">Ecology</NuxtLink>
            </div>
          </div>
          
          <!-- Dropdown Other -->
          <div class="relative" @mouseenter="openDropdown = 'other'" @mouseleave="closeDropdown">
            <button class="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#fe0a44] hover:text-white transition-all duration-300">Other</button>
            <div v-if="openDropdown === 'other'" class="absolute bg-black text-white rounded-lg shadow-md p-2 mt-2 w-56 z-50" @mouseenter="cancelCloseDropdown" @mouseleave="closeDropdown">
              <NuxtLink to="/legal-index" class="block px-4 py-2 hover:bg-gray-800 rounded-md">Legal Index</NuxtLink>
              <NuxtLink to="/company" class="block px-4 py-2 hover:bg-gray-800 rounded-md">Company</NuxtLink>
              <NuxtLink to="/ichec-startlab" class="block px-4 py-2 hover:bg-gray-800 rounded-md">ICHEC Startlab</NuxtLink>
              <NuxtLink to="/amazon-aws" class="block px-4 py-2 hover:bg-gray-800 rounded-md">Amazon AWS</NuxtLink>
            </div>
          </div>
        </div>

        <!-- Contact rapide (Desktop) -->
        <div class="hidden md:block">
          <a href="#" class="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#fe0a44] bg-opacity-75 hover:opacity-80">Client Panel</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
/*************  ✨ Codeium Command ⭐  *************/
  /**
   * Reactive data for the component.
   * @property {boolean} mobileMenuOpen - Whether the mobile menu is open.
   * @property {string} openDropdown - The dropdown that is currently open.
   * @returns {object} The reactive data.
   */
/******  99ed0108-a070-44b1-ab1e-9e8ac18379d1  *******/  data() {
    return {
      mobileMenuOpen: false,
      openDropdown: '',
      closeTimeout: null
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeDropdown() {
      this.closeTimeout = setTimeout(() => {
        this.openDropdown = '';
      }, 200); // Légère attente pour éviter la fermeture instantanée
    },
    cancelCloseDropdown() {
      clearTimeout(this.closeTimeout);
    }
  }
}
</script>
