<template>
    <Hero />
    <AiSuiteSlider />
    <section id="templates" class="bg-white text-slate-900">
        <div class="mx-auto max-w-7xl px-6 py-20 sm:py-24">
            <!-- Headline block -->
            <div class="mx-auto max-w-3xl text-center">
                <h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Unlimited templates. Updated weekly.
                </h2>

                <div class="relative mt-10">
                    <!-- Vertical divider -->
                    <div
                        class="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-200 to-transparent sm:block"
                    />
                    <!-- Horizontal divider -->
                    <div
                        class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-slate-200 to-transparent"
                    />

                    <dl class="grid grid-cols-1 sm:grid-cols-2">
                        <div class="flex items-center gap-4 px-6 py-8">
                            <LayersIcon class="h-8 w-8 shrink-0 text-[#DA548B]" />
                            <div>
                                <dt class="text-base font-semibold text-slate-900">
                                    Plug-and-play assets
                                </dt>
                                <dd class="mt-1 text-[15px] text-slate-500">
                                    Templates, LUTs, transitions, titles and sound effects — ready
                                    to drop into your timeline.
                                </dd>
                            </div>
                        </div>

                        <div class="flex items-center gap-4 px-6 py-8">
                            <MonitorIcon class="h-8 w-8 shrink-0 text-[#DA548B]" />
                            <div>
                                <dt class="text-base font-semibold text-slate-900">
                                    All major NLEs supported
                                </dt>
                                <dd class="mt-1 text-[15px] text-slate-500">
                                    Works with DaVinci Resolve, Premiere Pro, After Effects, Final
                                    Cut Pro and CapCut.
                                </dd>
                            </div>
                        </div>

                        <div class="flex items-center gap-4 px-6 py-8">
                            <ShieldCheckIcon class="h-8 w-8 shrink-0 text-[#DA548B]" />
                            <div>
                                <dt class="text-base font-semibold text-slate-900">
                                    Commercial use included
                                </dt>
                                <dd class="mt-1 text-[15px] text-slate-500">
                                    Every asset is fully licensed for personal and commercial
                                    projects with no extra fees.
                                </dd>
                            </div>
                        </div>

                        <div class="flex items-center gap-4 px-6 py-8">
                            <SparklesIcon class="h-8 w-8 shrink-0 text-[#DA548B]" />
                            <div>
                                <dt class="text-base font-semibold text-slate-900">
                                    Fresh drops every week
                                </dt>
                                <dd class="mt-1 text-[15px] text-slate-500">
                                    New packs added weekly so your edits always feel current and
                                    ahead of the curve.
                                </dd>
                            </div>
                        </div>
                    </dl>
                </div>

                <div class="mt-8 flex justify-center">
                    <a
                        href="#library"
                        class="inline-flex items-center gap-3 rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
                    >
                        Join now
                        <svg class="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                            <path
                                d="M5 10h10M10 5l5 5-5 5"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import AiSuiteSlider from "./components/AiSuiteSlider.vue"
import Hero from "./components/Hero.vue"
import LayersIcon from "./components/icons/LayersIcon.vue"
import MonitorIcon from "./components/icons/MonitorIcon.vue"
import ShieldCheckIcon from "./components/icons/ShieldCheckIcon.vue"
import SparklesIcon from "./components/icons/SparklesIcon.vue"
</script>
