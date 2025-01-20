<!-- components/Navbar.vue -->
<template>
    <nav class="bg-black text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <NuxtLink to="/" class="font-bold text-xl" style="color: #F26835;">
              Toiture MK
            </NuxtLink>
          </div>
          <!-- Navigation Links -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <NuxtLink 
                to="/" 
                class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
                active-class="bg-orange-500 text-white"
                style="color: white;"
              >
                Accueil
              </NuxtLink>
              <NuxtLink 
                to="/realisations" 
                class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
                active-class="bg-orange-500 text-white"
                style="color: white;"
              >
                Réalisations
              </NuxtLink>
              <NuxtLink 
                to="/contact" 
                class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
                active-class="bg-orange-500 text-white"
                style="color: white;"
              >
                Contact
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  