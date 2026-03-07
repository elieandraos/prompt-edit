<template>
    <section id="ai-tools" class="bg-[#0E172B] text-white">
        <div class=" px-6">
            <div class="max-w-3xl">
                <h2 class="text-3xl font-semibold tracking-tight text-white/40 sm:text-4xl">
                    AI Suite
                </h2>
            </div>

            <!-- Slider -->
            <div class="mt-12 pb-24">
                <div
                    class="relative -mx-6 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                    <div class="flex snap-x snap-mandatory gap-4 sm:gap-6">
                        <div
                            v-for="slide in slides"
                            :key="slide.title"
                            class="w-[78%] shrink-0 snap-start sm:w-[420px]"
                        >
                            <div
                                class="group relative h-64 overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 sm:h-72"
                            >
                                <img
                                    :src="slide.image"
                                    :alt="slide.title"
                                    class="absolute inset-0 h-full w-full object-cover opacity-80"
                                />
                                <div
                                    class="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.55))]"
                                />

                                <!-- Bottom title strip -->
                                <div class="absolute inset-x-0 bottom-0 p-5">
                                    <div
                                        class="inline-flex w-full items-end justify-between gap-3 rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10 backdrop-blur-md"
                                    >
                                        <div>
                                            <p class="text-sm font-semibold tracking-tight">
                                                {{ slide.title }}
                                            </p>
                                            <p class="mt-0.5 text-xs text-white/60">
                                                {{ slide.subtitle }}
                                            </p>
                                        </div>
                                        <span
                                            class="text-xs text-white/50 group-hover:text-white/70"
                                            >Explore</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import slide1 from "../assets/slide-1.png"
import slide2 from "../assets/slide-2.png"
import slide3 from "../assets/slide-3.png"
import slide4 from "../assets/slide-4.png"
import slide5 from "../assets/slide-5.png"
import slide6 from "../assets/slide-6.png"

const slides = [
    { title: "VEO 3.1 Fast", subtitle: "Rapid AI video generation", image: slide1 },
    { title: "Sora 2", subtitle: "Cinematic long-form video AI", image: slide2 },
    { title: "Nano Banana", subtitle: "Lightweight creative video model", image: slide3 },
    { title: "Nano Banana Pro", subtitle: "High-fidelity compact video AI", image: slide4 },
    { title: "Kling 2.6", subtitle: "Realistic motion video synthesis", image: slide5 },
    { title: "Kling 2.5 Turbo", subtitle: "Fast high-quality video output", image: slide6 },
]
</script>
