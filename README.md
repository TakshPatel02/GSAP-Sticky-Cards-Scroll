# GSAP Sticky Cards ScrollTrigger

A React project demonstrating smooth scroll-based animations using GSAP ScrollTrigger. Cards stack and fade out as you scroll, creating an engaging visual experience.

## How to Create This Animation

### Step 1: Install Dependencies

```bash
npm install gsap @gsap/react
```

### Step 2: Setup Card Component

Import required packages and register ScrollTrigger plugin:

```jsx
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
```

### Step 3: Create Card with Ref

```jsx
const Card = ({ item, index }) => {
  const cardRef = useRef(null);

  // Animation logic here

  return (
    <div ref={cardRef} className="card sticky top-20">
      {/* Card content */}
    </div>
  );
};
```

### Step 4: Add ScrollTrigger Animation

```jsx
useGSAP(() => {
  if (cardRef.current) {
    gsap.to(cardRef.current, {
      scale: 0.7,
      opacity: 0,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80px",
        end: "bottom 80px",
        markers: true,
        scrub: 1.3,
      },
    });
  }
}, []);
```

### Key Points:

- **useRef**: Reference individual card element
- **useGSAP**: Hook for GSAP animations with proper cleanup
- **ScrollTrigger**: Syncs animation with scroll position
- **scrub**: Makes animation follow scroll smoothly
- **sticky positioning**: Cards stack on top of each other

## ScrollTrigger Properties Explained

### `trigger`

The element that triggers the animation when it enters the viewport.

```jsx
trigger: cardRef.current; // Start animation when this element scrolls
```

### `start`

When the animation should start. Format: `"trigger-position viewport-position"`

```jsx
start: "top 80px"; // Start when element's top hits 80px from viewport top
// Other examples:
// "top center" - element's top hits viewport center
// "center bottom" - element's center hits viewport bottom
```

### `end`

When the animation should end. Same format as `start`.

```jsx
end: "bottom 80px"; // End when element's bottom hits 80px from viewport top
```

### `scrub`

Links animation progress directly to scroll position.

```jsx
scrub: 1.3; // Smooth animation with 1.3 second delay
scrub: true; // Instant sync with scroll
scrub: false; // Play animation once when triggered
```

### `markers`

Shows visual markers for debugging trigger points.

```jsx
markers: true; // Show start/end markers (remove in production)
```

### Other Useful Properties:

- **`pin: true`** - Pins the element during animation
- **`toggleActions: "play pause resume reset"`** - Control animation on enter/leave
- **`once: true`** - Animation plays only once
- **`anticipatePin: 1`** - Prevents jump when pinning

## Run Project

```bash
npm install
npm run dev
```

---

**GitHub Repository Name**: `gsap-sticky-cards-scroll`

**Description**: Smooth scroll-based card stacking animation using React, GSAP, and ScrollTrigger with Tailwind CSS
