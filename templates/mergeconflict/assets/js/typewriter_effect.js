<script>
document.addEventListener("DOMContentLoaded", () => {
            // Function to wrap all text nodes in spans
            function wrapAllTextNodes(node) {
                node.childNodes.forEach((child) => {
                    if (child.nodeType === Node.TEXT_NODE && child.nodeValue.trim()) {
                        // Wrap raw text in a span
                        const span = document.createElement("span");
                        span.textContent = child.nodeValue;
                        child.replaceWith(span);
                    } else if (child.nodeType === Node.ELEMENT_NODE) {
                        // Recurse into element nodes
                        wrapAllTextNodes(child);
                    }
                });
            }

            // Function to apply the typewriter effect
            function typewriterEffect(container, delay = CODE_ANIMATION_DELAY) {
                const spans = container.querySelectorAll("span");
                let index = 0;

                function showNextSpan() {
                    if (index < spans.length) {
                        spans[index].style.animationDelay = `${index * delay}ms`;
                        spans[index].style.opacity = "1";
                        index++;
                        setTimeout(showNextSpan, delay);
                    }
                }

                showNextSpan();
            }

            document.querySelectorAll("pre code").forEach((codeBlock) => {
                wrapAllTextNodes(codeBlock); // Wrap all raw text in spans
                typewriterEffect(codeBlock, CODE_ANIMATION_DELAY); // Apply typewriter effect
            });
        });
            // Initialize Mermaid with default settings
    mermaid.initialize({
        startOnLoad: true, // Mermaid automatically renders diagrams on page load
        theme: 'MERMAID_THEME',
    });
    
    // Hook into Mermaid rendering
    document.addEventListener('DOMContentLoaded', () => {
        // Wait for Mermaid to finish rendering
        mermaid.init(undefined, document.querySelectorAll('.mermaid'));
    
        // Apply animations after rendering
        setTimeout(() => {
            // const rects = document.querySelectorAll('.mermaid .label-container');
            
    const allRects = Array.from(document.querySelectorAll('.mermaid rect,.mermaid .label-container'));
    const allTexts = Array.from(document.querySelectorAll('.mermaid text'));
    
    // Step 2: Create the ordered selection
    const orderedSelection = [];
    
    // Dynamically pair each <rect> with its sibling <text> and add to the array
    allRects.forEach((rect) => {
    // Add the current <rect>
    orderedSelection.push(rect);
    
    // Check if the next sibling is <text>, and add it
    const siblingText = rect.nextElementSibling;
    if (siblingText && siblingText.tagName.toLowerCase() === 'text') {
    orderedSelection.push(siblingText);
    }
    });
    // orderedSelection.reverse();
    
    // Step 3: Add all remaining <text> elements (excluding already added ones)
      const lines=Array.from(document.querySelectorAll('.mermaid line'));
    orderedSelection.push(...lines);
    const remainingTexts = allTexts.filter((text) => !orderedSelection.includes(text));
    orderedSelection.push(...remainingTexts);
    
    // Log the ordered elements
    const rects=orderedSelection
    
    console.log({rects})
    rects.forEach((rect, index) => {
    // Set initial styles for stroke animation
    
    // rect.style.stroke = '#f86f6f'; // Stroke color
    rect.style.strokeWidth = '2'; // Stroke thickness
    if(rect.tagName!=='text'){
      rect.style.fill = 'none'; // Transparent fill
    rect.style.strokeDasharray = rect.getTotalLength(); // Get perimeter of rect
    rect.style.strokeDashoffset = rect.getTotalLength(); // Initially hide stroke
    rect.style.stroke = '#2ecc71'; // Stroke color
    rect.style.animation = `drawStroke 4s ease forwards, fillColor 3s ease ${1 + index * 0.4}s forwards`; // Stroke first, then fill
    }
    else{
      rect.style.opacity=0;
      rect.style.animation = `fade-in ${1 + index * 0.4}s forwards`; // Stroke first, then fill
    }
    rect.style.animationDelay = `${index * 400}ms`; // Staggered delay for stroke animation
    });
    }, 0); // Set timeout ensures execution happens after rendering
    });
    
    // Add the animation keyframes to the document
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes drawStroke {
        from {
            stroke-dashoffset: 100%;
        }
        to {
            stroke-dashoffset: 0;
        }
        }
    
        @keyframes fillColor {
        from {
            fill: none; /* Transparent */
        }
        to {
            fill: none; /* Fill color */
        }
        }
    `;

    document.head.appendChild(style);
    </script>

        <style>
            pre code span {
                opacity: 0;
            }
        </style>
