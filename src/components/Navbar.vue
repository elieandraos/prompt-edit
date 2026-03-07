<template>
    <header class="fixed inset-x-0 top-0 z-50 backdrop-blur-md">
        <nav class="flex items-center justify-end px-6 py-4">
            <div class="flex items-center gap-6">
                <a
                    v-for="link in links"
                    :key="link.label"
                    :href="link.href"
                    class="text-sm font-medium transition"
                    :class="[
                        onLight
                            ? 'text-black/70 hover:text-black'
                            : 'text-white/70 hover:text-white',
                        link.primary ? 'rounded-full px-4 py-1.5' : '',
                        link.primary && onLight
                            ? 'bg-black/10 hover:bg-black/20'
                            : '',
                        link.primary && !onLight
                            ? 'bg-white/10 hover:bg-white/20'
                            : '',
                    ]"
                >
                    {{ link.label }}
                </a>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue"

const links = [
    { label: "Contribute", href: "#" },
    { label: "Learn", href: "#" },
    { label: "Sign in", href: "#", primary: true },
]

const lightSections = ["templates", "faq"]
const onLight = ref(false)
const navbarY = 30

const checkSection = () => {
    onLight.value = lightSections.some((id) => {
        const el = document.getElementById(id)

        if (!el) return false

        const { top, bottom } = el.getBoundingClientRect()

        return top <= navbarY && bottom >= navbarY
    })
}

onMounted(() => {
    checkSection()

    window.addEventListener("scroll", checkSection, { passive: true })
})

onBeforeUnmount(() => {
    window.removeEventListener("scroll", checkSection)
})
</script>
