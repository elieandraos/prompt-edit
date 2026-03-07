<template>
    <section id="faq" class="section-bg relative overflow-hidden text-slate-900">
        <Container class="py-16 sm:py-24">

                <h2 class="text-3xl font-semibold tracking-tight mx-auto text-center sm:text-4xl">
                    Frequently asked questions.
                </h2>

                <div class="mt-12 divide-y divide-slate-100">
                    <div v-for="(item, index) in faqs" :key="item.question">
                        <dt>
                            <button
                                class="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-slate-900"
                                @click="toggle(index)"
                            >
                                {{ item.question }}
                                <ChevronIcon
                                    class="h-5 w-5 shrink-0 text-slate-400 transition duration-300"
                                    :class="open === index ? 'rotate-180' : ''"
                                />
                            </button>
                        </dt>
                        <dd
                            class="overflow-hidden transition-all duration-300"
                            :class="open === index ? 'max-h-64 pb-5' : 'max-h-0'"
                        >
                            <p class="text-[15px] leading-relaxed text-slate-500">
                                {{ item.answer }}
                            </p>
                        </dd>
                    </div>
                </div>

        </Container>
    </section>
</template>

<script setup>
import { ref } from "vue"

import Container from "../layout/Container.vue"
import ChevronIcon from "../icons/ChevronIcon.vue"

const open = ref(null)

const toggle = (index) => {
    open.value = open.value === index ? null : index
}

const faqs = [
    {
        question: "Can I use the assets for commercial & personal use?",
        answer: "Yes! As a paid Content Creator Templates subscriber, you can use any asset for commercial or personal use for life.",
    },
    {
        question: "Can I change my subscription or cancel at anytime?",
        answer: "Yes! You can cancel anytime — otherwise your account will automatically renew at the end of each billing cycle. If you would like to switch plans, simply email support@contentcreator.com, or click the Manage Subscription link in your Dashboard.",
    },
    {
        question: "Is it REALLY unlimited downloads?",
        answer: "Absolutely! As a subscriber to Content Creator Templates, you will get unlimited downloads of any assets available in the member library. Do note that we do not allow automatic downloading tools.",
    },
    {
        question: "What happens to my distributed videos after cancelling my subscription?",
        answer: "All videos created and published during an active subscription are cleared from 3rd party's copyright claims forever.",
    },
]
</script>

<style scoped>
.section-bg {
    background-color: white;
    background-image:
        radial-gradient(1000px 600px at 50% 110%, rgba(218, 84, 139, 0.35), transparent 60%),
        radial-gradient(800px 500px at 40% 105%, rgba(56, 37, 70, 0.15), transparent 55%);
}
</style>
