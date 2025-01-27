<template>
    <div>
        <!-- Hero Section -->
        <header class="relative h-screen">
            <!-- Image de fond avec overlay -->
            <div class="absolute inset-0">
                <img src="/assets/images/hero.jpg" alt="hero-toiture-image"
                    class="w-full h-full object-cover opacity-70" />
                <div class="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>

            <!-- Contenu du hero -->
            <div
                class="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 text-white">
                <h1
                    class="text-5xl font-extrabold mb-4 text-orange-500 tracking-wide transform transition-transform duration-500 hover:scale-105">
                    Bienvenue chez Toiture Mk
                </h1>
                <p class="text-xl md:text-2xl text-white font-light">
                    Votre partenaire de confiance pour tous vos besoins en toiture
                </p>
            </div>
        </header>

        <!-- Section À propos -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold mb-8" style="color: #333;">
                    <span class="border-b-4" style="border-color: #F26835;">À propos</span>
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div class="space-y-8">
                        <p class="leading-relaxed" style="color: #666;">
                            Que vous ayez besoin de réparations, de rénovations ou de nouvelles installations,
                            notre équipe dévouée est là pour vous offrir des solutions fiables et durables.
                            Chez MK Toiture, nous combinons expertise technique, matériaux de qualité
                            supérieure et un service client exceptionnel pour garantir votre entière satisfaction.
                        </p>
                        <p class="leading-relaxed" style="color: #666;">
                            Depuis plusieurs années, nous mettons notre savoir-faire au service des particuliers et des
                            entreprises,
                            en nous assurant de répondre aux normes de sécurité et de durabilité les plus strictes.
                            Nous comprenons l'importance d'une toiture solide et fonctionnelle, c'est pourquoi chaque
                            projet est
                            traité avec une attention particulière.
                        </p>
                        <p class="leading-relaxed" style="color: #666;">
                            Que vous soyez un propriétaire résidentiel ou commercial, nous nous engageons à
                            vous fournir des résultats impeccables, à des prix compétitifs. Notre équipe travaille avec
                            rigueur,
                            professionnalisme et transparence, en respectant les délais convenus.
                        </p>
                        <p class="leading-relaxed" style="color: #666;">
                            Notre approche se distingue par l'écoute attentive de vos besoins, une évaluation précise de
                            chaque situation,
                            et des solutions adaptées qui vous offriront tranquillité d'esprit et confort pendant de
                            nombreuses années.
                            Faites confiance à MK Toiture pour un service sur mesure et de qualité.
                        </p>
                    </div>
                    <!-- Nouveau style pour les images -->
                    <div class="relative flex justify-center items-center space-x-4">
                        <div
                            class="w-1/2 overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-300">
                            <img src="/assets/images/a-propos1.jpg" alt="toiture-image-apropos1"
                                class="object-cover w-full h-full">
                        </div>
                        <div
                            class="w-1/2 overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-300">
                            <img src="/assets/images/a-propos2.jpg" alt="toiture-image-apropos2"
                                class="object-cover w-full h-full">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section Nos Services -->
        <section class="bg-black text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-orange-500 text-center mb-12">Nos services</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <!-- Service 1 -->
            <div class="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                <div class="relative group">
                    <img src="/assets/images/renovation.jpg" alt="Rénovation" class="rounded-md mb-4 transform group-hover:scale-105 transition-transform duration-300">
                    <div class="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
                </div>
                <h3 class="text-xl font-bold text-orange-500 mb-2 group-hover:text-white transition-colors duration-300">Rénovation</h3>
                <p class="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    Notre service de rénovation de toiture est conçu pour redonner vie à votre toit vieillissant. Que ce soit pour réparer des fuites, remplacer des tuiles endommagées ou rénover l'ensemble de la structure.
                </p>
            </div>
            <!-- Service 2 -->
            <div class="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                <div class="relative group">
                    <img src="/assets/images/construction.jpg" alt="Construction" class="rounded-md mb-4 transform group-hover:scale-105 transition-transform duration-300">
                    <div class="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
                </div>
                <h3 class="text-xl font-bold text-orange-500 mb-2 group-hover:text-white transition-colors duration-300">Construction</h3>
                <p class="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    Nous proposons des services de construction de toiture adaptés à tous types de projets, qu’il s’agisse de maisons individuelles, d’immeubles ou d'extensions.
                </p>
            </div>
            <!-- Service 3 -->
            <div class="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                <div class="relative group">
                    <img src="/assets/images/menuiserie.jpg" alt="Menuiserie" class="rounded-md mb-4 transform group-hover:scale-105 transition-transform duration-300">
                    <div class="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
                </div>
                <h3 class="text-xl font-bold text-orange-500 mb-2 group-hover:text-white transition-colors duration-300">Menuiserie</h3>
                <p class="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    Notre service de menuiserie se concentre sur l'ajout de structures en bois personnalisées à votre toiture, comme des lucarnes ou bardages.
                </p>
            </div>
            <!-- Service 4 -->
            <div class="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                <div class="relative group">
                    <img src="/assets/images/isolation.jpg" alt="Isolation" class="rounded-md mb-4 transform group-hover:scale-105 transition-transform duration-300">
                    <div class="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
                </div>
                <h3 class="text-xl font-bold text-orange-500 mb-2 group-hover:text-white transition-colors duration-300">Isolation</h3>
                <p class="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    L'isolation de votre toiture est essentielle pour améliorer l'efficacité énergétique de votre maison tout en réduisant les coûts.
                </p>
            </div>
        </div>
        <div class="text-center mt-12">
            <a href="/contact" class="inline-block bg-orange-500 text-white py-3 px-8 rounded-md hover:bg-orange-600 transition-all duration-300">
                Contactez-nous pour un devis gratuit
            </a>
        </div>
    </div>
</section>

    </div>
</template>
