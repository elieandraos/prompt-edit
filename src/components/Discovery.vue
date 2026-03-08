<template>
    <section class="section-bg">
        <Container>
        <!-- Headline block -->
        <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl text-white font-semibold tracking-tight sm:text-4xl">
                Explore the library.
            </h2>
        </div>

        <!-- Category cards -->
        <div class="mt-18 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
                v-for="c in categories"
                :key="c.title"
                ref="cardRefs"
                href="#"
                class="reveal-hidden group rounded-2xl border border-[#DA548B]/20 p-5 shadow-sm transition hover:border-[#DA548B]/40 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(218,84,139,0.14)]"
            >
                <div class="flex items-start justify-between gap-4">
                    <div>
                        <div class="flex items-center gap-2">
                            <div class="text-base font-semibold text-white/50">
                                {{ c.title }}
                            </div>
                            <span
                                v-if="c.badge"
                                class="rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-white"
                            >
                                {{ c.badge }}
                            </span>
                        </div>
                        <div class="mt-1 text-sm text-white/80">
                            {{ c.description }}
                        </div>
                    </div>

                    <span
                        class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#DA548B]/10 text-accent opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                    >
                        →
                    </span>
                </div>

                <div class="mt-4 flex items-center justify-between">
                    <div class="text-xs text-slate-500">
                        {{ c.label }}
                    </div>
                </div>
            </a>
        </div>
        </Container>
    </section>
</template>

<script setup>
import { ref } from "vue"
import { useScrollReveal } from "../composables/useScrollReveal.js"
import Container from '../layout/Container.vue'

const cardRefs = ref([])

useScrollReveal(cardRefs, { columns: 3, staggerBase: 100 })

const categories = [
    {
        title: "Transitions",
        description: "Smooth cuts, whip pans, zooms, glitches.",
        badge: "Popular",
        label: "200+ assets",
    },
    {
        title: "Titles",
        description: "Openers, captions, kinetic typography.",
        label: "150+ assets",
    },
    {
        title: "Lower Thirds",
        description: "Clean name tags and social handles.",
        label: "90+ assets",
    },
    {
        title: "Overlays",
        description: "Light leaks, dust, film burn, texture.",
        badge: "New",
        label: "Weekly drops",
    },
    {
        title: "Intros & Openers",
        description: "YouTube intros, cinematic openers, promo starters.",
        badge: "High demand",
        label: "120+ assets",
    },
    {
        title: "Motion Graphics",
        description: "Animated elements, UI packs, infographic kits.",
        label: "180+ assets",
    },
    {
        title: "Social Media",
        description: "Vertical templates for Reels, Shorts and TikTok.",
        badge: "Creator favorite",
        label: "Optimized for 9:16",
    },
    {
        title: "LUT Packs",
        description: "Cinematic looks, tone sets, moods.",
        label: "Browse LUTs",
    },
    {
        title: "Sound Effects",
        description: "Swooshes, hits, UI clicks, ambience.",
        label: "Browse SFX",
    },
]
</script>

<style scoped>
.section-bg {
    background-color: #1E293B;
    background-image:
        radial-gradient(900px 500px at 50% 0%, rgba(218, 84, 139, 0.15), transparent 60%),
        radial-gradient(700px 400px at 50% 0%, rgba(14, 23, 43, 0.1), transparent 55%);
}
</style>
