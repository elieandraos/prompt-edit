<template>
    <footer class="bg-[#0E172B] text-white">
        <Container class="py-16 sm:py-24">
            <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="col in columns" :key="col.heading">
                    <h3
                        class="text-xs font-semibold tracking-widest text-white/60 uppercase"
                    >
                        {{ col.heading }}
                    </h3>
                    <ul class="mt-6 space-y-4 text-base text-white/80">
                        <li v-for="link in col.links" :key="link.label">
                            <a :href="link.href" class="hover:text-white">{{
                                link.label
                            }}</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                class="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
            >
                <p class="text-sm text-white/70">
                    © 2026 Content Creator Templates. All rights reserved.
                </p>

                <div class="flex items-center gap-5">
                    <a
                        v-for="social in socials"
                        :key="social.label"
                        href="#"
                        class="text-white/60 hover:text-white"
                        :aria-label="social.label"
                    >
                        <component :is="social.icon" class="h-5 w-5" />
                    </a>
                </div>
            </div>
        </Container>
    </footer>
</template>

<script setup>
import Container from "../layout/Container.vue"
import FacebookIcon from "../icons/FacebookIcon.vue"
import InstagramIcon from "../icons/InstagramIcon.vue"

const columns = [
    {
        heading: "Templates",
        links: [
            { label: "Video Assets", href: "#" },
            { label: "Sound Effects", href: "#" },
            { label: "Prompts", href: "#" },
            { label: "How to Use Templates", href: "#" },
            { label: "DaVinci Resolve Extension", href: "#" },
        ],
    },
    {
        heading: "Contributor",
        links: [
            { label: "Become a Contributor", href: "#" },
            { label: "Referral Model", href: "#" },
        ],
    },
    {
        heading: "Legal",
        links: [
            { label: "Earnings Disclaimer", href: "#" },
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "International Policies", href: "#" },
        ],
    },
]

const socials = [
    { label: "Facebook", icon: FacebookIcon },
    { label: "Instagram", icon: InstagramIcon },
]
</script>
