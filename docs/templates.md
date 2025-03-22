---
title: Reusable Components
sidebar_position: 6
---

# `<template>` and `<use>`

## **Purpose**

Define reusable components to avoid repetition.

## **Example**

```html
<template id="branding">
  <div class="logo">My Brand</div>
  <music src="branding-music.mp3" />
</template>

<composite>
  <use template="branding" />
  <frame>
    <div>Welcome to my channel!</div>
  </frame>
</composite>
```

[Next: Dynamic Timing →](/docs/timing)
