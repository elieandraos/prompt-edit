# Prompt Edit

A landing page for a creative AI toolkit aimed at video editors and content creators.

---

## Design

### Tone & Aesthetic

- Modern, premium, and creative-focused — built for video editors and content creators who take their craft seriously
- Aspirational and professional without feeling corporate; the magenta accent keeps the energy high and the creative spirit intact
- Nothing sterile or enterprise-grade — this is a tool that feels like it belongs in a creative workflow

### Color Palette

- Deep navy (#0E172B) forms the foundation — immersive and cinematic
- A single bold accent, magenta-rose (#DA548B), punctuates interactive elements, calls to action, and highlights
- Sections transition between dark navy (#0E172B), deep purple-brown (#382546), and near-black for depth and richness
- White text at varying opacity levels builds hierarchy without introducing additional colors

### Typography

- Space Grotesk — a geometric sans-serif that reads as modern and slightly technical without feeling cold
- Headings are large and confident, set with tight letter-spacing for a contemporary editorial feel
- Body copy at medium weight; labels and supporting text are lighter, creating a clear visual hierarchy

### Spacing & Layout

- Generous vertical padding between sections — the design breathes rather than competes
- Content is centered and constrained to comfortable reading widths
- Cards and containers use rounded corners throughout, giving a soft, approachable quality despite the dark palette
- Mobile-first and fully responsive: the layout adapts gracefully from single-column on small screens to wider multi-column arrangements on desktop, with touch-friendly tap targets and readable type at every breakpoint

### Details & Motion

- Diagonal hero gradient blending magenta (#DA548B) into deep purple (#382546) into navy (#0E172B) — cinematic and bold
- Subtle glassmorphism: translucent surfaces with backdrop blur and thin semi-transparent borders
- Smooth, snappy transitions on all interactive elements — nothing jarring, everything intentional
- Radial glows in section backgrounds echo the magenta accent, adding warmth to otherwise dark surfaces

### User Experience

- Navigation stays unobtrusive — the header fades into content rather than competing with it
- The hero search bar is the focal point of the landing experience: large, centered, and inviting — it immediately communicates the product's purpose
- The pricing toggle between monthly and yearly billing is a smooth animated pill — a small but satisfying interaction
- The FAQ section uses an accordion pattern: answers hidden by default, revealed with a gentle expand and a rotating chevron — keeping the page scannable
- The AI tools section scrolls horizontally with gradient fade-outs at the edges, hinting at more content without cluttering the layout
- Interactive states (hover, focus) are consistent and visible throughout, making the interface feel alive without being distracting

---

## Development

```bash
npm run dev       # Start dev server with hot module replacement
npm run build     # Production build to dist/
npm run preview   # Serve the production build locally
npm run lint      # Lint with ESLint
npm run format    # Format with Prettier
```
