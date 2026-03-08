<template>
    <section
        id="pricing"
        class="relative bg-linear-to-b from-slate-800 to-[#0E172B] text-white"
    >
        <Container>
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
                    class="mt-8 inline-flex items-center rounded-full bg-white/10 p-1"
                >
                    <div class="relative flex">
                        <!-- Sliding pill -->
                        <div
                            class="absolute inset-y-0 rounded-full bg-white transition-all duration-300"
                            :style="pillStyle"
                        />

                        <button
                            v-for="(option, i) in billingOptions"
                            :key="option.value"
                            :ref="
                                (el) => {
                                    if (el) btnRefs[i] = el
                                }
                            "
                            class="focus-visible:ring-accent relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 focus-visible:ring-2 focus-visible:outline-none"
                            :class="
                                yearly === option.value
                                    ? 'text-slate-900'
                                    : 'text-white/50 hover:text-white/80'
                            "
                            @click="yearly = option.value"
                        >
                            {{ option.label }}
                            <span
                                v-if="option.badge"
                                class="bg-accent ml-1.5 rounded-full px-2 py-0.5 text-xs text-white"
                            >
                                {{ option.badge }}
                            </span>
                        </button>
                    </div>
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
                            <p class="mt-1 text-sm text-white/75">
                                {{
                                    yearly
                                        ? "Billed annually"
                                        : "Billed monthly"
                                }}
                            </p>
                        </div>

                        <div class="text-right">
                            <div class="flex items-baseline gap-1">
                                <span class="text-4xl font-bold">
                                    {{ yearly ? "$299" : "$29" }}
                                </span>
                                <span class="text-sm text-white/75">
                                    {{ yearly ? "/year" : "/month" }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <ul class="mt-8 space-y-3 text-sm text-white/70">
                        <li
                            v-for="item in perks"
                            :key="item"
                            class="flex items-center gap-2"
                        >
                            <ShieldCheckIcon
                                class="text-accent h-4 w-4 shrink-0"
                            />
                            {{ item }}
                        </li>
                    </ul>

                    <div class="mt-8">
                        <a
                            href="#"
                            class="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-40"
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
import { computed, nextTick, onMounted, ref, watch } from "vue"

import Container from "../layout/Container.vue"
import ShieldCheckIcon from "../icons/ShieldCheckIcon.vue"

const yearly = ref(false)
const btnRefs = ref([])
const pillStyle = ref({})

const billingOptions = [
    { label: "Monthly", value: false },
    { label: "Yearly", value: true, badge: "-14%" },
]

const perks = [
    "Unlimited downloads",
    "Access to all assets",
    "10 new assets added every week",
    "Request the assets you need",
    "Licensed for personal and commercial use",
]

const activeIndex = computed(() => (yearly.value ? 1 : 0))

const updatePill = () => {
    const btn = btnRefs.value[activeIndex.value]

    if (!btn) return

    pillStyle.value = {
        left: `${btn.offsetLeft}px`,
        width: `${btn.offsetWidth}px`,
    }
}

watch(yearly, () => updatePill())

onMounted(() => {
    nextTick(() => updatePill())
})
</script>
