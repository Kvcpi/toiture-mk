<template>
    <div class="min-h-screen flex">
      <!-- Left side - Signup form -->
      <div class="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-md w-full mx-auto">
          <br>
  
          <!-- Sign up text -->
          <h2 class="text-4xl font-bold text-navy-900 mb-6">Sign Up</h2>
          <p class="text-gray-600 mb-8">
            Already have an account? <NuxtLink to="/login" class="text-[#fe0a44] hover:text-[#fe0a44]/90">Sign In</NuxtLink>
          </p>
  
          <!-- Signup form -->
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Full Name -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  id="firstName"
                  v-model="firstName"
                  type="text"
                  required
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#fe0a44] focus:border-[#fe0a44]"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  id="lastName"
                  v-model="lastName"
                  type="text"
                  required
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#fe0a44] focus:border-[#fe0a44]"
                  placeholder="Last Name"
                />
              </div>
            </div>
  
            <!-- Email -->
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
  
            <!-- Phone Number -->
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                id="phone"
                v-model="phone"
                type="tel"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#fe0a44] focus:border-[#fe0a44]"
                placeholder="Phone Number"
              />
            </div>
  
            <!-- Password -->
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
  
            <!-- Confirm Password -->
            <div>
              <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
              <div class="relative">
                <input
                  id="confirmPassword"
                  v-model="confirmPassword"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  required
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#fe0a44] focus:border-[#fe0a44]"
                  placeholder="Confirm Password"
                />
                <button
                  type="button"
                  @click="showConfirmPassword = !showConfirmPassword"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <i :class="showConfirmPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'" class="text-gray-400"></i>
                </button>
              </div>
            </div>
  
            <!-- Terms and Conditions -->
            <div class="flex items-center">
              <input
                id="terms"
                v-model="acceptTerms"
                type="checkbox"
                required
                class="h-4 w-4 text-[#fe0a44] focus:ring-[#fe0a44] border-gray-300 rounded"
              />
              <label for="terms" class="ml-2 block text-sm text-gray-900">
                I agree to the 
                <NuxtLink to="/terms" class="text-[#fe0a44] hover:text-[#fe0a44]/90">Terms and Conditions</NuxtLink>
              </label>
            </div>
  
            <button
              type="submit"
              class="w-full py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#fe0a44] hover:bg-[#fe0a44]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fe0a44]"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
  
      <!-- Right side - Pink background with logo -->
      <div class="hidden lg:flex lg:flex-1 bg-[#fe0a44] items-center justify-center">
        <div class="text-center">
          <img src="/public/images/Oviota-logo-blanc.png" alt="Oviota" class="h-16 w-auto mx-auto mb-8" />
          <h2 class="text-4xl font-bold text-white mb-4">Create your Oviota account</h2>
          <p class="text-white text-lg">Join us and start managing your properties today</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const firstName = ref('')
  const lastName = ref('')
  const email = ref('')
  const phone = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  const showPassword = ref(false)
  const showConfirmPassword = ref(false)
  const acceptTerms = ref(false)
  
  const handleSubmit = () => {
    // Vérifier si les mots de passe correspondent
    if (password.value !== confirmPassword.value) {
      alert('Passwords do not match')
      return
    }
  
    // Implémenter votre logique d'inscription ici
    console.log('Signup attempt', {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      password: password.value,
      acceptTerms: acceptTerms.value
    })
  }
  </script>