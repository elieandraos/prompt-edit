<template>
    <div
        ref="root"
        class="relative z-20 flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 ring-1 ring-white/20 backdrop-blur focus-within:ring-white/40"
    >
        <!-- Search icon -->
        <SearchIcon class="h-5 w-5 shrink-0 text-white/75" />

        <!-- Category trigger -->
        <button
            type="button"
            class="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-white/80 hover:text-white focus:outline-none"
            :aria-expanded="open ? 'true' : 'false'"
            @click="toggle"
        >
            <span class="truncate">{{ selected.label }}</span>
            <ChevronIcon
                class="h-4 w-4 text-white/50 transition"
                :class="open ? 'rotate-180' : ''"
            />
        </button>

        <!-- Input -->
        <input
            v-model="query"
            type="text"
            :placeholder="placeholder"
            class="flex-1 bg-transparent text-sm text-white placeholder-white/35 outline-none"
        />

        <!-- Dropdown -->
        <div
            v-if="open"
            class="absolute inset-x-3 top-full z-[9999] mt-3 max-h-[60vh] overflow-auto overscroll-contain rounded-2xl bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/15 backdrop-blur-xl sm:inset-x-auto sm:right-auto sm:left-6 sm:max-h-none sm:w-[34rem] sm:rounded-3xl"
        >
            <ul class="p-2">
                <li v-for="category in categories" :key="category.slug">
                    <button
                        type="button"
                        class="focus-visible:ring-accent flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm text-white/80 hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:outline-none"
                        @click="select(category)"
                    >
                        <span>{{ category.label }}</span>
                        <span
                            v-if="category.slug === selected.slug"
                            class="text-accent"
                            >●</span
                        >
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue"

import ChevronIcon from "../icons/ChevronIcon.vue"
import SearchIcon from "../icons/SearchIcon.vue"

const categories = [
    { label: "Video assets", slug: "video-assets" },
    { label: "LUTs", slug: "luts" },
    { label: "Sound Effects", slug: "sound-effects" },
    { label: "Prompts", slug: "prompts" },
]

const selected = ref(categories[0])
const query = ref("")
const open = ref(false)
const root = ref(null)

const placeholder = computed(() => {
    switch (selected.value.slug) {
        case "video-assets":
            return "Search transitions, captions, titles…"
        case "ai-videos":
            return "Search models, styles, shots…"
        case "luts":
            return "Search cinematic, film, teal & orange…"
        case "sound-effects":
            return "Search whooshes, hits, ambience…"
        case "prompts":
            return "Search prompt packs, hooks, scripts…"
        default:
            return "Search…"
    }
})

const toggle = () => {
    open.value = !open.value
}

const select = (category) => {
    selected.value = category

    open.value = false
}

const onClickOutside = (event) => {
    if (!open.value) return
    if (root.value && !root.value.contains(event.target)) open.value = false
}

onMounted(() => {
    window.addEventListener("mousedown", onClickOutside)
})

onBeforeUnmount(() => {
    window.removeEventListener("mousedown", onClickOutside)
})
</script>
