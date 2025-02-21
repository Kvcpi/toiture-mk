<template>
    <div class="min-h-screen bg-white dark:bg-black flex items-center justify-center px-6">
      <div class="text-center space-y-6 max-w-lg">
        <h1
          class="text-[#fe0a44] dark:text-[#fe0a44] font-bold text-5xl sm:text-6xl"
        >
          Oops! Page not found.
        </h1>
        <p class="text-lg text-black dark:text-gray-400">
          Looks like you've taken a wrong turn on the web! We can't find the page you're looking for.
        </p>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Don't worry, it's not you, it's us! Our <span class="font-bold">Company</span> page is under construction, but feel free to explore the rest of the site. 
        </p>
  
        <!-- Image (facultative) -->
        <img
          src="/public/images/404.svg"
          alt="Lost in space"
          class="w-full max-w-xs mx-auto mt-8"
        />
        
        <!-- Button to go back -->
        <div class="mt-8">
          <a
            href="/"
            class="inline-flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#fe0a44] hover:opacity-70"
          >
            Go back to Home
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Error404',
  }
  </script>
  
  <style scoped>
  /* If you'd like to add any extra animations or transitions */
  </style>
  