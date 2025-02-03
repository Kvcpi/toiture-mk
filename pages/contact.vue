<template>
  <div>
    <!-- En-tête de page -->
    <div class="bg-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-orange-500">Contact</h1>
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
              <!-- Lien Google Maps -->
              <p>
                📍 
                <a href="https://www.google.com/maps?q=Excelsiorlaan+71,+1930+Zaventem" 
                  target="_blank" 
                  class="hover:text-orange-500 transition-all duration-300">
                  Excelsiorlaan 71, 1930 Zaventem
                </a>
              </p>
            </div>
            <div>
              <h3 class="font-semibold text-lg">Téléphone</h3>
              <p> 📞 <a href="tel:+32472870080" class="hover:text-orange-500 transition-all duration-300">0472 87 00 80</a></p>
            </div>
            <div>
              <h3 class="font-semibold text-lg">Email</h3>
              <p>✉️ <a href="mailto:mk.construct2020@gmail.com" class="hover:text-orange-500 transition-all duration-300">mk.construct2020@gmail.com</a></p>
            </div>
          </div>
        </div>

        <!-- Formulaire de contact -->
        <form 
          @submit.prevent="handleSubmit"
          action="https://formspree.io/f/xdkaeopa" 
          method="POST" 
          class="space-y-6"
        >
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Nom complet</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              v-model="name" 
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              v-model="email" 
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">Téléphone</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              v-model="phone" 
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea 
              id="message" 
              name="message" 
              v-model="message" 
              rows="4" 
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            class="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600"
          >
            Envoyer
          </button>
        </form>

        <!-- Messages de statut -->
        <div v-if="status === 'success'" class="mt-6 text-green-500">
          <p>Votre message a été envoyé avec succès !</p>
        </div>
        <div v-if="status === 'error'" class="mt-6 text-red-500">
          <p>Une erreur est survenue. Veuillez réessayer.</p>
        </div>
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
const status = ref(null)

const handleSubmit = async (event) => {
  try {
    // Envoi du formulaire via Formspree
    const response = await fetch('https://formspree.io/f/xdkaeopa', {
      method: 'POST',
      body: new FormData(event.target),
    })

    if (response.ok) {
      status.value = 'success'
    } else {
      status.value = 'error'
    }
  } catch (error) {
    status.value = 'error'
  }
}
</script>
