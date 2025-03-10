<template>
  <div class="relative isolate bg-white px-6 py-12 sm:py-16 lg:px-8">
    <!-- Background decoration -->
    <div class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
      <div class="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#fe0a44] to-[#fe0a44] opacity-30" 
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>

    <!-- Header -->
    <div class="mx-auto max-w-4xl text-center mb-12">
      <h2 class="text-base font-semibold leading-7 text-[#fe0a44]">Pricing</h2>
      <p class="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        Choose the right plan for you
      </p>
      <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
        Choose an affordable plan that's packed with the best features for managing your properties effectively.
      </p>
    </div>

    <!-- Pricing Cards Grid -->
    <div class="mx-auto grid max-w-lg gap-6 grid-cols-1 md:max-w-4xl md:grid-cols-2 lg:max-w-7xl lg:grid-cols-5">
      <div v-for="tier in tiers" 
        :key="tier.id" 
        :class="[
          'rounded-3xl p-6 ring-1 ring-gray-900/10 flex flex-col justify-between h-[500px]', // Added justify-between
          tier.featured ? 'bg-gray-900 text-white shadow-xl' : 'bg-white/60'
        ]"
      >
        <div>
          <!-- Plan Name -->
          <h3 :id="tier.id" 
            class="text-center text-base font-semibold leading-7 text-[#fe0a44]"
          >
            {{ tier.name }}
          </h3>

          <!-- Price -->
          <div class="text-center mt-4">
            <p class="inline-flex items-baseline justify-center gap-x-2">
              <span :class="[
                'text-4xl font-bold tracking-tight',
                tier.featured ? 'text-white' : 'text-gray-900'
              ]">
                {{ tier.priceMonthly }}
              </span>
              <span :class="[
                'text-sm',
                tier.featured ? 'text-gray-400' : 'text-gray-600'
              ]">
                /monthly
              </span>
            </p>
          </div>

          <!-- Description -->
          <p :class="[
            'mt-4 text-sm leading-7 text-center',
            tier.featured ? 'text-gray-300' : 'text-gray-600'
          ]">
            {{ tier.description }}
          </p>

          <!-- Features List -->
          <ul role="list" :class="[
            'mt-6 space-y-2.5 text-sm leading-6',
            tier.featured ? 'text-gray-300' : 'text-gray-600'
          ]">
            <li v-for="feature in tier.features" 
              :key="feature" 
              class="flex items-center gap-x-2"
            >
              <i class="fa-solid fa-check" style="color: #5be176;"></i>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>

        <!-- CTA Button -->
        <NuxtLink
          to="/login"
          :aria-describedby="tier.id"
          :class="[
            'block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
            tier.featured
              ? 'bg-[#fe0a44] text-white shadow-sm hover:bg-[#fe0a44]/90 focus-visible:outline-[#fe0a44]'
              : 'text-[#fe0a44] ring-1 ring-inset ring-[#fe0a44]/20 hover:ring-[#fe0a44]/30 focus-visible:outline-[#fe0a44]'
          ]"
        >
          Get Started
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const tiers = [
  {
    name: 'Free trial',
    id: 'tier-free',
    href: '#',
    priceMonthly: '0€',
    description: 'Try our services for 14 days!',
    features: [
      'Add 1 Property',
      'Add 1 Unit',
      'Add 1 Maintainer',
      'Add 1 Invoice',
      'Add 1 Auto Invoice',
      'Ticket Support',
      'Notice Support'
    ],
    featured: false,
  },
  {
    name: 'Basic',
    id: 'tier-basic',
    href: '#',
    priceMonthly: '14.99€',
    description: 'Perfect for getting started with basic features.',
    features: [
      'Add 1 Property',
      'Add 1 Unit',
      'Add 1 Maintainer',
      'Add 1 Invoice',
      'Add 1 Auto Invoice'
    ],
    featured: false,
  },
  {
    name: 'Standard',
    id: 'tier-standard',
    href: '#',
    priceMonthly: '29.99€',
    description: 'Great for growing properties and needs.',
    features: [
      'Add 2 Properties',
      'Add 2 Units',
      'Add 2 Maintainers',
      'Add 4 Invoices',
      'Add 4 Auto Invoices',
      'Ticket Support',
      'Notice Support'
    ],
    featured: true,
  },
  {
    name: 'Silver',
    id: 'tier-silver',
    href: '#',
    priceMonthly: '35.99€',
    description: 'For larger property portfolios and business needs.',
    features: [
      'Add 10 Properties',
      'Add 40 Units',
      'Add 10 Maintainers',
      'Add 400 Invoices',
      'Add 400 Auto Invoices',
      'Ticket Support',
      'Notice Support'
    ],
    featured: false,
  },
  {
    name: 'Custom',
    id: 'tier-custom',
    href: '#',
    priceMonthly: '-€',
    description: 'Tailored solutions for enterprise needs.',
    features: [
      'Add - Maintainers',
      'Add - Invoices',
      '- Auto Invoices Generate',
      'Ticket Support',
      'Notice Support'
    ],
    featured: false,
  }
]
</script>