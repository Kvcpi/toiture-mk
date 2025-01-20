<!-- pages/contact.vue -->
<template>
    <div>
      <!-- En-tête de page -->
      <div class="bg-gray-900 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl font-bold text-white">Contact</h1>
        </div>
      </div>
  
      <!-- Section formulaire et informations -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Informations de contact -->
          <div>
            <h2 class="text-2xl font-bold mb-6">Nos coordonnées</h2>
            <div class="space-y-4">
              <div>
                <h3 class="font-semibold text-lg">Adresse</h3>
                <p class="text-gray-600">Votre adresse ici</p>
              </div>
              <div>
                <h3 class="font-semibold text-lg">Téléphone</h3>
                <p class="text-gray-600">Votre numéro ici</p>
              </div>
              <div>
                <h3 class="font-semibold text-lg">Email</h3>
                <p class="text-gray-600">contact@toituremk.com</p>
              </div>
            </div>
          </div>
  
          <!-- Formulaire de contact -->
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Nom complet</label>
              <input 
                type="text" 
                id="name" 
                v-model="name" 
                class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
  
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="email" 
                class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
  
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700">Téléphone</label>
              <input 
                type="tel" 
                id="phone" 
                v-model="phone" 
                class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
  
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea 
                id="message" 
                v-model="message" 
                rows="4" 
                class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>
  
            <button 
              type="submit" 
              class="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const name = ref('')
  const email = ref('')
  const phone = ref('')
  const message = ref('')
  
  const handleSubmit = () => {
    console.log({
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value
    })
  }
  </script>