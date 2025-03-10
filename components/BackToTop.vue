<template>
    <button 
        v-show="showButton" 
        @click="scrollToTop"
        class="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition duration-300 z-50"
        aria-label="Back to Top"
    >
    <i class="fa-solid fa-chevron-up"></i>
    </button>
</template>


<script>
export default {
    data() {
        return {
            showButton: false,
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.showButton = window.scrollY > 200;
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
    },
};
</script>

<style scoped>
button {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
    filter: drop-shadow(0 0 10px rgba(242, 104, 53, 0.3)); /* Ajoute une lueur orange subtile */
}

/* Animation d'entrée/sortie */
button {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.3s ease, transform 0.3s ease;
}

button[style*="display: none"] {
    opacity: 0;
    transform: translateY(20px);
}
</style>