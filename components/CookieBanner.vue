<template>
    <div v-if="!accepted" class="fixed bottom-0 left-0 w-full bg-black text-white py-4 px-6 text-center shadow-lg border-t-4 border-orange-500 rounded-t-lg z-50">
      <p class="text-sm leading-relaxed">
        Ce site utilise des cookies pour améliorer votre expérience de navigation. En poursuivant votre navigation sur ce site, vous acceptez l’utilisation des cookies.
        Pour plus d’informations ou pour modifier vos préférences, consultez notre 
        <a href="/privacy" target="_blank" class="underline text-orange-400">Politique de confidentialité</a>.
      </p>
      <div class="mt-4">
        <button @click="acceptCookies" class="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300">Accepter</button>
        <button @click="rejectCookies" class="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">Refuser</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        accepted: localStorage.getItem('cookiesAccepted') === 'true',
      };
    },
    methods: {
      acceptCookies() {
        localStorage.setItem('cookiesAccepted', 'true');
        this.accepted = true;
      },
      rejectCookies() {
        localStorage.setItem('cookiesAccepted', 'false');
        this.accepted = true;
      }
    }
  };
  </script>
  