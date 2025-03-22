---
title: Dynamic Timing
sidebar_position: 7
---

# Dynamic Timing

## **Purpose**

YTML allows both **absolute** and **relative** timing for better flexibility.

## **Syntax**

- `+X`: Starts after the previous element ends.
- `start` / `end`: Define absolute or relative times.

## **Example**

```html
<voice start="+1s" end="+5s">
  This starts 1 second after the previous segment ends.
</voice>
```

[Next: `<style>` Tag →](/docs/style)
