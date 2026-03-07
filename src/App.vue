<template>
    <Hero />
    <AiSuiteSlider />
    <section id="templates" class="bg-white text-slate-900">
        <div class="mx-auto max-w-7xl px-6 py-20 sm:py-28">
            <!-- Headline block -->
            <div class="mx-auto max-w-3xl text-center">
                <h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Unlimited templates. Updated weekly.
                </h2>

                <dl class="mt-10 grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
                    <div class="rounded-2xl bg-slate-50 px-6 py-5 ring-1 ring-slate-100">
                        <dt class="text-sm font-semibold text-slate-900">Plug-and-play assets</dt>
                        <dd class="mt-1 text-sm text-slate-500">
                            Templates, LUTs, transitions, titles and sound effects — ready to drop
                            into your timeline.
                        </dd>
                    </div>

                    <div class="rounded-2xl bg-slate-50 px-6 py-5 ring-1 ring-slate-100">
                        <dt class="text-sm font-semibold text-slate-900">All major NLEs supported</dt>
                        <dd class="mt-1 text-sm text-slate-500">
                            Works with DaVinci Resolve, Premiere Pro, After Effects, Final Cut Pro
                            and CapCut.
                        </dd>
                    </div>

                    <div class="rounded-2xl bg-slate-50 px-6 py-5 ring-1 ring-slate-100">
                        <dt class="text-sm font-semibold text-slate-900">
                            Commercial use included
                        </dt>
                        <dd class="mt-1 text-sm text-slate-500">
                            Every asset is fully licensed for personal and commercial projects with
                            no extra fees.
                        </dd>
                    </div>

                    <div class="rounded-2xl bg-slate-50 px-6 py-5 ring-1 ring-slate-100">
                        <dt class="text-sm font-semibold text-slate-900">Fresh drops every week</dt>
                        <dd class="mt-1 text-sm text-slate-500">
                            New packs added weekly so your edits always feel current and ahead of
                            the curve.
                        </dd>
                    </div>
                </dl>

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
</script>