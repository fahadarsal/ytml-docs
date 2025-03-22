---
title: The `<voice>` Tag
sidebar_position: 3
---

# The `<voice>` Tag

## **Purpose**

Defines voiceover text with optional timing.

## **Attributes**

| Attribute          | Description                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| `start` (optional) | Start time for the voiceover                                                                    |
| `end` (optional)   | End time for the voiceover. If shorter than the audio, it extends. If longer, a pause is added. |

## **Example**

```html
<voice start="0.5s" end="4s">Hello and welcome to my channel.</voice>
```
