import { onMounted, onUnmounted } from "vue"

export const useScrollReveal = (itemRefs, options = {}) => {
    const {
        hiddenClass = "reveal-hidden",
        visibleClass = "reveal-visible",
        threshold = 0.15,
        staggerBase = 100,
        columns = 3,
    } = options

    const observers = []

    onMounted(() => {
        itemRefs.value.forEach((el, i) => {
            if (!el) return
            el.style.transitionDelay = `${Math.floor(i / columns) * staggerBase}ms`

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (!entry.isIntersecting) return
                    el.classList.remove(hiddenClass)

                    el.classList.add(visibleClass)

                    observer.unobserve(el) // fire once only
                },
                { threshold },
            )

            observer.observe(el)

            observers.push(observer)
        })
    })

    onUnmounted(() => observers.forEach((o) => o.disconnect()))
}
