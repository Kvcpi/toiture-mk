<template>
  <div>
    <!-- Hero Section -->
    <header
      class="relative flex items-center justify-center min-h-screen px-6 md:px-12 lg:px-20 bg-white dark:bg-black"
    >
      <div
        class="relative z-20 flex flex-col items-center lg:flex-row w-full max-w-8xl mx-auto"
      >
        <!-- Texte -->
        <div class="text-white max-w-lg text-left flex-1">
          <h1 class="flex flex-col space-y-2">
            <span
              class="text-black dark:text-white font-bold whitespace-nowrap"
              style="font-size: clamp(1.8rem, 4vw, 3.2rem)"
            >
              Maintenance is a breeze,
            </span>
            <span
              class="text-[#fe0a44] font-bold animate-smooth-pulse whitespace-nowrap"
              style="font-size: clamp(1.8rem, 4vw, 3.2rem)"
            >
              wherever you are.
            </span>
            <span
              class="mt-2 text-sm md:text-base font-medium text-black dark:text-gray-400"
            >
              The easiest way to manage your building.<br />Save time and focus.
            </span>
          </h1>

          <div class="flex flex-col sm:flex-row gap-4 mt-5">
            <a
              href="https://oviota.notion.site/Oviota-Links-3abd2498143743549de57b1af83bded4?pvs=4"
              class="inline-flex items-center justify-center px-8 sm:px-20 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#fe0a44] hover:opacity-70"
            >
              Linktree
            </a>
            <a
              href="https://oviota.notion.site/08a1ba2e12d84e0885a9da74b7b46e6f?v=7f228d4f625149ffbf9da782c253867b"
              class="inline-flex items-center justify-center px-8 sm:px-20 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#fe0a44] bg-opacity-75 hover:opacity-70"
            >
              Roadmap
            </a>
          </div>

          <div
            class="mt-4 text-sm font-medium text-black dark:text-gray-400 flex flex-wrap gap-x-4 gap-y-2"
          >
            <span class="flex items-center">
              <i class="fa-solid fa-check mr-2" style="color: #63e6be"></i>
              Maintenance
            </span>
            <span class="flex items-center">
              <i class="fa-solid fa-check mr-2" style="color: #63e6be"></i>
              Billing
            </span>
            <span class="flex items-center">
              <i class="fa-solid fa-check mr-2" style="color: #63e6be"></i>
              Renting Management
            </span>
          </div>
        </div>

        <!-- Image -->
        <div class="relative w-full max-w-2xl mt-12 lg:mt-0 lg:ml-auto flex-1">
          <img
            src="/public/images/mock.png"
            alt="Dashboard preview"
            class="w-full h-auto object-cover"
          />
        </div>
      </div>
    </header>
    <hr class="border-t border-gray-200 dark:border-gray-700" />
    <!-- Section "They trust us" -->
    <section class="py-9 md:py-12 bg-white dark:bg-black">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          class="text-black dark:text-white font-bold whitespace-nowrap"
          style="font-size: clamp(1.8rem, 4vw, 3.2rem)"
        >
          They trust us
        </h1>
        <p class="font-medium text-black dark:text-gray-400 mb-1">
          These companies trust us and believe in our project.
        </p>

        <!-- Conteneur des logos -->
        <div class="flex justify-center gap-8 mt-10">
          <!-- Logo 1 -->
          <div
            class="group relative w-32 h-32"
          >
            <img
              src="/public/logo/amazon.png"
              alt="Partner 1"
              class="w-full h-full object-contain animate-logo transition-transform duration-300 group-hover:scale-105"
            />
            <div
            ></div>
          </div>

          <!-- Logo 2 -->
          <div
            class="group relative w-32 h-32"
          >
            <img
              src="/public/logo/startlab.png"
              alt="Partner 1"
              class="w-full h-full object-contain animate-logo transition-transform duration-300 group-hover:scale-105"
            />
            <div
            ></div>
          </div>

          <!-- Logo 3 -->
          <div
            class="group relative w-32 h-32"
          >
            <img
              src="/public/logo/microsoft.png"
              alt="Partner 1"
              class="w-full h-full object-contain animate-logo transition-transform duration-300 group-hover:scale-105"
            />
            <div
            ></div>
          </div>
        </div>
      </div>
    </section>
    <hr class="border-t border-gray-200 dark:border-gray-700" />
    <!-- Section "System" -->
    <section class="py-9 md:py-12 bg-white dark:bg-black">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row space-y-8 lg:space-y-0"
      >
        <!-- Colonne gauche (texte) -->
        <div class="lg:w-1/2 space-y-4">
          <h1
            class="text-[#fe0a44] dark:text-[#fe0a44] text-sm md:text-base font-semibold text-center"
          >
            System
          </h1>
          <h2
            class="text-black dark:text-white font-bold whitespace-nowrap text-center"
            style="font-size: clamp(1.8rem, 4vw, 3.2rem)"
          >
            How it works ?
          </h2>

          <!-- Owner -->
          <div>
            <h3 class="text-lg font-semibold text-black dark:text-white">
              <i class="fa-solid fa-box"></i> Owner
            </h3>
            <p class="text-black dark:text-gray-400 mt-2">
              An Owner is a user with the most access, permissions, and
              responsibilities. To use the program, the Owner must handle the
              entire system. The Owner can also upload admin products.
            </p>
          </div>

          <!-- Maintainer -->
          <div>
            <h3 class="text-lg font-semibold text-black dark:text-white">
              <i class="fa-solid fa-box"></i> Maintainer
            </h3>
            <p class="text-black dark:text-gray-400 mt-2">
              Maintainers can receive and respond to maintenance requests from
              tenants, track request status and completion, and schedule
              maintenance work.
            </p>
          </div>

          <!-- Tenant -->
          <div>
            <h3 class="text-lg font-semibold text-black dark:text-white">
              <i class="fa-solid fa-box"></i> Tenant
            </h3>
            <p class="text-black dark:text-gray-400 mt-2">
              Tenants can access their information, create tickets, pay bills,
              manage documents, and view notices from owners.
            </p>
          </div>
        </div>

        <!-- Colonne droite (image) -->
        <div class="lg:w-1/2 flex justify-center items-center">
          <img
            src="/public/images/system-section.svg"
            alt="System Image"
            class="w-full max-w-md mx-auto transform transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </section>
    <hr class="border-t border-gray-200 dark:border-gray-700" />
    <!--Section Core Pages-->
    <section class="py-9 md:py-12 bg-white dark:bg-black">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Texte et image dans un conteneur flex -->
        <div class="relative flex flex-col lg:flex-row items-center">
          <!-- Colonne de texte -->
          <div
            class="space-y-4 text-center lg:text-left lg:w-1/2 z-10 relative"
          >
            <h1
              class="text-[#fe0a44] dark:text-[#fe0a44] text-sm md:text-base font-semibold text-center"
            >
              Core Pages
            </h1>
            <h2
              class="text-black dark:text-white font-bold whitespace-nowrap text-center"
              style="font-size: clamp(1.8rem, 4vw, 3.2rem)"
            >
              Some of Our Core Pages
            </h2>

            <p class="text-black dark:text-gray-400 text-center mt-2">
              Oviota is the easiest all-in-one property management software.
              Lease your properties, manage work orders, automate accounting,
              and more.
            </p>

            <div class="space-y-4">
              <!-- Dashboard -->
              <div>
                <h3 class="text-lg font-semibold text-black dark:text-white">
                  <i class="fa-solid fa-box"></i> Dashboard
                </h3>
                <p class="text-black dark:text-gray-400 mt-2">
                  You can send group reminders from here, create new invoices,
                  and track tenant’s name, property, billing date, billing type,
                  amount, and payment status.
                </p>
              </div>

              <!-- Packages -->
              <div>
                <h3 class="text-lg font-semibold text-black dark:text-white">
                  <i class="fa-solid fa-box"></i> Packages
                </h3>
                <p class="text-black dark:text-gray-400" mt-2>
                  You can track all the tenant’s package information here.
                </p>
              </div>
            </div>
          </div>
          <br />
          <!-- Image -->
          <div
            class="lg:w-1/2 flex justify-center items-center order-last lg:order-first"
          >
            <img
              src="/public/images/Core-pages-section.svg"
              alt="Core Pages Image"
              class="w-full max-w-md mx-auto transform transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
    <hr class="border-t border-gray-200 dark:border-gray-700" />
    <!--Section FAQ-->
    <section class="py-9 md:py-12 bg-white dark:bg-black">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-4"
      >
        <!-- Titre de la section -->
        <h1
          class="text-[#fe0a44] dark:text-[#fe0a44] text-sm md:text-base font-semibold text-center"
        >
          FAQ
        </h1>
        <h2
          class="text-black dark:text-white font-bold text-center"
          style="font-size: clamp(1.8rem, 4vw, 3.2rem)"
        >
          You Have Questions? <br /><span
            class="mt-1 text-sm md:text-base font-medium text-black dark:text-gray-400"
            >Frenquently Asked Questions</span
          >
        </h2>

        <!-- FAQ 1 -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-black dark:text-white">
            <i class="fa-solid fa-question"></i> What is a property appraisal?
          </h3>
          <p class="text-black dark:text-gray-400">
            A property appraisal is an assessment of the value of a property,
            typically conducted by a professional appraiser. The appraisal takes
            into account factors such as the property's location, condition,
            size, and amenities to determine its market value.
          </p>
        </div>

        <!-- FAQ 2 -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-black dark:text-white">
            <i class="fa-solid fa-question"></i> What is a property management
            app?
          </h3>
          <p class="text-black dark:text-gray-400">
            A property management app is a mobile application that helps
            property owners and managers manage their properties more
            efficiently. The app typically includes features such as rent
            collection, maintenance requests, tenant screening, and lease
            management.
          </p>
        </div>

        <!-- FAQ 3 -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-black dark:text-white">
            <i class="fa-solid fa-question"></i> What is a property management
            software?
          </h3>
          <p class="text-black dark:text-gray-400">
            Property management software is a type of application designed to
            help property managers automate tasks related to managing rental
            properties, such as rent collection, maintenance requests, and
            tenant screening.
          </p>
        </div>
      </div>
    </section>
    <hr class="border-t border-gray-200 dark:border-gray-700" />
  </div>
</template>
