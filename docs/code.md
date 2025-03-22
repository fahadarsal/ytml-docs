---
title: The `<code>` Tag
sidebar_position: 11
---

# The `<code>` Tag

## **Purpose**

Displays formatted code inside YTML presentations.

## **Example**

```html
<composite id="code">
  <pre>
    <code class="language-javascript">
function App() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
    </code>
  </pre>
</composite>
```

[Next: Future Considerations →](/docs/future)
