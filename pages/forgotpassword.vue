<template>
    <div class="min-h-screen flex">
      <!-- Left side - Reset password form -->
      <div class="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-md w-full mx-auto">
          <!-- Logo -->
          <div class="mb-10">
            <img src="/images/oviota_rouge_svg.svg" alt="Oviota" class="h-16 w-auto" />
          </div>
  
          <!-- Reset password text -->
          <h2 class="text-4xl font-bold text-navy-900 mb-6">Reset Password</h2>
          <p class="text-gray-600 mb-8">
            Enter your email address and we'll send you instructions to reset your password.
          </p>
  
          <!-- Reset password form -->
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                v-model="email"
                type="email"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#fe0a44] focus:border-[#fe0a44]"
                placeholder="Enter your email"
              />
            </div>
  
            <div class="flex items-center justify-between">
              <NuxtLink to="/login" class="text-sm text-[#fe0a44] hover:text-[#fe0a44]/90">
                Back to Login
              </NuxtLink>
            </div>
  
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#fe0a44] hover:bg-[#fe0a44]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fe0a44] disabled:opacity-50"
            >
              {{ isLoading ? 'Sending...' : 'Send Reset Instructions' }}
            </button>
  
            <!-- Success/Error messages -->
            <div v-if="message" :class="[
              'p-4 rounded-md',
              status === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
            ]">
              {{ message }}
            </div>
          </form>
        </div>
      </div>
  
      <!-- Right side - Pink background with logo -->
      <div class="hidden lg:flex lg:flex-1 bg-[#fe0a44] items-center justify-center">
        <div class="text-center">
          <img src="/images/Oviota-logo-blanc.png" alt="Oviota" class="h-16 w-auto mx-auto mb-8" />
          <h2 class="text-4xl font-bold text-white mb-4">Password Reset</h2>
          <p class="text-white text-lg">We'll help you get back into your account</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  const isLoading = ref(false)
  const message = ref('')
  const status = ref('')
  
  const handleSubmit = async () => {
    try {
      isLoading.value = true
      // Ici, vous devrez implémenter l'appel à votre API
      await sendResetPasswordEmail(email.value)
      
      status.value = 'success'
      message.value = 'If an account exists for this email, you will receive password reset instructions.'
      email.value = '' // Clear the form
    } catch (error) {
      status.value = 'error'
      message.value = 'An error occurred. Please try again later.'
      console.error('Reset password error:', error)
    } finally {
      isLoading.value = false
    }
  }
  
  // Fonction à implémenter pour envoyer l'email
  const sendResetPasswordEmail = async (email) => {
    // Simulation d'un appel API
    return new Promise((resolve) => {
      setTimeout(resolve, 1500)
    })
  }
  </script>