# GSAP Sticky Cards (React + Vite)

A scroll-driven deck of cards built with React, Tailwind CSS, GSAP, and ScrollTrigger. Cards stay sticky while you scroll; as each card crosses the center of the viewport it fades out, revealing the next card beneath it.

## Features

- Sticky stacked cards with smooth fade-out driven by ScrollTrigger
- Lightweight React + Vite setup with Tailwind CSS v4
- Reusable Card component and data-driven content
- Ready-to-deploy build (includes gh-pages script)

## Tech Stack

- React 19 + Vite 7
- Tailwind CSS 4
- GSAP 3 + @gsap/react + ScrollTrigger
- ESLint 9 (recommended linting)

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview the production build

```bash
npm run preview
```

5. Deploy to GitHub Pages (needs repo remote configured)

```bash
npm run deploy
```

## Project Structure

```
src/
  App.jsx
  Component/
    Card.jsx
    HeroSection.jsx
    Navbar.jsx
    Footer.jsx
  assets/
public/
  1.png ... 6.png
```

## How the Animation Works

- Each card uses a ref and useGSAP hook to register a ScrollTrigger.
- The card fades out as its top crosses the viewport center and is fully transparent once it is 100px above the viewport.
- scrub ties progress to scroll for a smooth handoff between cards.

Key snippet from [src/Component/Card.jsx](src/Component/Card.jsx):

```jsx
useGSAP(() => {
  if (cardRef.current) {
    gsap.to(cardRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top center",
        end: "top -100px",
        scrub: 1.5,
        markers: false,
      },
    });
  }
}, []);
```

## Customizing Content

- Update the card data array in [src/App.jsx](src/App.jsx) (titles, descriptions, image names).
- Add or replace images in public/ and reference them by file name in the data array.
- Tailwind classes on the card container in [src/Component/Card.jsx](src/Component/Card.jsx) control sizing, spacing, and colors.

## Linting

Run ESLint (optional but recommended):

```bash
npm run lint
```

## Notes

- Ensure images referenced in the data array exist in public/ (for example, 1.png ... 6.png).
- ScrollTrigger markers are disabled; enable by setting markers: true while debugging.
