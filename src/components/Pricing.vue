<template>
    <section
        id="pricing"
        class="relative bg-linear-to-b from-slate-800 to-[#0E172B] text-white"
    >
        <Container class="py-16 sm:py-24">
            <!-- Heading -->
            <div class="mx-auto max-w-3xl text-center">
                <h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Simple pricing.
                </h2>
                <p class="mt-4 text-lg text-white/70">
                    Unlimited template downloads. No complexity.
                </p>

                <!-- Toggle -->
                <div
                    class="mt-8 inline-flex items-center gap-3 rounded-full bg-white/10 p-1"
                >
                    <button
                        class="rounded-full px-5 py-2 text-sm font-medium transition"
                        :class="
                            yearly
                                ? 'text-white/50 hover:text-white/80'
                                : 'bg-white text-slate-900'
                        "
                        @click="yearly = false"
                    >
                        Monthly
                    </button>
                    <button
                        class="rounded-full px-5 py-2 text-sm font-medium transition"
                        :class="
                            yearly
                                ? 'bg-white text-slate-900'
                                : 'text-white/50 hover:text-white/80'
                        "
                        @click="yearly = true"
                    >
                        Yearly
                        <span
                            class="ml-1.5 rounded-full bg-[#DA548B] px-2 py-0.5 text-xs text-white"
                        >
                            -14%
                        </span>
                    </button>
                </div>
            </div>

            <!-- Card -->
            <div class="mx-auto mt-14 max-w-md">
                <div
                    class="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-sm"
                >
                    <div class="flex items-start justify-between">
                        <div>
                            <h3 class="text-lg font-semibold tracking-tight">
                                All-access
                            </h3>
                            <p class="mt-1 text-sm text-white/60">
                                {{
                                    yearly
                                        ? "Billed annually"
                                        : "Billed monthly"
                                }}
                            </p>
                        </div>

                        <div class="text-right">
                            <div class="flex items-baseline gap-1">
                                <span class="text-4xl font-bold transition-all">
                                    {{ yearly ? "$299" : "$29" }}
                                </span>
                                <span class="text-sm text-white/60">
                                    {{ yearly ? "/year" : "/month" }}
                                </span>
                            </div>
                            <p v-if="yearly" class="mt-1 text-xs text-white/40">
                                ~$24.90 / month
                            </p>
                        </div>
                    </div>

                    <ul class="mt-8 space-y-3 text-sm text-white/70">
                        <li class="flex items-center gap-2">
                            <ShieldCheckIcon
                                class="h-4 w-4 shrink-0 text-[#DA548B]"
                            />
                            Unlimited downloads
                        </li>
                        <li class="flex items-center gap-2">
                            <ShieldCheckIcon
                                class="h-4 w-4 shrink-0 text-[#DA548B]"
                            />
                            Access to all assets
                        </li>
                        <li class="flex items-center gap-2">
                            <ShieldCheckIcon
                                class="h-4 w-4 shrink-0 text-[#DA548B]"
                            />
                            10 new assets added every week
                        </li>
                        <li class="flex items-center gap-2">
                            <ShieldCheckIcon
                                class="h-4 w-4 shrink-0 text-[#DA548B]"
                            />
                            Request the assets you need
                        </li>
                        <li class="flex items-center gap-2">
                            <ShieldCheckIcon
                                class="h-4 w-4 shrink-0 text-[#DA548B]"
                            />
                            Licensed for personal and commercial use
                        </li>
                    </ul>

                    <div class="mt-8">
                        <a
                            href="#"
                            class="inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-900 hover:bg-white/90"
                        >
                            Create Account
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    </section>
</template>

<script setup>
import { ref } from "vue"

import Container from "../layout/Container.vue"
import ShieldCheckIcon from "../icons/ShieldCheckIcon.vue"

const yearly = ref(false)
</script>
