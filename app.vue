<template>
  <div>
    <ColorModeScript />
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<style>

body {
  font-family: 'LenaFont', sans-serif;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(10px) scale(0.98);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.98);
}

/* Ajoutez cette classe à votre container principal si nécessaire */
.page-wrapper {
  perspective: 1000px;
  transform-style: preserve-3d;
  will-change: transform, opacity;
}

</style>

<script>

export default {
  components: {
    Footer,
  },
};

import Footer from './components/Footer.vue'


</script>