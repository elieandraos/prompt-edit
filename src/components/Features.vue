<template>
    <section id="templates" class="bg-white text-slate-900">
        <Container class="py-16 sm:py-24">
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
                        <div
                            v-for="feature in features"
                            :key="feature.title"
                            class="flex items-center gap-4 px-6 py-8"
                        >
                            <component
                                :is="feature.icon"
                                class="h-8 w-8 shrink-0 text-[#DA548B]"
                            />
                            <div>
                                <div class="text-base font-semibold text-slate-900">
                                    {{ feature.title }}
                                </div>
                                <div class="mt-1 text-[15px] text-slate-500">
                                    {{ feature.description }}
                                </div>
                            </div>
                        </div>
                    </dl>
                </div>

                <div class="mt-8 flex justify-center">
                    <a
                        href="#"
                        class="inline-flex items-center gap-3 rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300"
                    >
                        Join now
                        <ArrowRightIcon class="h-4 w-4" />
                    </a>
                </div>
            </div>
        </Container>
    </section>
</template>

<script setup>
import Container from "../layout/Container.vue"
import ArrowRightIcon from "../icons/ArrowRightIcon.vue"
import LayersIcon from "../icons/LayersIcon.vue"
import MonitorIcon from "../icons/MonitorIcon.vue"
import ShieldCheckIcon from "../icons/ShieldCheckIcon.vue"
import SparklesIcon from "../icons/SparklesIcon.vue"

const features = [
    {
        icon: LayersIcon,
        title: "Plug-and-play assets",
        description:
            "Templates, LUTs, transitions, titles and sound effects — ready to drop into your timeline.",
    },
    {
        icon: MonitorIcon,
        title: "All major NLEs supported",
        description:
            "Works with DaVinci Resolve, Premiere Pro, After Effects, Final Cut Pro and CapCut.",
    },
    {
        icon: ShieldCheckIcon,
        title: "Commercial use included",
        description:
            "Every asset is fully licensed for personal and commercial projects with no extra fees.",
    },
    {
        icon: SparklesIcon,
        title: "Fresh drops every week",
        description:
            "New packs added weekly so your edits always feel current and ahead of the curve.",
    },
]
</script>
