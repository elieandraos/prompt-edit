<template>
    <section
        id="templates"
        class="section-bg relative overflow-hidden text-slate-900"
    >
        <Container>
            <!-- Headline block -->
            <div class="mx-auto max-w-3xl text-center">
                <h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Unlimited templates. Fresh every week.
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
                                class="text-accent h-8 w-8 shrink-0"
                            />
                            <div>
                                <div
                                    class="text-base font-semibold text-slate-900"
                                >
                                    {{ feature.title }}
                                </div>
                                <div class="mt-1 text-sm text-slate-500">
                                    {{ feature.description }}
                                </div>
                            </div>
                        </div>
                    </dl>
                </div>
            </div>
        </Container>
    </section>
</template>

<script setup>
import Container from "../layout/Container.vue"
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

<style scoped>
.section-bg {
    background-color: white;
    background-image:
        radial-gradient(
            1000px 600px at 90% -5%,
            rgba(218, 84, 139, 0.35),
            transparent 60%
        ),
        radial-gradient(
            800px 500px at 60% -15%,
            rgba(56, 37, 70, 0.15),
            transparent 55%
        );
}
</style>
