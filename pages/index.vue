<template>
    <div>
        <!-- Hero Section -->
        <header class="relative min-h-[80vh] md:h-screen flex items-center justify-center">
            <div class="absolute inset-0">
                <img src="/images/hero.webp" alt="hero-toiture-image" class="w-full h-full object-cover opacity-70" />
                <div class="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            <div
                class="relative z-10 max-w-7xl mx-auto text-white px-4 sm:px-6 lg:px-8 py-12 flex flex-col justify-center items-center text-center">
                <h1
                    class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-orange-500 tracking-wide transform transition-transform duration-500 hover:scale-105">
                    Bienvenue chez Toiture Mk - Mk Construct
                </h1>
                <p class="text-lg sm:text-xl md:text-2xl text-white font-light mb-6">
                    Votre partenaire de confiance pour tous vos besoins en toiture
                </p>
                <div class="mt-8 md:mt-12">
                    <a href="/contact"
                        class="w-full sm:w-auto inline-flex justify-center items-center bg-orange-500 text-white py-3 px-8 rounded-md hover:bg-orange-600 transition-all duration-300">
                        Contactez-nous pour un devis gratuit
                    </a>
                </div>
            </div>
        </header>

        <!-- Section À propos -->
        <section class="py-12 md:py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    class="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-orange-500 mb-6 md:mb-12 pb-4 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-16 md:after:w-24 after:h-1 after:bg-gray-800 dark:after:bg-orange-500">
                    À propos
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div class="space-y-6">
                        <p class="leading-relaxed text-gray-600 text-base sm:text-lg">
                            Que vous ayez besoin de réparations, de rénovations ou de nouvelles installations, notre
                            équipe dévouée est là pour vous offrir des solutions fiables et durables.
                        </p>
                        <p class="leading-relaxed text-gray-600 text-base sm:text-lg">
                            Depuis plusieurs années, nous mettons notre savoir-faire au service des particuliers et des
                            entreprises, en nous assurant de répondre aux normes de sécurité et de durabilité les plus
                            strictes.
                        </p>
                        <p class="leading-relaxed text-gray-600 text-base sm:text-lg">
                            Notre équipe travaille avec rigueur, professionnalisme et transparence, en respectant les
                            délais convenus.
                        </p>
                    </div>

                    <div class="grid grid-cols-2 gap-4 mt-6 md:mt-0">
                        <div
                            class="aspect-square overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <img src="/images/a-propos1.webp" alt="toiture-image-apropos1"
                                class="w-full h-full object-cover">
                        </div>
                        <div
                            class="aspect-square overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <img src="/images/a-propos2.webp" alt="toiture-image-apropos2"
                                class="w-full h-full object-cover">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section Nos Services -->
        <section class="bg-black text-white py-12 md:py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    class="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-center text-orange-500 mb-8 pb-4 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-16 md:after:w-24 after:h-1 after:bg-orange-500">
                    Nos services
                </h2>

                <div class="relative">
                    <!-- Version mobile avec scroll -->
                    <div
                        class="md:hidden flex overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 space-x-4 scrollbar-hide">
                        <!-- Service 1 Mobile -->
                        <div class="snap-center flex-none w-[85vw] sm:w-[45vw]">
                            <div
                                class="bg-gray-900 rounded-xl p-4 h-full transform transition-all duration-300 hover:scale-105">
                                <div class="aspect-video w-full mb-4 overflow-hidden rounded-lg">
                                    <img src="/images/renovation.webp" alt="Rénovation"
                                        class="w-full h-full object-cover">
                                </div>
                                <h3 class="text-xl font-bold text-orange-500 mb-2">Rénovation</h3>
                                <p class="text-gray-300 text-sm sm:text-base">
                                    Experts en rénovation de toitures de tous types : tuiles, ardoises, zinc ou membrane
                                    EPDM. Nous diagnostiquons et réparons les fuites, remplaçons les matériaux
                                    endommagés et renforçons la structure existante. Garantie décennale sur nos travaux.
                                </p>
                            </div>
                        </div>

                        <!-- Service 2 Mobile -->
                        <div class="snap-center flex-none w-[85vw] sm:w-[45vw]">
                            <div
                                class="bg-gray-900 rounded-xl p-4 h-full transform transition-all duration-300 hover:scale-105">
                                <div class="aspect-video w-full mb-4 overflow-hidden rounded-lg">
                                    <img src="/images/construction.webp" alt="Construction"
                                        class="w-full h-full object-cover">
                                </div>
                                <h3 class="text-xl font-bold text-orange-500 mb-2">Construction</h3>
                                <p class="text-gray-300 text-sm sm:text-base">
                                    Construction de toitures sur-mesure pour maisons individuelles, bâtiments collectifs
                                    et locaux professionnels. Nous utilisons des matériaux certifiés et respectons les
                                    normes RT2020. Installation de fenêtres de toit et création de lucarnes incluses.
                                </p>
                            </div>
                        </div>


                        <!-- Service 3 Mobile -->
                        <div class="snap-center flex-none w-[85vw] sm:w-[45vw]">
                            <div
                                class="bg-gray-900 rounded-xl p-4 h-full transform transition-all duration-300 hover:scale-105">
                                <div class="aspect-video w-full mb-4 overflow-hidden rounded-lg">
                                    <img src="/images/isolation.webp" alt="Isolation"
                                        class="w-full h-full object-cover">
                                </div>
                                <h3 class="text-xl font-bold text-orange-500 mb-2">Isolation</h3>
                                <p class="text-gray-300 text-sm sm:text-base">
                                    Isolation thermique et phonique complète : combles, rampants et toiture. Utilisation
                                    de matériaux écologiques (laine de bois, ouate de cellulose). Eligible aux aides de
                                    l'État MaPrimeRénov'. Économies d'énergie garanties jusqu'à 30%.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Version desktop avec grid -->
                    <div class="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- Service 1 Desktop -->
                        <div class="group">
                            <div
                                class="bg-gray-900 rounded-xl p-4 h-full transform transition-all duration-300 group-hover:scale-105 group-hover:bg-gray-800">
                                <div class="aspect-video w-full mb-4 overflow-hidden rounded-lg">
                                    <img src="/images/renovation.webp" alt="Rénovation"
                                        class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110">
                                </div>
                                <h3 class="text-xl font-bold text-orange-500 mb-2 group-hover:text-orange-400">
                                    Rénovation</h3>
                                <p class="text-gray-300 text-base">
                                    Experts en rénovation de toitures de tous types : tuiles, ardoises, zinc ou membrane
                                    EPDM. Nous diagnostiquons et réparons les fuites, remplaçons les matériaux
                                    endommagés et renforçons la structure existante. Garantie décennale sur nos travaux.
                                </p>
                            </div>
                        </div>

                        <!-- Service 2 Desktop -->
                        <div class="group">
                            <div
                                class="bg-gray-900 rounded-xl p-4 h-full transform transition-all duration-300 group-hover:scale-105 group-hover:bg-gray-800">
                                <div class="aspect-video w-full mb-4 overflow-hidden rounded-lg">
                                    <img src="/images/construction.webp" alt="Construction"
                                        class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110">
                                </div>
                                <h3 class="text-xl font-bold text-orange-500 mb-2 group-hover:text-orange-400">
                                    Construction</h3>
                                <p class="text-gray-300 text-base">
                                    Construction de toitures sur-mesure pour maisons individuelles, bâtiments collectifs
                                    et locaux professionnels. Nous utilisons des matériaux certifiés et respectons les
                                    normes RT2020. Installation de fenêtres de toit et création de lucarnes incluses.
                                </p>
                            </div>
                        </div>


                        <!-- Service 3 Desktop -->
                        <div class="group">
                            <div
                                class="bg-gray-900 rounded-xl p-4 h-full transform transition-all duration-300 group-hover:scale-105 group-hover:bg-gray-800">
                                <div class="aspect-video w-full mb-4 overflow-hidden rounded-lg">
                                    <img src="/images/isolation.webp" alt="Isolation"
                                        class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110">
                                </div>
                                <h3 class="text-xl font-bold text-orange-500 mb-2 group-hover:text-orange-400">Isolation
                                </h3>
                                <p class="text-gray-300 text-base">
                                    Isolation thermique et phonique complète : combles, rampants et toiture. Utilisation
                                    de matériaux écologiques (laine de bois, ouate de cellulose). Eligible aux aides de
                                    l'État MaPrimeRénov'. Économies d'énergie garanties jusqu'à 30%.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-8 md:mt-12">
                    <a href="/contact"
                        class="inline-block bg-orange-500 text-white py-3 px-8 rounded-md hover:bg-orange-600 transition-all duration-300">
                        Contactez-nous pour un devis gratuit
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>