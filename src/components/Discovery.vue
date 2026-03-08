<template>
    <section class="px-6 pb-16 sm:pb-24">
        <!-- Category cards -->
        <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
                v-for="c in categories"
                :key="c.title"
                ref="cardRefs"
                href="#"
                class="reveal-hidden group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
                <div class="flex items-start justify-between gap-4">
                    <div>
                        <div class="flex items-center gap-2">
                            <div class="text-base font-semibold text-slate-900">
                                {{ c.title }}
                            </div>
                            <span
                                v-if="c.badge"
                                class="rounded-full bg-slate-900 px-2 py-0.5 text-xs font-medium text-white"
                            >
                                {{ c.badge }}
                            </span>
                        </div>
                        <div class="mt-1 text-sm text-slate-500">
                            {{ c.description }}
                        </div>
                    </div>

                    <span
                        class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-700 group-hover:bg-slate-100"
                        aria-hidden="true"
                    >
                        →
                    </span>
                </div>

                <div class="mt-4 flex items-center justify-between">
                    <div class="text-xs text-slate-500">
                        {{ c.countLabel }}
                    </div>
                </div>
            </a>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue"
import { useScrollReveal } from "../composables/useScrollReveal.js"

const cardRefs = ref([])

useScrollReveal(cardRefs, { columns: 3, staggerBase: 100 })

const categories = [
    {
        title: "Transitions",
        description: "Smooth cuts, whip pans, zooms, glitches.",
        badge: "Popular",
        countLabel: "200+ assets",
    },
    {
        title: "Titles",
        description: "Openers, captions, kinetic typography.",
        countLabel: "150+ assets",
    },
    {
        title: "Lower Thirds",
        description: "Clean name tags and social handles.",
        countLabel: "90+ assets",
    },
    {
        title: "Overlays",
        description: "Light leaks, dust, film burn, texture.",
        badge: "New",
        countLabel: "Weekly drops",
    },
    {
        title: "Intros & Openers",
        description: "YouTube intros, cinematic openers, promo starters.",
        badge: "High demand",
        countLabel: "120+ assets",
    },
    {
        title: "Motion Graphics",
        description: "Animated elements, UI packs, infographic kits.",
        countLabel: "180+ assets",
    },
    {
        title: "Social Media Packs",
        description: "Vertical templates for Reels, Shorts and TikTok.",
        badge: "Creator favorite",
        countLabel: "Optimized for 9:16",
    },
    {
        title: "LUT Packs",
        description: "Cinematic looks, tone sets, moods.",
        countLabel: "Browse LUTs",
    },
    {
        title: "Sound Effects",
        description: "Swooshes, hits, UI clicks, ambience.",
        countLabel: "Browse SFX",
    },
]
</script>
