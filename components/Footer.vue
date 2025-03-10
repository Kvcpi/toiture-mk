<template>
  <footer class="bg-white dark:bg-black text-black dark:text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Logo centré au-dessus -->
      <div class="flex justify-center mb-6">
        <a href="/">
          <img
          src="/images/oviota_rouge_svg.svg"
          alt="Oviota"
          class="h-14 w-auto hover:opacity-70"
        />
        </a>
      </div>

      <!-- Sections alignées en grille -->
      <div
        class="grid grid-cols-2 md:grid-cols-5 gap-6 text-center md:text-left"
      >
        <!-- Navigation principale -->
        <div>
          <h3 class="text-black dark:text-white font-bold">Navigation</h3>
          <nav class="space-y-2 mt-2">
            <a href="/" class="block hover:text-[#fe0a44] transition-colors"
              >Home</a
            >
            <a
              href="/client-panel"
              class="block hover:text-[#fe0a44] transition-colors"
              >Client Panel</a
            >
          </nav>
        </div>

        <!-- Resources section -->
        <div>
          <h3 class="text-black dark:text-white font-bold">Resources</h3>
          <nav class="space-y-2 mt-2">
            <a
              href="/careers"
              class="block hover:text-[#fe0a44] transition-colors"
              >Careers</a
            >
            <a
              href="/technical-status"
              class="block hover:text-[#fe0a44] transition-colors"
              >Technical Status</a
            >
          </nav>
        </div>

        <!-- Contact section -->
        <div>
          <h3 class="text-black dark:text-white font-bold">Contact</h3>
          <nav class="space-y-2 mt-2">
            <a
              href="mailto:contact@oviota.com"
              class="block hover:text-[#fe0a44] transition-colors"
              >Email</a
            >
            <p class="block">
              Sales team:
              <a
                href="tel:+32486299769"
                class="hover:text-[#fe0a44] transition-colors whitespace-nowrap"
                >(+32) 486 29 97 69</a
              >
            </p>
          </nav>
        </div>

        <!-- Legal section -->
        <div>
          <h3 class="text-black dark:text-white font-bold">Legal</h3>
          <nav class="space-y-2 mt-2">
            <a
              href="/terms"
              class="block hover:text-[#fe0a44] transition-colors"
              >Terms of Services</a
            >
            <a
              href="/privacy"
              class="block hover:text-[#fe0a44] transition-colors"
              >Privacy Policy</a
            >
            <a href="/rgpd" class="block hover:text-[#fe0a44] transition-colors"
              >RGPD</a
            >
          </nav>
        </div>
        <!--Location section-->
        <div>
          <h3 class="text-black dark:text-white font-bold">Location</h3>
          <p class="mt-2">Rue au bois 365b, 1150 Brussels</p>
          <p>Belgium</p>
        </div>
      </div>

      <!-- Bottom section -->
      <div class="border-t border-gray-800 pt-8 mt-8 text-center md:text-left">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm">© Copyright Oviota 2025. All rights reserved.</p>
          <div class="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/company/oviota/"
              class="text-black dark:text-white hover:text-[#fe0a44] transition-colors"
            >
              <i class="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://www.instagram.com/joinoviota"
              class="text-black dark:text-white hover:text-[#fe0a44] transition-colors"
            >
              <i class="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="https://discord.com/invite/6HrSzYanqD"
              class="text-black dark:text-white hover:text-[#fe0a44] transition-colors"
            >
              <i class="fab fa-discord text-xl"></i>
            </a>
            <a
              href="https://x.com/joinoviota"
              class="text-black dark:text-white hover:text-[#fe0a44] transition-colors"
            >
              <i class="fa-brands fa-x-twitter text-xl"></i>
            </a>
            <a
              href="https://t.me/oviota"
              class="text-black dark:text-white hover:text-[#fe0a44] transition-colors"
            >
              <i class="fab fa-telegram text-xl"></i>
            </a>
            <a
              href="https://www.youtube.com/@Oviota"
              class="text-dark dark:text-white hover:text-[#fe0a44] transition-colors"
            >
              <i class="fab fa-youtube text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
