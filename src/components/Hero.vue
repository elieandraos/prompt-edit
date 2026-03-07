<template>
    <section class="relative min-h-[85vh] flex items-center bg-linear-160 from-[#DA548B] from-10% via-[#382546] via-45% to-[#0E172B] to-80%">
        <Container class="text-center">
            <h1 class="text-4xl font-semibold tracking-tight text-white sm:text-7xl">
                Accelerate your creative workflow.
            </h1>

            <p class="mt-6 text-sm text-white/60 sm:text-xl">
                Unlimited video templates and pay-per-use AI generation — built for modern creators.
            </p>

            <div class="mt-16 mx-auto max-w-xl">
                <HeroGlobalSearch></HeroGlobalSearch>
            </div>
        </Container>

        <!-- overlay to blend the color transition to dark -->
        <div class="absolute z-1 inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0E172B]"></div>
    </section>
</template>

  <script setup>
  import Container from './../layout/Container.vue'
  import HeroGlobalSearch from './HeroGlobalSearch.vue'
  </script>
