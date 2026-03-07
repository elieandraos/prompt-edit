<template>
    <div
        ref="root"
        class="relative z-20 flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 ring-1 ring-white/20 backdrop-blur focus-within:ring-white/40"
    >
        <!-- Magnifier (icon only, not clickable) -->
        <svg class="h-5 w-5 shrink-0 text-white/75" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                clip-rule="evenodd"
            />
        </svg>

        <!-- Category trigger -->
        <button
            type="button"
            class="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-white/80 hover:text-white focus:outline-none"
            @click="toggle"
            :aria-expanded="open ? 'true' : 'false'"
        >
            <span class="truncate">{{ selected.label }}</span>
            <svg
                class="h-4 w-4 text-white/50 transition"
                :class="open ? 'rotate-180' : ''"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
            >
                <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
                    clip-rule="evenodd"
                />
            </svg>
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
            class="absolute inset-x-3 top-full z-[9999] mt-3
         max-h-[60vh] overflow-auto overscroll-contain
         rounded-2xl sm:inset-x-auto sm:left-6 sm:right-auto
         sm:w-[34rem] sm:max-h-none sm:rounded-3xl
         bg-white/10 ring-1 ring-white/15 backdrop-blur-xl
         shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        >
            <ul class="p-2">
                <li v-for="category in categories" :key="category.slug">
                    <button
                        type="button"
                        class="flex w-full items-center justify-between rounded-xl sm:rounded-2xl
               px-4 py-3 sm:px-5 sm:py-4
               text-left text-sm text-white/80 hover:bg-white/10 hover:text-white"
                        @click="select(category)"
                    >
                        <span>{{ category.label }}</span>
                        <span v-if="category.slug === selected.slug" class="text-emerald-300/90">●</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue"

const categories = [
    { label: "Video assets", slug: "video-assets" },
    { label: "AI videos", slug: "ai-videos" },
    { label: "LUTs", slug: "luts" },
    { label: "Sound Effects", slug: "sound-effects" },
    { label: "Prompts", slug: "prompts" },
]

const selected = ref(categories[1])
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
});

function toggle() {
    open.value = !open.value
}
function select(c) {
    selected.value = c
    open.value = false
}
function onClickOutside(e) {
    if (!open.value) return
    if (root.value && !root.value.contains(e.target)) open.value = false
}

onMounted(() => {
    window.addEventListener("mousedown", onClickOutside)
});

onBeforeUnmount(() => {
    window.removeEventListener("mousedown", onClickOutside)
});
</script>
