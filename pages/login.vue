<template>
    <div class="min-h-screen flex">
      <!-- Left side - Login form -->
      <div class="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-md w-full mx-auto">
          <!-- Logo -->
          <div class="mb-10">
            <img src="/images/oviota_rouge_svg.svg" alt="Oviota" class="h-16 w-auto" />
          </div>
  
          <!-- Sign in text -->
          <h2 class="text-4xl font-bold text-navy-900 mb-6">Sign in</h2>
          <p class="text-gray-600 mb-8">
            New owner? <NuxtLink to="/signup" class="text-[#fe0a44] hover:text-[#fe0a44]/90">Sign Up</NuxtLink>
          </p>
  
          <!-- Login form -->
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                v-model="email"
                type="email"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#fe0a44] focus:border-[#fe0a44]"
                placeholder="Email"
              />
            </div>
  
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <div class="relative">
                <input
                  id="password"
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#fe0a44] focus:border-[#fe0a44]"
                  placeholder="Password"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <i :class="showPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'" class="text-gray-400"></i>
                </button>
              </div>
            </div>
  
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  v-model="rememberMe"
                  type="checkbox"
                  class="h-4 w-4 text-[#fe0a44] focus:ring-[#fe0a44] border-gray-300 rounded"
                />
                <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember Me</label>
              </div>
              <NuxtLink to="/forgotpassword" class="text-sm text-[#fe0a44] hover:text-[#fe0a44]/90">
                Forgot Password?
              </NuxtLink>
            </div>
  
            <button
              type="submit"
              class="w-full py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#fe0a44] hover:bg-[#fe0a44]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fe0a44]"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
  
      <!-- Right side - Pink background with logo -->
      <div class="hidden lg:flex lg:flex-1 bg-[#fe0a44] items-center justify-center">
        <div class="text-center">
          <img src="/images/Oviota-logo-blanc.png" alt="Oviota" class="h-16 w-auto mx-auto mb-8" />
          <h2 class="text-4xl font-bold text-white mb-4">You are signing in Oviota</h2>
          <p class="text-white text-lg">You are signing in Oviota</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const email = ref('')
  const password = ref('')
  const rememberMe = ref(false)
  const showPassword = ref(false)
  
  const handleSubmit = () => {
    // Implement your login logic here
    console.log('Login attempt', { email: email.value, password: password.value, rememberMe: rememberMe.value })
  }
  </script>